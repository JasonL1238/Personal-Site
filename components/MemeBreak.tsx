'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SketchDecoration from './SketchDecoration'
import PaintReveal from './PaintReveal'
import InteractiveCard from './InteractiveCard'

const easterEggs = [
  { message: 'You found an easter egg!' },
  { message: 'Nice clicking skills!' },
  { message: 'Keep exploring!' },
  { message: 'You\'re doing great!' },
  { message: 'This is fun, right?' },
]

export default function MemeBreak() {
  const [clickCount, setClickCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount % 5 === 4) {
      const egg = easterEggs[Math.floor(Math.random() * easterEggs.length)]
      setMessage(egg.message)
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 2000)
    }
  }

  return (
    <section className="h-screen flex items-center justify-center px-6 bg-gray-800 relative overflow-y-auto overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SketchDecoration variant="star" className="text-yellow-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-24"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <SketchDecoration variant="squiggle" className="text-orange-400" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 w-full py-12">
        <PaintReveal>
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center text-white tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Fun Break
            <motion.span
              className="absolute -right-6 top-0 text-yellow-400 opacity-30"
              animate={{ rotate: [0, 30, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <SketchDecoration variant="star" className="text-yellow-400" />
            </motion.span>
          </motion.h2>
        </PaintReveal>

        <InteractiveCard hoverMessage="Click me!">
          <motion.div
            className="bg-gray-900/50 border border-gray-700 p-12 relative group"
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            {/* Click Counter */}
            <div className="text-center">
              <motion.button
                onClick={handleClick}
                className="text-6xl md:text-7xl focus:outline-none relative"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                🎯
                <motion.span
                  className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <SketchDecoration variant="circle" className="text-yellow-400 w-6 h-6" />
                </motion.span>
              </motion.button>
              <p className="text-gray-400 mt-6 text-sm font-light">
                Click count: <span className="font-medium text-white">{clickCount}</span>
              </p>
              {showMessage && (
                <motion.p
                  className="text-sm text-gray-300 font-light mt-3"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                >
                  {message}
                </motion.p>
              )}
            </div>
          </motion.div>
        </InteractiveCard>
      </div>
    </section>
  )
}
