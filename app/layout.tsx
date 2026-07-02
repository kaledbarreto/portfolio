import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteUrl } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: '/favicon.svg' },
  title: 'Kaled Barreto — Front-end Developer',
  description:
    'Front-end Developer specializing in React, TypeScript, and JavaScript. Over 5 years building scalable, responsive, and user-centered interfaces.',
  keywords: [
    'Front-end Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'SQL',
    'UX/UI',
    'Brasil',
  ],
  authors: [{ name: 'Kaled Barreto', url: 'https://github.com/kaledbarreto' }],
  openGraph: {
    title: 'Kaled Barreto — Front-end Developer',
    description:
      'Front-end Developer specializing in React, TypeScript, and JavaScript.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaled Barreto — Front-end Developer',
    description:
      'Front-end Developer specializing in React, TypeScript, and JavaScript.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-bauhaus-blue focus:text-white focus:font-semibold focus:border-2 focus:border-dark"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
