import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, message, refkey } = await request.json();
    
    // 환경변수 확인
    const gabiaCredentials = process.env.GABIA_SMS_TOKEN; // SMS_ID:API_KEY 형태
    const callbackNumber = process.env.GABIA_CALLBACK_NUMBER;
    
    console.log('=== OAuth SMS API 디버깅 시작 ===');
    console.log('환경변수 확인:');
    console.log('- GABIA_SMS_TOKEN 존재:', !!gabiaCredentials);
    console.log('- GABIA_CALLBACK_NUMBER:', callbackNumber);
    console.log('- 요청 데이터:', { phoneNumber, messageLength: message?.length, refkey });
    
    if (!gabiaCredentials || !callbackNumber) {
      console.error('❌ SMS 환경변수가 설정되지 않았습니다.');
      return NextResponse.json(
        { success: false, error: 'SMS 설정이 올바르지 않습니다.' },
        { status: 500 }
      );
    }

    // SMS_ID:API_KEY 파싱
    const [smsId, apiKey] = gabiaCredentials.split(':');
    
    console.log('🔍 인증 정보:');
    console.log('- SMS_ID:', smsId);
    console.log('- API_KEY 길이:', apiKey?.length || 0);
    
    if (!smsId || !apiKey) {
      console.error('❌ GABIA_SMS_TOKEN 형식 오류');
      return NextResponse.json(
        { success: false, error: 'GABIA_SMS_TOKEN 형식이 올바르지 않습니다. SMS_ID:API_KEY 형태로 설정해주세요.' },
        { status: 500 }
      );
    }

    console.log('✅ 환경변수 확인 완료');

    // 1단계: OAuth 토큰 획득 (SMS_ID:API_KEY를 Base64 인코딩)
    console.log('📤 1단계: OAuth 토큰 요청...');
    
    const authToken = Buffer.from(`${smsId}:${apiKey}`).toString('base64');
    
    const authHeaders = new Headers();
    authHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    authHeaders.append("Authorization", `Basic ${authToken}`);
    
    const authBody = new URLSearchParams();
    authBody.append("grant_type", "client_credentials");

    const authResponse = await fetch("https://sms.gabia.com/oauth/token", {
      method: "POST",
      headers: authHeaders,
      body: authBody,
    });
    
    const authResult = await authResponse.text();
    console.log('📥 OAuth 응답:', authResponse.status, authResult);

    if (!authResponse.ok) {
      console.error('❌ OAuth 토큰 획득 실패');
      return NextResponse.json({ 
        success: false, 
        error: 'OAuth 토큰 획득 실패',
        gabiaResponse: authResult,
        status: authResponse.status
      }, { status: 400 });
    }

    // 액세스 토큰 추출
    const authData = JSON.parse(authResult);
    const accessToken = authData.access_token;
    
    console.log('✅ OAuth 토큰 획득 성공');

    // 2단계: SMS_ID:ACCESS_TOKEN으로 새로운 인증 토큰 생성
    console.log('📤 2단계: SMS 발송용 토큰 생성...');
    
    console.log('- SMS_ID:', smsId);
    console.log('- ACCESS_TOKEN 앞 20자:', accessToken.substring(0, 20) + '...');
    
    // SMS_ID:ACCESS_TOKEN으로 새로운 토큰 생성
    const smsTokenString = `${smsId}:${accessToken}`;
    const smsToken = Buffer.from(smsTokenString).toString('base64');
    
    console.log('- 새로운 SMS 토큰 생성 완료');

    // 3단계: SMS 발송
    console.log('📤 3단계: SMS 발송...');
    
    const smsHeaders = new Headers();
    smsHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    smsHeaders.append("Authorization", `Basic ${smsToken}`); // 새로운 토큰 사용
    
    const smsBody = new URLSearchParams();
    smsBody.append("phone", phoneNumber);
    smsBody.append("callback", callbackNumber);
    smsBody.append("message", message);
    smsBody.append("refkey", refkey || `SMS_${Date.now()}`);

    console.log('📤 가비아 SMS API 호출...');
    console.log('- URL: https://sms.gabia.com/api/send/sms');
    console.log('- 요청 바디:', smsBody.toString());

    const smsResponse = await fetch("https://sms.gabia.com/api/send/sms", {
      method: "POST",
      headers: smsHeaders,
      body: smsBody,
    });
    
    const smsResult = await smsResponse.text();
    
    console.log('📥 가비아 SMS API 응답:');
    console.log('- HTTP 상태:', smsResponse.status);
    console.log('- 응답 헤더:', Object.fromEntries(smsResponse.headers.entries()));
    console.log('- 응답 내용:', smsResult);
    console.log('- 응답 길이:', smsResult?.length);
    
    // 가비아 응답 분석
    const isSuccess = smsResponse.ok && (
      smsResult.includes('"code":"200"') || 
      smsResult.includes('"message":"Success"') ||
      smsResult.includes('success') ||
      smsResponse.status === 200
    );
    
    console.log('📊 응답 분석:');
    console.log('- response.ok:', smsResponse.ok);
    console.log('- 성공 판정:', isSuccess);
    
    // 토큰 오류인 경우 도움말 출력
    if (smsResult.includes('invalid_token') || smsResult.includes('잘못된 토큰')) {
      console.log('');
      console.log('🚨 토큰 오류 해결 방법:');
      console.log('1. 가비아 SMS 관리 페이지에서 사용자ID와 API키 확인');
      console.log('2. 환경변수를 "SMS_ID:API_KEY" 형태로 설정 (Base64 인코딩 없이)');
      console.log('3. 예시: GABIA_SMS_TOKEN=phd1472:your_api_key_here');
      console.log('');
    }
    
    if (isSuccess) {
      console.log('✅ OAuth SMS 발송 성공');
      return NextResponse.json({ 
        success: true, 
        message: 'OAuth SMS 발송 성공',
        gabiaResponse: smsResult,
        status: smsResponse.status
      });
    } else {
      console.error('❌ OAuth SMS 발송 실패');
      return NextResponse.json({ 
        success: false, 
        error: 'OAuth SMS 발송 실패',
        gabiaResponse: smsResult,
        status: smsResponse.status
      }, { status: 400 });
    }
    
  } catch (error) {
    console.error('❌ OAuth SMS 발송 중 시스템 오류:', error);
    console.error('오류 스택:', error instanceof Error ? error.stack : error);
    return NextResponse.json({ 
      success: false, 
      error: 'OAuth SMS 발송 처리 중 오류가 발생했습니다.',
      details: error instanceof Error ? error.message : '알 수 없는 오류'
    }, { status: 500 });
  }
} 