import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'



const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Chauffeur Services | Premium Private Transportation',
  description: 'Book luxury chauffeur services for airport transfers, corporate rides, events, and city tours. Professional drivers, premium vehicles, guaranteed punctuality.',
  keywords: 'chauffeur, luxury transportation, private driver, airport transfer, corporate ride',

  icons: {
    icon: '/favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    images: [
      {
        url: '/image.png',
        width: 1200,
        height: 630,
        alt: 'Chauffeur Developers - Professional Chauffeur Website Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/image.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
