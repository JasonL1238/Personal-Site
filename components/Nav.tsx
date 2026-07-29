'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-paper/95'
          : 'bg-paper/90 sm:bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a
            href="#top"
            className="font-display text-xl tracking-tight transition-colors hover:text-accent"
          >
            J<span className="text-accent">.</span>Li
          </a>
          <div className="flex items-center gap-5 sm:gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent sm:block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/JasonLi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:border-accent hover:bg-accent hover:text-paper"
            >
              Resume<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
        {/* Mobile section links — desktop links are hidden below sm */}
        <div className="flex gap-5 pb-2 sm:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
