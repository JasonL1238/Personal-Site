import { ImageResponse } from 'next/og'

export const alt = 'Jason Li — CS + Math @ Penn'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PAPER = '#faf6ef'
const INK = '#17130c'
const MUTED = '#6e6557'
const ACCENT = '#2b50e0'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: PAPER,
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            letterSpacing: '0.25em',
            color: MUTED,
          }}
        >
          JASON LI · CS + MATH @ PENN
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 36,
            fontSize: 84,
            lineHeight: 1.1,
            color: INK,
          }}
        >
          <div style={{ display: 'flex' }}>I build evals, models,</div>
          <div style={{ display: 'flex', color: ACCENT }}>and robot eyes.</div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            fontSize: 26,
            color: INK,
          }}
        >
          ICML AI4Law ’26 · first author&nbsp;&nbsp;·&nbsp;&nbsp;SAE Aero
          Design · 1st-place report
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 16,
            fontSize: 26,
            color: MUTED,
          }}
        >
          github.com/JasonL1238
        </div>
        <div
          style={{
            position: 'absolute',
            left: 80,
            bottom: 60,
            width: 1040,
            height: 4,
            backgroundColor: ACCENT,
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
