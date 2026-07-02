import { ImageResponse } from 'next/og'

export const alt = 'Kaled Barreto — Front-end Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f4ebd9',
          padding: '64px',
          position: 'relative',
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: 'absolute',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: '#1a66ff',
            top: -100,
            right: -80,
          }}
        />
        {/* Decorative square */}
        <div
          style={{
            position: 'absolute',
            width: 140,
            height: 140,
            background: '#e63917',
            border: '6px solid #111111',
            bottom: 60,
            right: 90,
          }}
        />

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#1a66ff',
          }}
        >
          Front-end Developer
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
              color: '#111111',
            }}
          >
            Kaled
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
              color: '#111111',
            }}
          >
            Barreto
          </div>
          <div
            style={{
              display: 'flex',
              width: 90,
              height: 8,
              background: '#f2d13d',
              marginTop: 28,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
