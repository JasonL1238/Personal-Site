import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jason Li | Computer Science + Math at Penn',
  description: 'Building at the intersection of health, biology, and data-driven finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
