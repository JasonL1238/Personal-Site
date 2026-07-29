'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const FACTS = [
  { label: 'Studying', value: 'CS + Math, Penn SEAS ’29' },
  { label: 'Based', value: 'Chicago → Philadelphia' },
  { label: 'Interested in', value: 'Evals · perception · decisions' },
]

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:py-14 lg:grid-cols-[1fr_280px] lg:gap-12 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            About
          </p>
          <h2 className="mt-2 font-display text-3xl leading-snug sm:text-4xl">
            Systems should survive contact with reality.
          </h2>
          <div className="mt-4 text-base leading-relaxed text-muted">
            <p>
              Markets that shrug off your backtest. Language models that behave
              perfectly until the phrasing gets emotional. Drones that meet
              wind. The interesting engineering happens at the gap between the
              model and reality — that&rsquo;s the gap I like to work in.
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.label} className="border-t border-line pt-3">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-line pt-3 text-sm text-muted">
            Outside the terminal: poker, Penn Club Tennis, running, cooking,
            and basketball.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-56 sm:w-64 lg:mt-2 lg:w-full"
          initial={false}
          whileInView={{ opacity: 1, rotate: 2, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-sm border border-line bg-raised p-2 shadow-[0_12px_40px_rgba(23,19,12,0.08)]">
            <Image
              src="/ProfilePic.jpg"
              alt="Jason Li smiling on a rooftop at night, city lights behind him"
              width={900}
              height={1000}
              sizes="(min-width: 1024px) 420px, 288px"
              className="w-full rounded-[2px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
