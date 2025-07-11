import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const service = searchParams.get('service') || 'AI 솔루션';
  const description = searchParams.get('description') || '실전 중심의 AI 솔루션';
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: '"Noto Sans", sans-serif',
          position: 'relative',
        }}
      >
        {/* 배경 패턴 */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            opacity: '0.1',
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255,255,255,0.1) 35px,
              rgba(255,255,255,0.1) 70px
            )`,
          }}
        />
        
        {/* 상단 회사 정보 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
            zIndex: '1',
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
              color: '#1e40af',
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
        
        {/* 서비스 배지 */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '12px 24px',
            borderRadius: '20px',
            marginBottom: '24px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <span
            style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: '500',
            }}
          >
            빠른 AI MVP • SERVICES
          </span>
        </div>
        
        {/* 메인 제목 */}
        <h1
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '32px',
            maxWidth: '900px',
          }}
        >
          {service}
        </h1>
        
        {/* 설명 */}
        <p
          style={{
            fontSize: '36px',
            color: '#e0e7ff',
            textAlign: 'center',
            lineHeight: '1.3',
            maxWidth: '800px',
            marginBottom: '40px',
          }}
        >
          {description}
        </p>
        
        {/* 특징 아이콘들 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  background: 'white',
                  borderRadius: '50%',
                }}
              />
            </div>
          ))}
        </div>
        
        {/* 하단 장식 */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '80px',
            right: '80px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.6)',
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