import type { Metadata } from "next";
import { Oswald, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar/Navbar'
import Footer from './components/ui/Footer'
import SidebarNav from './components/sections/services/SidebarNav'
import PremiumCTASection from './components/ui/PremiumCTASection'

export const metadata: Metadata = {
  metadataBase: new URL('https://legatosoundsandlights.com'),
  title: {
    default: 'Legato Sounds & Lights | Professional Events & Production',
    template: '%s | Legato Sounds & Lights',
  },
  description:
    'Legato Sounds & Lights provides professional sound, lighting, and event production services for weddings, corporate events, and celebrations.',
  openGraph: {
    title: 'Legato Sounds & Lights',
    description: 'Professional sound, lighting, and event production services.',
    url: 'https://legatosoundsandlights.com',
    siteName: 'Legato Sounds & Lights',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Legato Sounds & Lights',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scrollbar-zinc-sky-700 scrollbar-zinc-sky-300'>
      <body
        className={`${poppins.className} ${oswald.variable} antialiased relative scrollbar-modern`}
      >
        <div className='hidden lg:block sticky top-0 z-50'>
          <Navbar />
        </div>
        <div>
          <div className='lg:hidden'>
            <SidebarNav />
          </div>
          <div>{children}</div>
        </div>

        <PremiumCTASection
          headline='Ready to Book Now?'
          subheadline='Let Legato bring professional sound and stunning visuals to your next event. Contact us today for a consultation and custom quote.'
          buttonText='Book Your Event'
        />
        <Footer />
      </body>
    </html>
  )
}
