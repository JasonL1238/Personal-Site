import type { Metadata } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'

const display = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const SITE_URL = 'https://personal-site-sooty-ten.vercel.app'
const TITLE = 'Jason Li — CS + Math @ Penn'
const DESCRIPTION =
  'Engineering student at Penn: first-author ICML AI4Law workshop paper, UAV perception at Penn Aerial Robotics, computer vision at Zenblen. ML for markets, AI safety evals, and robotics.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: 'Jason Li',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jason Li',
  url: SITE_URL,
  email: 'mailto:li59@engineering.upenn.edu',
  jobTitle: 'Engineering student (CS + Math)',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Pennsylvania',
  },
  sameAs: [
    'https://github.com/JasonL1238',
    'https://www.linkedin.com/in/jasonli12345',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-mode="safety"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="grain font-body antialiased">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
