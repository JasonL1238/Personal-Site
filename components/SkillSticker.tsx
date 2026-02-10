'use client'

interface SkillStickerProps {
  skill: string
  className?: string
}

export default function SkillSticker({ skill, className = '' }: SkillStickerProps) {
  // Sticker-style SVG illustrations for each skill
  const stickers: Record<string, JSX.Element> = {
    'React': (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="35" cy="35" r="8" fill="currentColor"/>
        <circle cx="65" cy="35" r="8" fill="currentColor"/>
        <path d="M 30 60 Q 50 45 70 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="20" y="20" width="60" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 30 50 L 50 50 M 50 50 L 50 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="65" cy="50" r="5" fill="currentColor"/>
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 20 50 L 50 20 L 80 50 L 50 80 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="50" cy="50" r="15" fill="currentColor"/>
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 30 30 L 50 50 M 50 50 L 70 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M 30 70 L 50 50 M 50 50 L 70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    'Python': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 30 30 Q 50 20 70 30 L 70 50 Q 50 60 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="40" cy="40" r="4" fill="currentColor"/>
        <circle cx="60" cy="60" r="4" fill="currentColor"/>
      </svg>
    ),
    'Java': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="25" y="25" width="50" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 45 L 65 45 M 35 55 L 65 55" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    'Git': (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 50 55 L 50 80 M 35 65 L 50 55 L 65 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'Docker': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="20" y="40" width="60" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 30 40 L 30 70 M 40 40 L 40 70 M 50 40 L 50 70 M 60 40 L 60 70 M 70 40 L 70 70" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'AWS': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 30 30 L 50 20 L 70 30 L 70 50 L 50 60 L 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 40 40 L 50 35 L 60 40 L 60 50 L 50 55 L 40 50 Z" fill="currentColor"/>
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="50" rx="25" ry="35" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 50 15 L 50 85" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'PostgreSQL': (
      <svg viewBox="0 0 100 100" className={className}>
        <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 50 L 65 50" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="8" fill="currentColor"/>
      </svg>
    ),
    'Tailwind': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 20 50 Q 35 30 50 50 T 80 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="30" cy="50" r="4" fill="currentColor"/>
        <circle cx="50" cy="50" r="4" fill="currentColor"/>
        <circle cx="70" cy="50" r="4" fill="currentColor"/>
      </svg>
    ),
    'PyTorch': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 30 30 L 50 20 L 70 30 L 70 50 L 50 60 L 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="50" cy="40" r="5" fill="currentColor"/>
      </svg>
    ),
    'TensorFlow': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 25 30 L 50 20 L 75 30 L 75 50 L 50 60 L 25 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 40 40 L 50 35 L 60 40" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'OpenCV': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="25" y="25" width="50" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="40" cy="40" r="5" fill="currentColor"/>
        <circle cx="60" cy="40" r="5" fill="currentColor"/>
        <path d="M 35 60 Q 50 55 65 60" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    ),
    'scikit-learn': (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 50 L 50 35 L 65 50 L 50 65 Z" fill="currentColor"/>
      </svg>
    ),
    'Pandas': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="25" y="30" width="50" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 30 40 L 70 40 M 30 50 L 70 50 M 30 60 L 70 60" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'NumPy': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="30" y="30" width="40" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 40 L 65 40 M 35 50 L 65 50 M 35 60 L 65 60" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    'R': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 30 25 L 30 75 M 30 25 L 50 25 L 60 35 L 50 45 L 30 45 M 50 45 L 65 75" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    'SQL': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="25" y="30" width="50" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 30 45 L 70 45 M 30 55 L 70 55" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="65" r="3" fill="currentColor"/>
      </svg>
    ),
    'ROS': (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="40" cy="40" r="5" fill="currentColor"/>
        <circle cx="60" cy="40" r="5" fill="currentColor"/>
        <path d="M 35 60 Q 50 70 65 60" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    ),
    'Linux': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 30 30 L 50 20 L 70 30 L 70 50 L 50 60 L 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="50" cy="40" r="8" fill="currentColor"/>
      </svg>
    ),
    'C++': (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M 25 30 L 50 20 L 75 30 L 75 50 L 50 60 L 25 50 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 40 L 65 40 M 35 50 L 65 50" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="45" r="2" fill="currentColor"/>
        <circle cx="60" cy="45" r="2" fill="currentColor"/>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="25" y="25" width="50" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M 35 45 L 50 40 L 65 45 L 65 55 L 50 50 L 35 55 Z" fill="currentColor"/>
      </svg>
    ),
  }

  return (
    <div className="w-12 h-12 flex items-center justify-center">
      {stickers[skill] || (
        <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center">
          <span className="text-2xl font-bold text-white/80">{skill[0]}</span>
        </div>
      )}
    </div>
  )
}
