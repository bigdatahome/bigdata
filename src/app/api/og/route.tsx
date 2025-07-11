import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || '빅데이터기술연구원(주)';
  const subtitle = searchParams.get('subtitle') || 'AI와 빅데이터를 현실로 만드는 파트너';
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
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
        {/* 회사 로고 영역 */}
        <div
          style={{
            width: '120px',
            height: '120px',
            background: 'white',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#1f2937',
          }}
        >
          BD
        </div>
        
        {/* MVP 배지 */}
        <div
          style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
            padding: '8px 16px',
            borderRadius: '16px',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            빠른 AI MVP • 신속 구현
          </span>
        </div>
        
        {/* 메인 제목 */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '24px',
            maxWidth: '1000px',
          }}
        >
          {title}
        </h1>
        
        {/* 부제목 */}
        <p
          style={{
            fontSize: '36px',
            color: '#d1d5db',
            textAlign: 'center',
            lineHeight: '1.3',
            maxWidth: '800px',
          }}
        >
          {subtitle}
        </p>
        
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