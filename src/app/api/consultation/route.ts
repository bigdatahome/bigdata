import { NextRequest, NextResponse } from 'next/server'
import { submitConsultation } from '@/lib/supabase'

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

    // Supabase에 저장
    const result = await submitConsultation(sanitizedData)

    // TODO: SMS 알림 발송 (나중에 구현)
    // await sendSMSNotification({ name, phone, message })

    // 🛡️ 응답에서 민감한 정보 제거
    return NextResponse.json({
      success: true,
      message: '상담 신청이 접수되었습니다. 1일 이내 연락드리겠습니다.',
      // data: result - 데이터베이스 정보 노출 방지
    })

  } catch (error) {
    // 🛡️ 에러 정보 노출 방지
    console.error('Error processing consultation request:', error)
    
    return NextResponse.json(
      { error: '상담 신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
} 