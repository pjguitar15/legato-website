import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Simple Corporate Setup',
  description:
    'High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. Simple Corporate Setup.',
}

const sampleEvents = [
  {
    title: 'Company Town Hall Meeting',
    imgUrl: '/event-types/simple-corporate-setup/corporate-setup-1.jpg',
    description:
      'A company-wide town hall meeting requiring clear audio for executive presentations and Q&A sessions. Our simple yet professional audio setup ensured every announcement reached all attendees clearly. Basic stage lighting created a professional appearance while maintaining focus on the speakers and presentation screens.',
  },
  {
    title: 'Business Forum Seminar Series',
    imgUrl: '/event-types/simple-corporate-setup/corporate-setup-2.jpg',
    description:
      'A professional seminar series featuring industry experts and business leaders in panel discussions. Our audio system provided excellent clarity for both speakers and audience engagement with wireless microphones for mobility. The professional lighting design created an authoritative yet approachable atmosphere for meaningful business dialogue.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages category='corporate-events' eventType='simple-corporate' />
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
