import SectionIntro from '../../ui/SectionIntro'
import ImageTextSection from '../../ui/ImageTextSection'
import InfoPillars from '../../ui/InfoPillars'
import TextImageButtonCTA from '../../ui/TextImageButtonCTA'
import GalleryCards from '../../ui/GalleryCards'
import ScrollSection from '../../layout/ScrollSection'
import Link from 'next/link'

const arr = [
  {
    title: 'Corporate',
    shortDesc:
      'Professional sound and visual setup for meetings, launches, and formal events.',
    imgSrc: '/event-types/corporate.jpg',
    path: 'corporate-events',
  },
  {
    title: 'Simple Wedding',
    shortDesc:
      'Elegant sound and lighting solutions for memorable wedding ceremonies and receptions.',
    imgSrc: '/event-types/simple-wedding.jpg',
    path: 'simple-wedding-setup',
  },
  {
    title: 'Simple Corporate',
    shortDesc:
      'Streamlined audio and visual setup for corporate events and presentations.',
    imgSrc: '/event-types/simple-corporate.jpg',
    path: 'simple-corporate-setup',
  },
  {
    title: 'Indoor Band Setup',
    shortDesc:
      'Punchy live band audio tailored for restobars and night performances.',
    imgSrc: '/event-types/resto-bar.jpg',
    path: 'restobar-band-setup',
  },
  {
    title: 'Outdoor Band Setup',
    shortDesc:
      'Complete live band sound and lighting setup for school events and programs.',
    imgSrc: '/event-types/school-full-band.jpg',
    path: 'school-full-band',
  },
  {
    title: 'Church Anniversary',
    shortDesc:
      'Clear, balanced audio and stage lighting for worship and anniversary celebrations.',
    imgSrc: '/event-types/church-anniversary.jpg',
    path: 'church-anniversary',
  },
  {
    title: 'Cozy Cove Style',
    shortDesc:
      'We can recommend good venues for you! Warm, intimate sound and lighting perfect band performances.',
    imgSrc: '/event-types/cozy-cove.jpg',
    path: 'cozy-cove-style',
  },
  {
    title: 'Large Gymnasium',
    shortDesc:
      'Powerful sound coverage designed for large indoor spaces and school gyms.',
    imgSrc: '/event-types/gymnasium.jpg',
    path: 'gymnasium-events',
  },
  // {
  //   title: 'Multi-track Studio Recording',
  //   shortDesc:
  //     'High-quality multi-track recording setup for live sessions and studio work.',
  //   imgSrc: '/event-types/multi-track-studio.jpg',
  //   path: 'multi-track-studio-recording',
  // },
  // {
  //   title: 'Backline Rental',
  //   shortDesc: 'Reliable backline equipment rental for bands and performers.',
  //   imgSrc: '/event-types/backline-rental.jpg',
  //   path: 'backline-rental',
  // },
  // {
  //   title: 'Food Park Setup',
  //   shortDesc:
  //     'Vibrant sound and lighting for food park events and outdoor gatherings.',
  //   imgSrc: '/event-types/food-park.jpg',
  //   path: 'food-park-setup',
  // },
  {
    title: 'Barangay Gymnasium Events',
    shortDesc:
      'Robust sound and lighting for community events in barangay gymnasiums.',
    imgSrc: '/event-types/brgy-gymnasiums.jpg',
    path: 'barangay-gymnasium-events',
  },
]

const SoundsServiceContents = () => {
  return (
    <ScrollSection>
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col gap-3'>
          <h6 className='text-lg lg:text-3xl font-semibold text-white'>
            Types of Packages that suits your Events
          </h6>
          <p className='text-xs lg:text-sm leading-6 text-zinc-400 max-w-140'>
            Here are some of the most common types of events we cater to:
          </p>
        </div>
        <Link
          href='/sounds-and-lights/packages'
          className='px-4 py-3 lg:px-8 lg:py-4 bg-linear-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:scale-105 transition-transform duration-300 cursor-pointer text-sm lg:text-base'
        >
          Go straight to packages
        </Link>
      </div>
      <GalleryCards tileItems={arr} />
      <ImageTextSection
        imgUrl='/backgrounds/about-bg.png'
        title='Why Legato Sounds and Lights'
        description={`Reliable sound and lighting solutions for live bands, churches, corporate events, and community gatherings. We focus on clear audio, clean setups, and smooth event flow so every performance is heard properly and every moment feels right.`}
      />
      <InfoPillars />
      <TextImageButtonCTA />
    </ScrollSection>
  )
}

export default SoundsServiceContents
