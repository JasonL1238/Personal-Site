'use client'

import { useEffect, useRef } from 'react'

export type Mode = 'markets' | 'safety' | 'robotics'

const INK = '#17130c'

// One canvas, three ambient simulations: a scrolling market chart, an
// alignment vector field, and a boid swarm. Ink on paper, accent highlights.
// The accent is passed in as a prop so the canvas can never lag the UI theme.
export default function SystemCanvas({
  mode,
  accent,
}: {
  mode: Mode
  accent: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // Pointer state lives outside the effect so it survives mode re-inits;
  // client coords are stored raw and converted at draw time so they never
  // go stale when the page scrolls under a motionless cursor.
  const pointerRef = useRef({ clientX: -9999, clientY: -9999, has: false })
  const accentRef = useRef(accent)

  useEffect(() => {
    accentRef.current = accent
  }, [accent])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionQuery.matches

    let width = 0
    let height = 0
    let dpr = 1
    let docLeft = 0
    let docTop = 0
    let raf = 0
    let running = false
    let visible = true
    let disposed = false
    let lastT = 0
    let simT = 0
    let resizeTimer: ReturnType<typeof setTimeout> | undefined

    const pointer = pointerRef.current
    const cursor = { x: 0, y: 0, active: false }
    const updateCursor = () => {
      if (pointer.has) {
        const px = pointer.clientX + window.scrollX - docLeft
        const py = pointer.clientY + window.scrollY - docTop
        if (px >= 0 && py >= 0 && px <= width && py <= height) {
          cursor.x = px
          cursor.y = py
          cursor.active = true
          return cursor
        }
      }
      // slow autonomous attractor so the sim demos itself on touch
      // devices and idle screens
      cursor.x = width * (0.5 + 0.38 * Math.sin(simT * 0.00021))
      cursor.y = height * (0.5 + 0.32 * Math.sin(simT * 0.00013 + 1.7))
      cursor.active = false
      return cursor
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      docLeft = rect.left + window.scrollX
      docTop = rect.top + window.scrollY
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // ---------- markets: scrolling random-walk price lines ----------
    type Series = { ys: number[]; base: number; vol: number; accent: boolean }
    let series: Series[] = []
    let marketProgress = 0 // 0..1 between sample pushes
    const STEP = 8 // px between samples
    const PUSH_MS = 110

    // ---------- safety: vector field that aligns near the cursor ----------
    type Cell = { x: number; y: number; angle: number; aligned: number }
    let cells: Cell[] = []
    const GRID = 52

    // ---------- robotics: boids ----------
    type Boid = { x: number; y: number; vx: number; vy: number; accent: boolean }
    let boids: Boid[] = []

    const init = () => {
      if (width < 10 || height < 10) return
      if (mode === 'markets') {
        const count = Math.max(6, Math.min(12, Math.floor(height / 60)))
        const cols = Math.ceil(width / STEP) + 3
        series = Array.from({ length: count }, (_, i) => {
          const base = (height * (i + 0.8)) / (count + 1)
          const s: Series = {
            ys: [],
            base,
            vol: 2 + Math.random() * 4,
            // accent line rides near the top so it never cuts through
            // the hero copy, which sits in the vertical middle
            accent: i === 1,
          }
          let y = base
          for (let c = 0; c < cols; c++) {
            y += (Math.random() - 0.5) * s.vol * 2
            y = y * 0.98 + base * 0.02
            s.ys.push(y)
          }
          return s
        })
        marketProgress = 0
      } else if (mode === 'safety') {
        cells = []
        for (let x = GRID / 2; x < width; x += GRID) {
          for (let y = GRID / 2; y < height; y += GRID) {
            cells.push({
              x,
              y,
              angle: Math.random() * Math.PI * 2,
              aligned: 0,
            })
          }
        }
      } else {
        const count = Math.max(
          30,
          Math.min(70, Math.floor((width * height) / 16000))
        )
        boids = Array.from({ length: count }, (_, i) => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          accent: i % 9 === 0,
        }))
      }
    }

    const drawMarkets = (dt: number) => {
      const c = updateCursor()
      const accentColor = accentRef.current
      marketProgress += dt / PUSH_MS
      while (marketProgress >= 1) {
        marketProgress -= 1
        for (const s of series) {
          const last = s.ys[s.ys.length - 1]
          const nearCursor = Math.abs(c.y - last) < 120 ? 3 : 1
          let next = last + (Math.random() - 0.5) * s.vol * 2 * nearCursor
          next = next * 0.985 + s.base * 0.015
          s.ys.push(next)
          s.ys.shift()
        }
      }
      const offset = marketProgress * STEP
      for (const s of series) {
        ctx.beginPath()
        for (let i = 0; i < s.ys.length; i++) {
          const x = i * STEP - offset
          if (i === 0) ctx.moveTo(x, s.ys[i])
          else ctx.lineTo(x, s.ys[i])
        }
        if (s.accent) {
          ctx.strokeStyle = accentColor
          ctx.globalAlpha = 0.9
          ctx.lineWidth = 1.5
        } else {
          ctx.strokeStyle = INK
          ctx.globalAlpha = 0.1
          ctx.lineWidth = 1
        }
        ctx.stroke()
      }
      // "live price" dot rides the accent line at a fixed x, interpolated
      // between samples so it never jumps when a sample is pushed
      const acc = series.find((s) => s.accent)
      if (acc) {
        const xDot = (acc.ys.length - 2.5) * STEP
        const f = (xDot + offset) / STEP
        const i = Math.max(0, Math.min(acc.ys.length - 2, Math.floor(f)))
        const frac = f - i
        const y = acc.ys[i] * (1 - frac) + acc.ys[i + 1] * frac
        ctx.globalAlpha = 1
        ctx.fillStyle = accentColor
        ctx.beginPath()
        ctx.arc(xDot, y, 3, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const drawSafety = (dt: number) => {
      const c = updateCursor()
      const accentColor = accentRef.current
      const dtScale = Math.min(Math.max(dt / 16.67, 0.5), 2)
      const t = simT * 0.00024
      const target = (simT * 0.00025) % (Math.PI * 2)
      for (const cell of cells) {
        const dx = c.x - cell.x
        const dy = c.y - cell.y
        const dist = Math.hypot(dx, dy)
        const inRange = dist < 160
        cell.aligned += ((inRange ? 1 : 0) - cell.aligned) * 0.08 * dtScale
        const wander =
          Math.sin(t * 2 + cell.x * 0.02) * 0.6 +
          Math.cos(t * 1.3 + cell.y * 0.03) * 0.6
        const ambient = cell.angle + wander * 0.02 * dtScale
        let diff = target - cell.angle
        diff = Math.atan2(Math.sin(diff), Math.cos(diff))
        cell.angle = ambient + diff * 0.12 * cell.aligned * dtScale

        const len = 9 + cell.aligned * 5
        const ex = cell.x + Math.cos(cell.angle) * len
        const ey = cell.y + Math.sin(cell.angle) * len
        ctx.beginPath()
        ctx.moveTo(
          cell.x - Math.cos(cell.angle) * len,
          cell.y - Math.sin(cell.angle) * len
        )
        ctx.lineTo(ex, ey)
        if (cell.aligned > 0.4) {
          ctx.strokeStyle = accentColor
          ctx.globalAlpha = 0.4 + cell.aligned * 0.5
          ctx.lineWidth = 1.5
        } else {
          ctx.strokeStyle = INK
          ctx.globalAlpha = 0.14
          ctx.lineWidth = 1
        }
        ctx.stroke()
        ctx.globalAlpha = cell.aligned > 0.4 ? 0.9 : 0.18
        ctx.fillStyle = cell.aligned > 0.4 ? accentColor : INK
        ctx.beginPath()
        ctx.arc(ex, ey, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const drawRobotics = (dt: number) => {
      const c = updateCursor()
      const accentColor = accentRef.current
      const dtScale = Math.min(Math.max(dt / 16.67, 0.5), 2)
      const SEP = 24
      const NEIGH = 60
      for (const b of boids) {
        let sx = 0,
          sy = 0,
          ax = 0,
          ay = 0,
          cx = 0,
          cy = 0,
          n = 0
        for (const o of boids) {
          if (o === b) continue
          const dx = o.x - b.x
          const dy = o.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < NEIGH) {
            n++
            ax += o.vx
            ay += o.vy
            cx += o.x
            cy += o.y
            if (d < SEP && d > 0) {
              sx -= dx / d
              sy -= dy / d
            }
          }
        }
        if (n > 0) {
          b.vx +=
            ((cx / n - b.x) * 0.003 + (ax / n - b.vx) * 0.05 + sx * 0.08) *
            dtScale
          b.vy +=
            ((cy / n - b.y) * 0.003 + (ay / n - b.vy) * 0.05 + sy * 0.08) *
            dtScale
        }
        // the cursor (or idle probe) is an attractor with a personal-space bubble
        const dx = c.x - b.x
        const dy = c.y - b.y
        const d = Math.hypot(dx, dy)
        if (d > 40 && d < 300) {
          b.vx += (dx / d) * 0.03 * dtScale
          b.vy += (dy / d) * 0.03 * dtScale
        } else if (d <= 40 && d > 0) {
          b.vx -= (dx / d) * 0.1 * dtScale
          b.vy -= (dy / d) * 0.1 * dtScale
        }
        const speed = Math.hypot(b.vx, b.vy)
        const max = 2.2
        const min = 0.8
        if (speed > max) {
          b.vx = (b.vx / speed) * max
          b.vy = (b.vy / speed) * max
        } else if (speed < min && speed > 0) {
          b.vx = (b.vx / speed) * min
          b.vy = (b.vy / speed) * min
        }
        b.x += b.vx * dtScale
        b.y += b.vy * dtScale
        if (b.x < -10) b.x = width + 10
        if (b.x > width + 10) b.x = -10
        if (b.y < -10) b.y = height + 10
        if (b.y > height + 10) b.y = -10

        const angle = Math.atan2(b.vy, b.vx)
        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(6, 0)
        ctx.lineTo(-4, 3.5)
        ctx.lineTo(-4, -3.5)
        ctx.closePath()
        if (b.accent) {
          ctx.fillStyle = accentColor
          ctx.globalAlpha = 0.95
        } else {
          ctx.fillStyle = INK
          ctx.globalAlpha = 0.28
        }
        ctx.fill()
        ctx.restore()
      }
      ctx.globalAlpha = 1
    }

    const draw = (dt: number) => {
      simT += dt
      ctx.clearRect(0, 0, width, height)
      if (mode === 'markets') drawMarkets(dt)
      else if (mode === 'safety') drawSafety(dt)
      else drawRobotics(dt)
    }

    // settle a static frame for reduced-motion users
    const settle = () => {
      for (let i = 0; i < 30; i++) draw(16.7)
    }

    const loop = (t: number) => {
      if (disposed || !visible) {
        running = false
        return
      }
      const dt = lastT ? Math.min(t - lastT, 100) : 16.7
      lastT = t
      draw(dt)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running || disposed || reducedMotion) return
      running = true
      lastT = 0
      raf = requestAnimationFrame(loop)
    }

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches
      if (reducedMotion) {
        cancelAnimationFrame(raf)
        running = false
        lastT = 0
        settle()
      } else if (visible) {
        start()
      }
    }

    resize()
    init()
    if (reducedMotion) settle()
    else start()

    // Pause the whole simulation when the hero is off-screen. Use the
    // newest record — IO batches records and the first is the oldest.
    const io = new IntersectionObserver((entries) => {
      visible = entries[entries.length - 1].isIntersecting
      if (visible) start()
    })
    io.observe(canvas)

    // Debounced resize that preserves calm: re-init only when size changed.
    // If the mount-time measurement was 0 (layout not ready), initialize
    // immediately on the observer's first real measurement.
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer)
      const unsized = width < 10 || height < 10
      resizeTimer = setTimeout(
        () => {
          const prevW = width
          const prevH = height
          resize()
          if (Math.abs(width - prevW) > 1 || Math.abs(height - prevH) > 1) {
            init()
            if (reducedMotion) settle()
          }
        },
        unsized ? 0 : 120
      )
    })
    ro.observe(canvas)

    const onPointerMove = (e: PointerEvent) => {
      pointer.clientX = e.clientX
      pointer.clientY = e.clientY
      pointer.has = true
    }
    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerType === 'touch') pointer.has = false
    }
    const onPointerLeave = () => {
      pointer.has = false
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerMove, { passive: true })
    window.addEventListener('pointerup', onPointerEnd, { passive: true })
    window.addEventListener('pointercancel', onPointerEnd, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeave)
    motionQuery.addEventListener('change', onMotionPreferenceChange)

    return () => {
      disposed = true
      running = false
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerMove)
      window.removeEventListener('pointerup', onPointerEnd)
      window.removeEventListener('pointercancel', onPointerEnd)
      document.documentElement.removeEventListener('pointerleave', onPointerLeave)
      motionQuery.removeEventListener('change', onMotionPreferenceChange)
    }
    // accent is intentionally not a dep: it flows through accentRef so a
    // pure color change never tears down the whole simulation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] sm:opacity-70"
    />
  )
}
