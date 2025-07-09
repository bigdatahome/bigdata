import { NextRequest, NextResponse } from 'next/server'
import { submitConsultation } from '@/lib/supabase'

// OAuth 방식으로 SMS 발송 함수
async function sendSMSDirectly(phoneNumber: string, message: string, refkey: string) {
  try {
    const gabiaCredentials = process.env.GABIA_SMS_TOKEN; // SMS_ID:API_KEY 형태
    const callbackNumber = process.env.GABIA_CALLBACK_NUMBER;
    
    console.log('🔧 OAuth SMS 발송 시작');
    console.log('- 수신번호:', phoneNumber);
    console.log('- 발신번호:', callbackNumber);
    console.log('- 메시지 길이:', message.length);
    console.log('- Refkey:', refkey);
    
    if (!gabiaCredentials || !callbackNumber) {
      throw new Error('SMS 환경변수가 설정되지 않았습니다.');
    }

    // SMS_ID:API_KEY 파싱
    const [smsId, apiKey] = gabiaCredentials.split(':');
    
    console.log('🔍 인증 정보:');
    console.log('- SMS_ID:', smsId);
    console.log('- API_KEY 길이:', apiKey?.length || 0);
    
    if (!smsId || !apiKey) {
      throw new Error('GABIA_SMS_TOKEN 형식이 올바르지 않습니다. SMS_ID:API_KEY 형태로 설정해주세요.');
    }

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
      throw new Error(`OAuth 실패: ${authResult}`);
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
    smsBody.append("refkey", refkey);

    const smsResponse = await fetch("https://sms.gabia.com/api/send/sms", {
      method: "POST",
      headers: smsHeaders,
      body: smsBody,
    });
    
    const smsResult = await smsResponse.text();
    console.log('📥 SMS 응답:', smsResponse.status, smsResult);
    
    // 토큰 오류인 경우 도움말 출력
    if (smsResult.includes('invalid_token') || smsResult.includes('잘못된 토큰')) {
      console.log('');
      console.log('🚨 토큰 오류 해결 방법:');
      console.log('1. 가비아 SMS 관리 페이지에서 사용자ID와 API키 확인');
      console.log('2. 환경변수를 "SMS_ID:API_KEY" 형태로 설정 (Base64 인코딩 없이)');
      console.log('3. 예시: GABIA_SMS_TOKEN=phd1472:your_api_key_here');
      console.log('');
    }
    
    return {
      success: smsResponse.ok && !smsResult.includes('invalid_token'),
      status: smsResponse.status,
      response: smsResult
    };
  } catch (error) {
    console.error('❌ OAuth SMS 발송 오류:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // 🛡️ 1단계 보안 강화: 요청 크기 제한
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 5000) { // 5KB 제한
      return NextResponse.json(
        { error: '요청 크기가 제한을 초과했습니다.' },
        { status: 413 }
      )
    }

    // 🛡️ Content-Type 검증
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: '올바르지 않은 요청 형식입니다.' },
        { status: 400 }
      )
    }

    const body = await request.json()
    
    // 기존 데이터 검증
    const { name, phone, email, message } = body
    
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: '모든 필수 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 🛡️ 입력값 길이 제한
    if (name.length > 50) {
      return NextResponse.json(
        { error: '이름은 50자를 초과할 수 없습니다.' },
        { status: 400 }
      )
    }

    if (phone.length > 20) {
      return NextResponse.json(
        { error: '전화번호 형식이 올바르지 않습니다.' },
        { status: 400 }
      )
    }

    if (email.length > 100) {
      return NextResponse.json(
        { error: '이메일 주소가 너무 깁니다.' },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: '메시지는 1000자를 초과할 수 없습니다.' },
        { status: 400 }
      )
    }

    // 🛡️ 특수 문자 및 스크립트 태그 검증
    const dangerousChars = /<script|javascript:|vbscript:|data:/i
    if (dangerousChars.test(name) || dangerousChars.test(email) || dangerousChars.test(message)) {
      return NextResponse.json(
        { error: '허용되지 않는 문자가 포함되어 있습니다.' },
        { status: 400 }
      )
    }

    // 기존 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      )
    }

    // 기존 휴대폰 번호 형식 검증 (한국 휴대폰 번호)
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/
    if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
      return NextResponse.json(
        { error: '올바른 휴대폰 번호를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 🛡️ 입력값 정제 (XSS 방지)
    const sanitizedData = {
      name: name.trim().replace(/[<>]/g, ''),
      phone: phone.trim().replace(/[^0-9-]/g, ''),
      email: email.trim().toLowerCase(),
      message: message.trim().replace(/[<>]/g, '')
    }

    console.log('📝 상담 접수 처리 시작:', sanitizedData.name);

    // Supabase에 저장
    const result = await submitConsultation(sanitizedData)

    console.log('✅ Supabase 저장 완료');

    // SMS 알림 발송 (직접 호출)
    if (result && result.length > 0) {
      try {
        const consultation = result[0];
        const adminPhone = process.env.ADMIN_PHONE_NUMBER;
        
        console.log('📱 OAuth SMS 발송 시작:');
        console.log('- 관리자 번호:', adminPhone);
        console.log('- view_token:', consultation.view_token);
        
        if (adminPhone && consultation.view_token) {
          // https:// 제거한 짧은 링크 생성
          const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace('https://', '') || 'bigdt.co.kr';
          const shortLink = `${baseUrl}/v/${consultation.view_token}`;
          
          const smsMessage = `[상담문의 도착]
이름: ${sanitizedData.name}
연락처: ${sanitizedData.phone}
링크: ${shortLink}`;

          console.log('📤 SMS 메시지:', smsMessage);

          // OAuth 방식으로 SMS 발송
          const smsResult = await sendSMSDirectly(
            adminPhone,
            smsMessage,
            `CONSULTATION_${consultation.id}_${Date.now()}`
          );
          
          if (smsResult.success) {
            console.log('✅ OAuth SMS 발송 성공');
          } else {
            console.error('❌ OAuth SMS 발송 실패:', smsResult.response);
          }
        } else {
          console.log('⚠️ SMS 발송 건너뜀: 환경변수 또는 토큰 누락');
          console.log('- adminPhone:', !!adminPhone);
          console.log('- view_token:', !!consultation.view_token);
        }
      } catch (smsError) {
        console.error('❌ OAuth SMS 발송 중 오류:', smsError);
        // SMS 실패해도 상담 접수는 성공으로 처리
      }
    }

    console.log('✅ 상담 접수 처리 완료');

    // 🛡️ 응답에서 민감한 정보 제거
    return NextResponse.json({
      success: true,
      message: '상담 신청이 접수되었습니다. 1일 이내 연락드리겠습니다.',
      // data: result - 데이터베이터 정보 노출 방지
    })

  } catch (error) {
    // 🛡️ 에러 정보 노출 방지
    console.error('❌ 상담 접수 처리 실패:', error)
    
    return NextResponse.json(
      { error: '상담 신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
} 