import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'District Basketball Championship Finals',
    imgUrl: '/event-types/gymnasium-events/gymnasium-events-1.jpg',
    description:
      'A packed gymnasium hosting the highly anticipated championship game. Our powerful audio system provided clear announcements and energetic background music throughout the massive venue, ensuring every spectator could hear perfectly. Dynamic lighting created an exciting atmosphere while the professional crew managed real-time audio adjustments for optimal game-day experience.',
  },
  {
    title: 'Regional Volleyball Tournament 2024',
    imgUrl: '/event-types/gymnasium-events/gymnasium-events-2.jpg',
    description:
      'A multi-court volleyball tournament with simultaneous matches requiring professional sound management. We delivered consistent audio coverage across all courts with separate announcements and music control for each zone. The sophisticated lighting system highlighted the action while maintaining safety and viewer comfort for the large crowd.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='gymnasium-events' category='corporate-events' />
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
