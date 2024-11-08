import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AgoraLab - Open Source AI Research',
    template: '%s | AgoraLab',
  },
  description: 'Open source AI research lab',
  openGraph: {
    title: 'AgoraLab - Open Source AI Research',
    description: 'Open source AI research lab',
    url: baseUrl,
    siteName: 'AgoraLab',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased min-h-screen w-full overflow-x-hidden">
        <main className="w-full min-h-screen flex flex-col">
          <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 flex-grow">
            {/* <Navbar /> */}
            {children}
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
