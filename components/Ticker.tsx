'use client'

import { useState } from 'react'

// Ticker deltas keep fixed market semantics (green up, red down) no matter
// which accent mode the visitor picked — orange up-arrows read as losses.
const ITEMS: { sym: string; delta: string; up: boolean }[] = [
  { sym: 'PYTHON', delta: '+8.4', up: true },
  { sym: 'PYTORCH', delta: '+6.2', up: true },
  { sym: 'ROS2', delta: '+4.1', up: true },
  { sym: 'OPENCV', delta: '+7.7', up: true },
  { sym: 'YOLO', delta: '+5.3', up: true },
  { sym: 'TYPESCRIPT', delta: '+3.9', up: true },
  { sym: 'NEXTJS', delta: '+2.8', up: true },
  { sym: 'SUPABASE', delta: '+1.6', up: true },
  { sym: 'AWS', delta: '+0.9', up: true },
  { sym: 'SQL', delta: '+1.2', up: true },
  { sym: 'COFFEE', delta: '+9.9', up: true },
  { sym: 'SLEEP', delta: '-3.2', up: false },
  { sym: 'BULLS', delta: '-12.6', up: false },
]

export default function Ticker() {
  const [paused, setPaused] = useState(false)

  const row = (
    <>
      {ITEMS.map((item) => (
        <span
          key={item.sym}
          className="mx-5 inline-flex items-baseline gap-2 font-mono text-xs tracking-wider"
        >
          <span className="text-ink">{item.sym}</span>
          <span className={item.up ? 'text-[#0e7c5b]' : 'text-[#a03d2e]'}>
            {item.up ? '▲' : '▼'} {item.delta}
          </span>
        </span>
      ))}
    </>
  )

  return (
    <section className="ticker relative border-b border-line bg-raised">
      <h2 className="sr-only">Toolbox</h2>
      <p className="sr-only">
        Python, PyTorch, ROS2, OpenCV, YOLO, TypeScript, Next.js, Supabase,
        AWS, and SQL. The ticker prices are decorative.
      </p>
      <div
        aria-hidden="true"
        className={`marquee overflow-hidden py-2 ${paused ? 'paused' : ''}`}
      >
        <div className="marquee-track flex w-max whitespace-nowrap">
          <div>{row}</div>
          <div>{row}</div>
        </div>
      </div>
      {/* soft fade at both edges so symbols don't hard-clip */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-raised to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-raised via-raised/80 to-transparent"
      />
      <button
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={`${paused ? 'Resume' : 'Pause'} skills ticker`}
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center font-mono text-[10px] text-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {paused ? '▶' : '❚❚'}
      </button>
    </section>
  )
}
