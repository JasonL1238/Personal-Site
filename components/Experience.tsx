'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const ROLES = [
  {
    org: 'Zenblen',
    role: 'AI/Software Engineer Intern',
    period: 'Jun 2026 — Present',
    place: 'Chicago, IL',
    body: 'Shipping computer vision, model QA, and fleet monitoring for autonomous food kiosks.',
  },
  {
    org: 'Penn Aerial Robotics',
    role: 'Software Developer',
    period: 'Aug 2025 — Present',
    place: 'Philadelphia, PA',
    body: 'Building ROS2/PX4 autonomy and perception for competition UAVs; the team placed 1st globally in the SAE Design Report.',
  },
  {
    org: 'Campbell Lab, University of Pennsylvania',
    role: 'Research Intern',
    period: 'Aug 2025 — May 2026',
    place: 'Philadelphia, PA',
    body: 'Turned zebrafish assay videos into scalable behavioral data for neurogenetics research.',
    href: 'https://www.pdcampbelllab.com/home',
  },
  {
    org: 'MindX Sciences',
    role: 'App Development Intern',
    period: 'Jun 2024 — Jan 2025',
    place: 'Remote',
    body: 'Led React Native development of a mental health app serving 2,000+ users.',
  },
]

export default function Experience() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Experience
        </p>
        <h2 className="mt-2 font-display text-3xl leading-snug sm:text-4xl">
          Internships, labs, and teams.
        </h2>

        <div className="mt-7">
          {ROLES.map((role, i) => (
            <motion.article
              key={role.org}
              className="group grid gap-1 border-t border-line py-4 last:border-b sm:grid-cols-[165px_1fr] sm:gap-7"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="font-mono text-xs leading-relaxed text-muted">
                <p>{role.period}</p>
                <p>{role.place}</p>
              </div>
              <div>
                {role.href ? (
                  <h3 className="font-display text-2xl">
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {role.org}
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="shrink-0"
                      />
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  </h3>
                ) : (
                  <h3 className="font-display text-2xl transition-colors group-hover:text-accent">
                    {role.org}
                  </h3>
                )}
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
                  {role.role}
                </p>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {role.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
