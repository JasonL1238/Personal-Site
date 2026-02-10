'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FlyingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  className?: string
}

export default function FlyingElement({
  children,
  delay = 0,
  duration = 40,
  startX = -100,
  startY = 0,
  endX = 100,
  endY = -100,
  className = '',
}: FlyingElementProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      initial={{ x: startX, y: startY, opacity: 0 }}
      animate={{
        x: [startX, endX],
        y: [startY, endY],
        opacity: [0, 0.3, 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ zIndex: 0 }}
    >
      {children}
    </motion.div>
  )
}
