import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Barangay Fiesta Sports Competition',
    imgUrl: '/event-types/barangay-gymnasium-events/barangay-gym-events-1.jpg',
    description:
      'The annual barangay fiesta featuring basketball and volleyball tournaments at the community gymnasium. Our affordable yet professional audio system covered the entire venue with clear announcements and energetic background music for each match. The colorful basic lighting created a festive community atmosphere encouraging participation from all age groups.',
  },
  {
    title: 'Community Assembly with Entertainment',
    imgUrl: '/event-types/barangay-gymnasium-events/barangay-gym-events-2.jpg',
    description:
      'A large community gathering combining official announcements with local entertainment performances. Our professional-grade sound system ensured every resident could hear important community information clearly while the dynamic lighting created an engaging atmosphere for the entertainment segments. The experienced crew managed multiple microphones for officials and performers seamlessly.',
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
