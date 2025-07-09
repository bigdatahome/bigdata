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
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.966-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-red-600 mb-4">만료된 링크</h1>
            <p className="text-gray-600">
              이 링크는 보안을 위해 7일 후 만료됩니다.<br />
              (접수일: {createdAt.toLocaleDateString('ko-KR')})
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">상담 문의</h1>
              <p className="text-gray-300 mt-1">
                {createdAt.toLocaleDateString('ko-KR')} {createdAt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          
          {/* 상담자 정보 */}
          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">이름</label>
                <p className="text-xl font-bold text-gray-900">{consultation.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">연락처</label>
                <p className="text-lg text-gray-900 font-medium">{consultation.phone}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">이메일</label>
                <p className="text-lg text-gray-900">{consultation.email}</p>
              </div>
            </div>
            
            {/* 상담 내용 */}
            <div className="space-y-3 mb-6">
              <label className="block text-sm font-medium text-gray-500">상담 요청 내용</label>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {consultation.message}
                </p>
              </div>
            </div>
            
            {/* 전화하기 버튼 */}
            <div className="text-center">
              <a 
                href={`tel:${consultation.phone}`}
                className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors font-bold text-lg shadow-lg"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화하기
              </a>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center text-sm text-gray-500">
          <p>빅데이터기술연구원(주) 관리자 전용</p>
        </div>
      </div>
    </div>
  );
} 