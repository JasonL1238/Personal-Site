'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  hoverMessage?: string
}

export default function InteractiveCard({ children, className = '', hoverMessage }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-orange-500/20 rounded-lg blur-sm opacity-0"
        animate={{ 
          opacity: isHovered ? 0.3 : 0,
          rotateY: isHovered ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative">
        {children}
      </div>
      {hoverMessage && isHovered && (
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
        >
          {hoverMessage}
        </motion.div>
      )}
    </motion.div>
  )
}
