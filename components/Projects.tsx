'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'How Phrasing Breaks Legal AI',
    venue: 'ICML AI4Law Workshop ’26 · first author',
    body: 'Built 1,456 LegalBench triplets across expert, lay, and distressed phrasings to expose answer flips in frontier LLMs.',
    tags: ['LLM evals', 'Python'],
    links: [
      {
        label: 'Paper',
        href: 'https://openreview.net/forum?id=A19yIP54jE',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/JasonL1238/ICML-Workshop',
      },
    ],
  },
  {
    title: 'Measuring Text Relatedness Across Platforms',
    venue: 'IEEE publication · co-author',
    body: 'Co-authored an embedding and sentiment study spanning 2.6M+ Reddit, YouTube, Twitter, and Amazon records.',
    tags: ['NLP', 'Transformers'],
    links: [
      {
        label: 'Paper',
        href: 'https://ieeexplore.ieee.org/document/10421308',
      },
    ],
  },
  {
    title: 'Cold Emailer',
    venue: 'Full-stack AI',
    body: 'Researches companies, drafts personalized outreach, and routes emails through review, Gmail delivery, and follow-up tracking.',
    tags: ['FastAPI', 'React'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JasonL1238/ColdEmailer',
      },
    ],
  },
  {
    title: 'Sports Arb',
    venue: 'Data engineering · personal project',
    body: 'Normalizes multi-sport odds and screens cross-venue positions after commissions, settlement rules, and available size.',
    tags: ['Python', 'Pydantic'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JasonL1238/SportArbitrage',
      },
    ],
  },
  {
    title: 'Poker Trainer',
    venue: 'Personal project',
    body: 'A local-first workspace for reconstructing sessions, searching hands, reviewing poker math, and organizing study themes.',
    tags: ['Python', 'Streamlit'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JasonL1238/PokerTrainer',
      },
    ],
  },
  {
    title: 'Zebrafish Detection',
    venue: 'Campbell Lab',
    body: 'Tracks zebrafish across 28-compartment videos and turns frame-level detections into trajectories and behavioral metrics.',
    tags: ['OpenCV', 'scikit-image'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/JasonL1238/FishDetection',
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-raised/50">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Selected work
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
          Research and builds.
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="group flex flex-col rounded-sm border border-line bg-paper p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_16px_40px_rgba(23,19,12,0.08)] motion-reduce:hover:transform-none"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                {project.venue}
              </p>
              <h3 className="mt-2 font-display text-xl leading-snug">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.body}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-3">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
