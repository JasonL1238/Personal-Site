'use client'

import { motion } from 'framer-motion'

const clubs = [
  {
    name: 'AI@Penn',
    description: 'Exploring AI applications and connecting with others interested in how machine learning can be applied to real problems.'
  },
  {
    name: 'Penn Spark',
    description: 'Focused on innovation, entrepreneurship, and building connections between students interested in technology and startups.'
  },
  {
    name: 'Wharton Statistics Society',
    description: 'Engaging with behavioral finance and statistical modeling, connecting data-driven approaches with financial decision-making.'
  },
  {
    name: 'Penn Club Tennis',
    description: 'Balancing technical work with team collaboration and staying active through competitive play.'
  }
]

const hobbies = [
  {
    name: 'Poker',
    description: 'Combines probability, psychology, and strategic decision-making under uncertainty.'
  },
  {
    name: 'Basketball',
    description: 'Staying active and developing teamwork through competitive play.'
  },
  {
    name: 'Cooking',
    description: 'Experimenting with new recipes and techniques, learning about food science and iterative refinement.'
  }
]

export default function Interests() {
  return (
    <section id="interests" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Clubs & Interests
        </motion.h2>

        <div className="space-y-12">
          {/* Clubs Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase">Clubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clubs.map((club, index) => (
                <motion.div
                  key={club.name}
                  className="bg-gray-800/50 border-l-2 border-gray-700 pl-6 py-5 hover:border-gray-600 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-base font-medium text-white mb-2 tracking-tight">{club.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{club.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase">Hobbies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  className="bg-gray-800/50 border-l-2 border-gray-700 pl-6 py-5 hover:border-gray-600 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-base font-medium text-white mb-2 tracking-tight">{hobby.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
