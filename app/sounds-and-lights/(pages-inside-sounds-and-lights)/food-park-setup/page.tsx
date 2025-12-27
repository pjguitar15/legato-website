import ScrollSection from '@/app/components/layout/ScrollSection'
import ImageTextSection from '@/app/components/ui/ImageTextSection'
import Packages from '@/app/components/ui/packages/Packages'
import TextImageButtonCTA from '@/app/components/ui/TextImageButtonCTA'

const sampleEvents = [
  {
    title: 'Weekend Night Market Entertainment',
    imgUrl: '/event-types/food-park-setup/food-park-setup-1.jpg',
    description:
      'A vibrant weekend food park event featuring live entertainment and multiple vendor stalls. Our lively sound system and festive lighting created an exciting, inviting atmosphere encouraging visitors to stay and enjoy dining. The wide sound coverage reached all corners of the park while the dynamic lighting enhanced the festive mood throughout the evening.',
  },
  {
    title: 'Summer Food Festival with Live Band',
    imgUrl: '/event-types/food-park-setup/food-park-setup-2.jpg',
    description:
      'A large-scale food park festival combining gourmet vendor stalls with professional entertainment. Our high-power outdoor system delivered the band\'s energy to the entire venue while maintaining pleasant ambient levels in dining areas. The colorful dynamic lighting complemented the festival atmosphere, encouraging mingling and extended stay for food park visitors.',
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
