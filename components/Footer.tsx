'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const LINKS = [
  {
    label: 'Email',
    value: 'li59@engineering.upenn.edu',
    href: 'mailto:li59@engineering.upenn.edu',
  },
  {
    label: 'GitHub',
    value: 'github.com/JasonL1238',
    href: 'https://github.com/JasonL1238',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jasonli12345',
    href: 'https://www.linkedin.com/in/jasonli12345',
  },
  {
    label: 'Resume',
    value: 'JasonLi_Resume.pdf',
    href: '/JasonLi_Resume.pdf',
  },
]

export default function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="mt-2 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            Building something at the edge of{' '}
            <em className="italic text-accent">models and reality</em>?
            <br />
            Let&rsquo;s talk.
          </h2>
        </motion.div>

        <div className="mt-7 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http') || link.href.endsWith('.pdf')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group bg-paper p-4 transition-colors duration-200 hover:bg-accent-soft"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {link.label}
                </p>
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 truncate text-sm group-hover:text-accent">
                {link.value}
              </p>
              {(link.href.startsWith('http') || link.href.endsWith('.pdf')) && (
                <span className="sr-only"> (opens in new tab)</span>
              )}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-line pt-4 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} Jason Li · Philadelphia, PA
          </p>
          <p className="font-mono text-[11px] text-muted">
            Built with Next.js. Yes, the ticker prices are made up.
          </p>
        </div>
      </div>
    </footer>
  )
}
