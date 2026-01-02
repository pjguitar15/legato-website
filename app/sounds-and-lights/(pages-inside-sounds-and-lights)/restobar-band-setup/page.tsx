import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'The Local Tavern Live Band Nights',
    imgUrl: '/event-types/restobar-band-setup/restobar-band-setup-1.jpg',
    description:
      'A thriving weekly live band event at our partner restaurant-bar featuring a talented local band. The carefully balanced sound system captures the full energy of the band while maintaining conversation levels between sets. Sophisticated stage lighting creates an upscale atmosphere that perfectly complements the craft cocktails and gourmet dining experience.',
  },
  {
    title: 'Jazz & Wine Evening at Primo Ristorante',
    imgUrl: '/event-types/restobar-band-setup/restobar-band-setup-2.jpg',
    description:
      'An elegant jazz trio performance paired with fine dining at an upscale restaurant. Our professional band setup delivered pristine audio for the sophisticated audience while the ambient lighting enhanced the wine bar aesthetic. The full amplifier support for all instruments ensured perfect clarity without overwhelming the intimate dining experience.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages eventType='resto-bar-setup' category='corporate-events' />
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
