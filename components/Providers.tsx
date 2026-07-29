'use client'

import { MotionConfig } from 'framer-motion'

// reducedMotion="user" makes framer-motion strip transform animations for
// users with prefers-reduced-motion — the CSS media query alone doesn't
// cover whileInView/AnimatePresence.
export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
