import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || '전체보기';
  const count = searchParams.get('count') || '3';
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: '"Noto Sans", sans-serif',
        }}
      >
        {/* 상단 회사 정보 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#0f172a',
            }}
          >
            BD
          </div>
          <div
            style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '600',
            }}
          >
            빅데이터기술연구원(주)
          </div>
        </div>
        
        {/* 메인 제목 */}
        <h1
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '24px',
          }}
        >
          자료실
        </h1>
        
        {/* 카테고리 배지 */}
        <div
          style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
            padding: '16px 32px',
            borderRadius: '24px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: '36px',
              fontWeight: '600',
            }}
          >
            {category}
          </span>
        </div>
        
        {/* 설명 텍스트 */}
        <p
          style={{
            fontSize: '32px',
            color: '#cbd5e1',
            textAlign: 'center',
            lineHeight: '1.3',
            marginBottom: '40px',
          }}
        >
          지식과 경험을 함께 나눕니다
        </p>
        
        {/* 자료 개수 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#1e293b',
            padding: '20px 40px',
            borderRadius: '16px',
            border: '2px solid #334155',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              background: '#3b82f6',
              borderRadius: '50%',
              marginRight: '16px',
            }}
          />
          <span
            style={{
              color: '#e2e8f0',
              fontSize: '28px',
              fontWeight: '500',
            }}
          >
            {count}개의 자료
          </span>
        </div>
        
        {/* 하단 장식 */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            right: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=3600, immutable',
      },
    }
  );
} 