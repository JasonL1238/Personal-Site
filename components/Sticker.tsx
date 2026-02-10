'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StickerProps {
  children: ReactNode
  className?: string
  rotation?: number
  delay?: number
  float?: boolean
}

export default function Sticker({ 
  children, 
  className = '', 
  rotation = 0,
  delay = 0,
  float = false 
}: StickerProps) {
  const randomRotation = rotation || (Math.random() * 10 - 5)
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ 
        transform: `rotate(${randomRotation}deg)`,
        transformOrigin: 'center'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={float ? {
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      } : {
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay,
        y: float ? {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        } : undefined
      }}
    >
      {children}
    </motion.div>
  )
}
