import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Backline Rental',
  description:
    'High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. Backline Rental.',
}

const sampleEvents = [
  {
    title: 'Rock Band Reunion Tour - Equipment Support',
    imgUrl: '/event-types/backline-rental/backline-rental-1.jpg',
    description:
      'A professional touring band utilizing our complete backline rental for their reunion concert series. Our premium amplifiers and instrument support allowed the band to deliver their signature sound without transporting their own heavy equipment across multiple venues. Professional setup and testing ensured perfect sound during each performance.',
  },
  {
    title: 'Jazz Collective Festival Performance',
    imgUrl: '/event-types/backline-rental/backline-rental-2.jpg',
    description:
      'A jazz collective featuring multiple performers sharing one stage required reliable backline equipment for seamless transitions between sets. Our rental package provided professional-grade amplifiers and cables that supported each artist perfectly. The on-site technical support ensured trouble-free performances throughout the festival day.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='basic' />
      <h1>Here are the sample events</h1>
      <div className='flex flex-col gap-3'>
        {sampleEvents.map((event, index) => (
          <ImageTextSection
            key={index}
            imgUrl={event.imgUrl}
            title={event.title}
            description={event.description}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
      <TextImageButtonCTA />
    </main>
  )
}
