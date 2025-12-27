import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Beachside Ceremony at Sunset Venue',
    imgUrl: '/event-types/simple-wedding-setup/wedding-setup-1.jpg',
    description:
      'An intimate beachside wedding ceremony featuring a simple yet elegant audio setup for vows and background music. The clear sound system ensured every word of the vows was heard by all guests while soft, romantic ambient lighting created a magical atmosphere. Our dedicated technician managed the subtle transitions between ceremony segments perfectly.',
  },
  {
    title: 'Garden Reception with Live Music',
    imgUrl: '/event-types/simple-wedding-setup/wedding-setup-2.jpg',
    description:
      'A beautiful garden wedding reception combining ceremony audio support with elegant dinner music. Our simple but premium setup provided clear announcements and toasts while the sophisticated ambient lighting transformed the venue as evening fell. The professional crew ensured smooth audio transitions throughout the celebration.',
  },
]

export default function page() {
  return (
    <main className='flex flex-col gap-7'>
      <Packages category='simple-wedding-setup' eventType='wedding' />
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
