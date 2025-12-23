import { ImageResponse } from 'next/og';
import { loadSiteConfig } from '@/lib/contentLoader';

export const alt = 'Timestamp 1337 - Web3 & AI Conference';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  try {
    const siteConfig = loadSiteConfig();

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #000000 0%, #03025d 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 900,
                color: 'white',
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              SHAPE NEXT
            </div>
            <div
              style={{
                fontSize: 100,
                fontWeight: 900,
                color: 'white',
                textAlign: 'center',
                letterSpacing: '-0.02em',
              }}
            >
              TIMESTAMP 1337
            </div>
            <div
              style={{
                fontSize: 32,
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                maxWidth: 800,
              }}
            >
              {siteConfig?.seo?.description || 'Web3 & AI Conference'}
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    // Fallback if there's an error
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #000000 0%, #03025d 100%)',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
            }}
          >
            TIMESTAMP 1337
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}

