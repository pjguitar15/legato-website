import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | School Full Band',
  description:
    'High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. School Full Band.',
}

const sampleEvents = [
  {
    title: 'Full Band at Marvelous Faith Academy',
    imgUrl: '/event-types/school-full-bands/school-full-band-1.jpg',
    description:
      'This event was in Bacoor Cavite. It was a fun and energetic performance with a full band setup including drums, guitars, keyboards, and vocals. The sound system provided clear and balanced audio. The lighting setup enhanced the overall atmosphere, creating an engaging experience for the audience.',
  },
  {
    title: 'Full Band at New Generation International School',
    imgUrl: '/event-types/school-full-bands/school-full-band-2.jpg',
    description:
      'This event was held in Trece Martires City. The full band setup featured a variety of instruments, including electric guitars, bass, drums, and keyboards. The sound system delivered powerful and immersive audio. The lighting design added depth and excitement to the event, complementing the music and creating a memorable experience for all attendees.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='school-full-band' category='corporate-events' />
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
