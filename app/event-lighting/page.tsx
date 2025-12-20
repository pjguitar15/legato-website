import ImageTextSection from '@/app/components/ui/ImageTextSection'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'
import ScrollSection from '../components/layout/ScrollSection'

const showcaseEvents = [
  {
    title: 'Stadium Concert Series - Professional Lighting',
    imgUrl: '/event-types/event-lighting/stadium-concert-1.jpg',
    description:
      'Large-scale concert production with synchronized moving lights, dynamic color changes, and professional light control systems. Our team coordinated over 50 fixtures to create an unforgettable visual experience for thousands of attendees.',
    reverse: false,
  },
  {
    title: 'Corporate Gala - Elegant Ambient Design',
    imgUrl: '/event-types/event-lighting/corporate-gala-1.jpg',
    description:
      'Sophisticated uplighting and accent lighting for an elegant gala event. We created warm, inviting atmosphere through strategic lighting placement, highlighting architectural features and creating intimate dining zones.',
    reverse: true,
  },
  {
    title: 'Wedding Reception - Romantic Ambiance',
    imgUrl: '/event-types/event-lighting/wedding-ambiance-1.jpg',
    description:
      'Custom lighting design for a romantic wedding reception featuring color-changing uplights, romantic table accents, and dynamic dance floor lighting. Every moment was beautifully illuminated.',
    reverse: false,
  },
  {
    title: 'Festival Main Stage - High-Impact Visuals',
    imgUrl: '/event-types/event-lighting/festival-stage-1.jpg',
    description:
      'High-energy festival lighting with moving wash lights, beam effects, and synchronized color schemes. The dynamic lighting system enhanced every performance and kept the audience engaged throughout the night.',
    reverse: true,
  },
]

export default function page() {
  return (
    <ScrollSection>
      <div className='flex flex-col gap-3 justify-center text-center'>
        <h1 className='text-4xl font-bold'>Event Lighting</h1>
        <p className='text-sm text-zinc-400'>Professional lighting design and execution for unforgettable events</p>
      </div>

      <div className='flex flex-col gap-3'>
        {showcaseEvents.map((event, index) => (
          <ImageTextSection
            key={index}
            imgUrl={event.imgUrl}
            title={event.title}
            description={event.description}
            reverse={event.reverse}
          />
        ))}
      </div>

      <TextImageButtonCTA />
    </ScrollSection>
  )
}
