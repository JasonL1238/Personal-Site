'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 lg:gap-12">
          {/* Left Column: Profile Picture */}
          <motion.div
            className="flex-shrink-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-48 md:w-56 lg:w-60 aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/ProfilePic.jpg"
                alt="Jason Li"
                width={240}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-1 lg:order-2 max-w-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Jason Li
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Computer Science and Mathematics at University of Pennsylvania. Building at the intersection of health, biology, data-driven finance, and robotics.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
          </motion.div>
        </div>
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
