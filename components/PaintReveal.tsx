'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface PaintRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function PaintReveal({ children, delay = 0, className = '' }: PaintRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      animate={isInView ? { 
        opacity: 1, 
        clipPath: 'inset(0 0% 0 0)',
      } : {}}
      transition={{ 
        duration: 1.2, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
