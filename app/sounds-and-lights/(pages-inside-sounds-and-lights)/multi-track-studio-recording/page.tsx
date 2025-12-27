import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Indie Rock Band Multi-Track Recording Session',
    imgUrl: '/event-types/multi-track-studio-recording/studio-recording-1.jpg',
    description:
      'A comprehensive studio recording session capturing a five-piece indie rock band in pristine quality. Our multi-track recording interface and professional mixing console isolated each instrument and vocal perfectly, allowing the band to hear themselves clearly during performance. The experienced sound engineer ensured optimal mic placement and audio levels throughout the session.',
  },
  {
    title: 'Pop/R&B Artist Album Production',
    imgUrl: '/event-types/multi-track-studio-recording/studio-recording-2.jpg',
    description:
      'A full-scale album production session featuring vocal recordings, instrument layering, and real-time mixing. Our advanced multi-track setup allowed simultaneous recording of multiple elements while maintaining professional-grade monitoring for the artist. The complete acoustic treatment and high-end mixing console delivered broadcast-ready audio quality for commercial release.',
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
