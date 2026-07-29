'use client'

import { useLayoutEffect, useState } from 'react'
import SystemCanvas, { Mode } from './SystemCanvas'

// Single source of truth for the mode system. The vivid canvas colors may
// differ from the CSS --accent (which is darkened for AA text contrast).
export const MODES: {
  key: Mode
  label: string
  index: string
  line: string
  canvasAccent: string
}[] = [
  {
    key: 'safety',
    label: 'ai safety',
    index: '01',
    line: 'evals that catch AI failures early.',
    canvasAccent: '#2b50e0',
  },
  {
    key: 'markets',
    label: 'markets',
    index: '02',
    line: 'models for markets and games of skill.',
    canvasAccent: '#0e7c5b',
  },
  {
    key: 'robotics',
    label: 'robotics',
    index: '03',
    line: 'perception code for robots that fly.',
    canvasAccent: '#e8490f',
  },
]

export const DEFAULT_MODE: Mode = 'safety'

export default function Hero() {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE)

  // Layout effect so the CSS accent flips before paint, in the same frame
  // as the canvas accent prop.
  useLayoutEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  const active = MODES.find((m) => m.key === mode)!

  return (
    <section
      id="top"
      className="relative flex min-h-[72svh] flex-col overflow-hidden border-b border-line"
    >
      <SystemCanvas mode={mode} accent={active.canvasAccent} />
      <div
        aria-hidden="true"
        className="hero-canvas-wash pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-8 pt-24 sm:pb-10 sm:pt-20 lg:px-8">
        <p className="order-1 font-mono text-xs font-medium uppercase tracking-[0.25em] text-ink sm:text-sm">
          Jason Li · CS + Math @ Penn · est. Chicago
        </p>

        {/* All three headline variants are stacked invisibly in one grid
            cell so the h1 always reserves the tallest variant's height —
            no layout shift when the mode (or viewport) changes. */}
        <h1 className="order-2 mt-4 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          <span className="grid" aria-live="polite">
            {MODES.map((m) => (
              <span
                key={m.key}
                aria-hidden="true"
                className="invisible [grid-area:1/1]"
              >
                I build <em className="italic">{m.line}</em>
              </span>
            ))}
            <span key={mode} className="animate-fade-up [grid-area:1/1]">
              I build <em className="italic text-accent">{active.line}</em>
            </span>
          </span>
        </h1>

        {/* On mobile the chips come right after the headline so the
            signature interaction is visible in the first viewport. */}
        <div className="order-3 mt-5 flex flex-wrap items-center gap-2 sm:order-4 sm:mt-5 sm:gap-3">
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              aria-pressed={mode === m.key}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:px-4 sm:py-2 sm:text-xs ${
                mode === m.key
                  ? 'border-accent bg-accent text-paper'
                  : 'border-line bg-paper text-muted hover:border-accent hover:text-accent'
              }`}
            >
              <span className="opacity-60">{m.index}</span>
              {m.label}
            </button>
          ))}
          <span className="ml-1 hidden font-mono text-[11px] text-muted sm:inline">
            ← pick a system, move your cursor
          </span>
          <span className="w-full font-mono text-[11px] text-muted sm:hidden">
            ↑ tap a system — the canvas steers itself
          </span>
        </div>

        <p className="order-4 mt-5 max-w-xl text-base leading-relaxed text-muted sm:order-3 sm:mt-5 sm:text-lg">
          Engineering student at Penn, currently shipping computer vision at
          Zenblen and researching how AI systems behave outside the demo.
        </p>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto mb-4 flex w-full max-w-6xl items-end px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
          scroll ↓
        </p>
      </div>
    </section>
  )
}
