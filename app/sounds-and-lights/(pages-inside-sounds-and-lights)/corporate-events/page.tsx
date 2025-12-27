import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'TechCorp Annual Conference 2024',
    imgUrl: '/event-types/corporate-events/corporate-events-1.jpg',
    description:
      'A large-scale corporate conference featuring multiple keynote speakers and panel discussions. Our professional audio setup ensured every presentation was delivered with crystal clarity across the entire venue. The sophisticated lighting design created a modern, corporate ambiance while maintaining focus on the speakers and presentation materials.',
  },
  {
    title: 'GlobalBiz Awards Ceremony',
    imgUrl: '/event-types/corporate-events/corporate-events-2.jpg',
    description:
      'An elegant awards ceremony celebrating corporate excellence. We provided a comprehensive audio and visual setup supporting live announcements, award presentations, and entertainment segments. The professional-grade sound system and dynamic lighting created an impressive atmosphere for recognizing company achievements and milestones.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='corporate' />
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
