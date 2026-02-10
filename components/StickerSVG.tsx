'use client'

// Sticker-style SVG illustrations
export const StickerSVG = {
  coffee: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <path d="M 30 20 L 30 60 Q 30 70 40 70 L 60 70 Q 70 70 70 60 L 70 20 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 50 20 L 50 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 35 50 Q 50 45 65 50" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="40" r="3" fill="currentColor"/>
    </svg>
  ),
  bug: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="40" cy="45" r="3" fill="currentColor"/>
      <circle cx="60" cy="45" r="3" fill="currentColor"/>
      <path d="M 35 60 Q 50 65 65 60" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M 25 50 L 15 50 M 75 50 L 85 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <path d="M 50 20 L 40 60 L 50 70 L 60 60 Z" fill="currentColor"/>
      <path d="M 45 60 L 45 80 M 55 60 L 55 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="35" r="5" fill="white"/>
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <path d="M 30 40 Q 20 30 30 20 Q 40 15 50 20 Q 60 15 70 20 Q 80 30 70 40 Q 75 50 70 60 Q 60 70 50 65 Q 40 70 30 60 Q 25 50 30 40" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="40" cy="35" r="3" fill="currentColor"/>
      <circle cx="60" cy="35" r="3" fill="currentColor"/>
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <rect x="20" y="60" width="15" height="30" fill="currentColor"/>
      <rect x="40" y="40" width="15" height="50" fill="currentColor"/>
      <rect x="60" y="50" width="15" height="40" fill="currentColor"/>
      <path d="M 15 80 L 85 80 M 15 80 L 15 20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  lightbulb: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <path d="M 50 20 Q 35 25 35 45 Q 35 60 50 70 Q 65 60 65 45 Q 65 25 50 20" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="45" y="70" width="10" height="15" fill="currentColor"/>
      <path d="M 40 85 L 60 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 100 100" className="w-12 h-12">
      <path d="M 30 50 L 20 40 L 30 30 M 70 50 L 80 40 L 70 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 40 25 L 60 75" stroke="currentColor" strokeWidth="3"/>
    </svg>
  ),
}
