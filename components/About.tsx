'use client'

import { motion } from 'framer-motion'

const paragraphs = [
  "I think about computer science as a way to model and understand complex systems. Whether I'm working with biological data, building autonomous systems, or analyzing financial patterns, the core challenge is the same: how do you extract meaningful insights from systems that are inherently messy and interconnected?",
  "What draws me to real-world applications is the necessity of collaboration. The best computational work happens when you're working alongside domain experts—neuroscientists who understand behavior, clinicians who understand patient needs, or researchers who understand biological mechanisms. These collaborations force you to ask better questions and build tools that actually matter.",
  "The intersection of CS, biology, and data-driven finance excites me because these domains all deal with complex, high-stakes systems. In biomedical research, you're working with data that could inform health outcomes. In finance and statistics, you're building models that support decision-making. Both require technical rigor and domain understanding, and both benefit from interdisciplinary thinking."
]

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.h2>

        <div className="space-y-5 text-base md:text-lg text-gray-400 leading-relaxed font-light">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
