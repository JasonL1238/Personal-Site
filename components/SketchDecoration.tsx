'use client'

import { motion } from 'framer-motion'

interface SketchDecorationProps {
  className?: string
  delay?: number
  variant?: 'squiggle' | 'circle' | 'line' | 'star'
}

export default function SketchDecoration({ 
  className = '', 
  delay = 0,
  variant = 'squiggle'
}: SketchDecorationProps) {
  const variants = {
    squiggle: (
      <svg viewBox="0 0 100 20" className="w-24 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <motion.path
          d="M 5 10 Q 20 5, 35 10 T 65 10 T 95 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay, ease: 'easeInOut' }}
        />
      </svg>
    ),
    circle: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <motion.circle
          cx="20"
          cy="20"
          r="15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1, delay, ease: 'easeInOut' }}
        />
      </svg>
    ),
    line: (
      <svg viewBox="0 0 60 4" className="w-16 h-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <motion.line
          x1="2"
          y1="2"
          x2="58"
          y2="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 0.8, delay, ease: 'easeInOut' }}
        />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 30 30" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <motion.path
          d="M 15 2 L 18 11 L 28 11 L 20 17 L 23 26 L 15 20 L 7 26 L 10 17 L 2 11 L 12 11 Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, delay, ease: 'easeInOut' }}
        />
      </svg>
    )
  }

  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {variants[variant]}
    </motion.div>
  )
}
