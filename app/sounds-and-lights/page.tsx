import SoundsServiceContents from '../components/sections/services/SoundsServiceContents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events',
  description:
    'High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations.',
}

export default function page() {
  return (
    <main className='bg-zinc-950 text-white'>
      <SoundsServiceContents />
    </main>
  )
}
