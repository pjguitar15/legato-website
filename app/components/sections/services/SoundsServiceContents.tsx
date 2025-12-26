import React from 'react'
import SectionIntro from '../../ui/SectionIntro'
import ImageTextSection from '../../ui/ImageTextSection'
import InfoPillars from '../../ui/InfoPillars'
import TextImageButtonCTA from '../../ui/TextImageButtonCTA'
import GalleryCards from '../../ui/GalleryCards'
import ScrollSection from '../../layout/ScrollSection'

const arr = [
  {
    title: 'School Full Band',
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
    title: 'Corporate',
    shortDesc:
      'Professional sound and visual setup for meetings, launches, and formal events.',
    imgSrc: '/event-types/corporate.jpg',
    path: 'corporate-events',
  },
  {
    title: 'Cozy Cove Style',
    shortDesc:
      'Warm, intimate sound and lighting perfect for small venues and chill performances.',
    imgSrc: '/event-types/cozy-cove.jpg',
    path: 'cozy-cove-style',
  },
  {
    title: 'Restobar Band Setup',
    shortDesc:
      'Punchy live band audio tailored for restobars and night performances.',
    imgSrc: '/event-types/resto-bar.jpg',
    path: 'restobar-band-setup',
  },
  {
    title: 'Gymnasium',
    shortDesc:
      'Powerful sound coverage designed for large indoor spaces and school gyms.',
    imgSrc: '/event-types/gymnasium.jpg',
    path: 'gymnasium-events',
  },
  {
    title: 'Multi-track Studio Recording',
    shortDesc:
      'High-quality multi-track recording setup for live sessions and studio work.',
    imgSrc: '/event-types/multi-track-studio.jpg',
    path: 'multi-track-studio-recording',
  },
  {
    title: 'Backline Rental',
    shortDesc: 'Reliable backline equipment rental for bands and performers.',
    imgSrc: '/event-types/backline-rental.jpg',
    path: 'backline-rental',
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
    title: 'Food Park Setup',
    shortDesc:
      'Vibrant sound and lighting for food park events and outdoor gatherings.',
    imgSrc: '/event-types/food-park.jpg',
    path: 'food-park-setup',
  },
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
      <SectionIntro
        title='Sounds and Lights Services for your Event!'
        description="We'd live up your events with our top-notch sound and lighting solutions."
      />
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