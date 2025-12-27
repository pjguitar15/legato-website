import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Grace Cathedral 50th Anniversary',
    imgUrl: '/event-types/church-anniversary/church-anniversary-1.jpg',
    description:
      'A beautiful celebration of 50 years of faith and community. The event featured a full choir performance with crystal-clear audio quality, supported by elegant ambient lighting that complemented the spiritual atmosphere. Our professional sound technician ensured every hymn and speech was heard perfectly throughout the venue.',
  },
  {
    title: 'St. Mary Parish 25th Year Milestone',
    imgUrl: '/event-types/church-anniversary/church-anniversary-2.jpg',
    description:
      'An uplifting anniversary celebration with a mix of traditional hymns and contemporary praise music. The dual-zone sound setup allowed both the main sanctuary and overflow areas to experience the same high-quality audio. Subtle stage lighting enhanced the reverent atmosphere while maintaining focus on the choir and speakers.',
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
