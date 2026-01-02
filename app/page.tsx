'use client'

import { Metadata } from 'next'
import '../app/globals.css'
import LandingPage from './components/pages/LandingPage'

export const metadata: Metadata = {
  title: 'Event Sound & Lighting Services',
  description:
    'High-quality sound and lighting services for weddings, corporate events, and live productions.',
}

export default function Home() {
  return (
    <div className='relative'>
      <LandingPage />
    </div>
  )
}
