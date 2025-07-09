import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface ConsultationViewProps {
  params: {
    token: string;
  };
}

export const metadata: Metadata = {
  title: '상담 문의 조회 - 빅데이터기술연구원(주)',
  description: '관리자용 상담 문의 조회 페이지',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ConsultationView({ params }: ConsultationViewProps) {
  // 토큰으로 상담 내용 조회
  const { data: consultation, error } = await supabase
    .from('consultation_requests')
    .select('*')
    .eq('view_token', params.token)
    .single();

  if (error || !consultation) {
    notFound();
  }

  // 7일 이상 된 링크는 만료 처리 (보안)
  const createdAt = new Date(consultation.created_at);
  const now = new Date();
  const daysDiff = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
  const isExpired = daysDiff > 7;

  if (isExpired) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <div className="text-center">
            <h1 className="text-xl font-bold text-red-600 mb-4">⚠️ 만료된 링크</h1>
            <p className="text-gray-600">
              이 링크는 보안을 위해 7일 후 만료됩니다.<br />
              (접수일: {createdAt.toLocaleDateString('ko-KR')})
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 상태에 따른 배지 스타일
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">대기중</span>;
      case 'contacted':
        return <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">연락완료</span>;
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">완료</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">📋 상담 문의 내용</h1>
                <p className="text-gray-300 mt-1">
                  접수일: {createdAt.toLocaleString('ko-KR')}
                </p>
              </div>
              <div>
                {getStatusBadge(consultation.status)}
              </div>
            </div>
          </div>
          
          {/* 상담자 정보 */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-500">이름</label>
                <p className="text-lg font-medium text-gray-900">{consultation.name}</p>
              </div>
              
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-500">연락처</label>
                <div className="flex items-center gap-2">
                  <p className="text-lg text-gray-900">{consultation.phone}</p>
                  <a 
                    href={`tel:${consultation.phone}`}
                    className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition-colors"
                  >
                    📞 전화걸기
                  </a>
                </div>
              </div>
              
              <div className="space-y-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-500">이메일</label>
                <div className="flex items-center gap-2">
                  <p className="text-lg text-gray-900">{consultation.email}</p>
                  <a 
                    href={`mailto:${consultation.email}`}
                    className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors"
                  >
                    ✉️ 이메일 보내기
                  </a>
                </div>
              </div>
            </div>
            
            {/* 상담 내용 */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-500">상담 요청 내용</label>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {consultation.message}
                </p>
              </div>
            </div>
            
            {/* 액션 버튼들 */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 mt-6">
              <a 
                href={`tel:${consultation.phone}`}
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                📞 전화 상담하기
              </a>
              <a 
                href={`mailto:${consultation.email}?subject=[빅데이터기술연구원] ${consultation.name}님 상담 관련&body=안녕하세요, ${consultation.name}님.%0A%0A문의해주신 내용에 대해 답변드리겠습니다.%0A%0A감사합니다.`}
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ✉️ 이메일 답변하기
              </a>
              <a 
                href={`sms:${consultation.phone}?body=[빅데이터기술연구원] ${consultation.name}님, 안녕하세요. 문의해주신 내용 확인했습니다.`}
                className="inline-flex items-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
              >
                💬 문자 보내기
              </a>
            </div>
          </div>
        </div>

        {/* 상담 정보 요약 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📊 상담 정보</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">문의 ID</div>
              <div className="font-medium">{consultation.id}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">접수 상태</div>
              <div className="font-medium">{getStatusBadge(consultation.status)}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-500">조회 링크</div>
              <div className="font-medium text-xs text-gray-600">
                {daysDiff < 1 ? '오늘' : `${Math.floor(daysDiff)}일 전`} 생성
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>빅데이터기술연구원(주) 관리자 전용 페이지</p>
          <p className="mt-1">이 링크는 보안을 위해 7일 후 자동 만료됩니다.</p>
        </div>
      </div>
    </div>
  );
} 