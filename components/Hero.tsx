'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 relative">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Jason Li
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Computer Science and Mathematics at University of Pennsylvania. Building at the intersection of health, biology, and data-driven finance.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-white text-gray-900 rounded-sm font-medium text-sm tracking-wide hover:bg-gray-100 transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent text-gray-300 border border-gray-600 rounded-sm font-medium text-sm tracking-wide hover:border-gray-500 hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.p
          className="text-xs font-light tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll for more
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
