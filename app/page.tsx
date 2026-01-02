import { Metadata } from 'next'
import '../app/globals.css'
import LandingPage from './components/pages/LandingPage'

export const metadata: Metadata = {
  title: 'Professional Sound & Lighting Services in Cavite | Legato',
  description:
    'Legato Sounds & Lights provides professional sound system, lighting, LED wall, and full band setup services for weddings, corporate events, churches, and celebrations in Cavite and nearby areas.',

  openGraph: {
    title: 'Legato Sounds & Lights | Professional Event Services',
    description:
      'Professional sound, lighting, LED wall, and band setup services for weddings, corporate events, and live productions in Cavite.',
    url: 'https://legatosoundsandlights.com',
    siteName: 'Legato Sounds & Lights',
    images: [
      {
        url: '/og-image.jpg', // create later if not yet
        width: 1200,
        height: 630,
        alt: 'Legato Sounds & Lights Event Setup',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },

  alternates: {
    canonical: 'https://legatosoundsandlights.com',
  },
}

export default function Home() {
  return (
    <div className='relative'>
      <LandingPage />
    </div>
  )
}
