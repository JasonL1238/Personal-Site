'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function EasterEgg() {
  const [showMessage, setShowMessage] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount === 4) {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 3000)
      setClickCount(0)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={handleClick}
        className="w-12 h-12 bg-gray-800 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-200 hover:border-gray-500 transition-colors opacity-30 hover:opacity-60"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Easter egg"
      >
        <span className="text-xs">?</span>
      </motion.button>
      
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="absolute bottom-16 right-0 bg-gray-800 border border-gray-600 rounded-lg p-3 text-sm text-gray-300 max-w-xs"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
          >
            You found the easter egg! 🎉
            <br />
            <span className="text-xs text-gray-500">(This site has a few surprises...)</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
