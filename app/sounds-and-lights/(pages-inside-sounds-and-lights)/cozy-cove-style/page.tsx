import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Sunset Acoustic Night at Cozy Cove',
    imgUrl: '/event-types/cozy-cove-style/cozy-cove-style-1.jpg',
    description:
      'An intimate acoustic performance in our signature cozy cove setting. The warm, carefully balanced sound system highlighted every note and lyric, while ambient warm lighting created a perfect intimate atmosphere. Guests were transported into a relaxing, boutique concert experience with minimal visual distraction and maximum audio intimacy.',
  },
  {
    title: 'Jazz Evening at The Nook',
    imgUrl: '/event-types/cozy-cove-style/cozy-cove-style-2.jpg',
    description:
      'A sophisticated jazz night featuring a trio performance in an upscale cozy venue. Our specialized warm sound profile complemented the smooth jazz aesthetic perfectly. The subtle ambient lighting enhanced the sophisticated mood without overwhelming the intimate setting, creating an ideal environment for serious jazz appreciation.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='cozy-cove-style' category='corporate-events' />
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
