'use client'
import HeroWithImage from '../ui/HeroWithImage'
import MarqueeLogos from '../sections/MarqueeLogos'
import { motion } from 'framer-motion'
import SectionIntro from '../ui/SectionIntro'
import ServiceCardGrid from '../ui/ServiceCardGrid'
import { MdGraphicEq, MdLightbulb, MdMusicNote } from 'react-icons/md'
import TestimonialSection from '../ui/TestimonialSection'
import { useRouter } from 'next/navigation'
import CompaniesThatBooked from '../sections/CompaniesThatBooked'
import VideoBackground from '../ui/VideoBackground'

const testimonials = [
  {
    name: 'Karl Darren De Sosa',
    role: 'Client',
    message:
      'Highly recommended ang Legato, madaling kausap at high quality ang binibigay nilang Sound plus magaganda rin ang Gamit. God Bless Legato more client pa',
  },
  {
    name: 'Jesus Is Lord Belleview',
    role: 'Church',
    message:
      'HIGHLY RECOMMENDED! 💯 Sobrang approachable and sobrang Professional! 🔥  God Bless Legato Team! 🙏',
  },
  {
    name: 'John Wils',
    role: 'Client',
    message:
      'Very Professional, Good quality audio at affordable price very responsive din! 💯 recommended!',
  },
]

const serviceCards = [
  {
    title: 'Sounds & Lights',
    description:
      'Complete audio and lighting solutions for any event size, from intimate gatherings to large-scale productions.',
    imageSrc: '/event-types/corporate.jpg',
    icon: <MdMusicNote />,
    features: [
      'Crystal Clear Audio',
      'Professional Mics',
      'Stage Lighting',
      'Real-time Mixing',
    ],
    href: '/sounds-and-lights',
  },
  {
    title: 'Full Band Rental',
    description:
      'Complete backline and equipment rental for live bands. Everything from drums to keyboards and amplifiers.',
    imageSrc: '/backgrounds/full-band-background.jpg',
    icon: <MdGraphicEq />,
    features: ['Drum Kits', 'Amplifiers', 'Keyboards', 'Wireless Systems'],
    href: '/full-band-setup/backline',
  },
  {
    title: 'LED Wall',
    description:
      'Stunning visual effects with professional LED walls and dynamic lighting to enhance your event atmosphere.',
    imageSrc: '/backgrounds/led-wall.jpg',
    icon: <MdLightbulb />,
    features: ['LED Walls', 'Moving Lights', 'Stage Wash', 'Effect Lighting'],
    href: '/led-wall',
  },
]

const LandingPage = () => {
  const router = useRouter()

  const bookNowAction = () => {
    router.push('/sounds-and-lights')
  }
  return (
    <div className='flex flex-col bg-zinc-950'>
      <VideoBackground forHero />
      <div className='w-full bg-black pb-6 pt-5'>
        <MarqueeLogos />
      </div>

      {/* Hero with Image */}
      <HeroWithImage
        subtitle='HOW WE SATISFY CLIENTS'
        title='Quality Equipment and Professionalism'
        description='Proudly based in Cavite, we specialize in transforming events through exceptional sound and lighting. Our mission is to provide all kinds of events with the professional quality they need to stand out. Our experienced team and premium equipment ensure an unforgettable experience for clients in Cavite and surrounding areas.'
        imageSrc='/backgrounds/landing-bg.jpg'
        imageAlt='Professional event setup'
        ctaText='Book Now'
        ctaAction={bookNowAction}
      />
      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='pt-12'
      >
        <SectionIntro
          title='Our Services'
          description='From intimate gatherings to large-scale events, we provide comprehensive sound and lighting solutions tailored to your needs.'
        />
      </motion.div>
      <ServiceCardGrid cards={serviceCards} />

      {/* Why Choose Us */}
      <HeroWithImage
        subtitle='Our Advantage'
        title='Why Events Trust Legato'
        description='With professional-grade equipment, experienced technicians, and a dedication to excellence, we ensure your event sounds incredible and looks stunning. Every detail matters, and we handle it all.'
        imageSrc='/event-types/simple-wedding.jpg'
        imageAlt='Professional event lighting'
        ctaText='Book Now'
        ctaAction={bookNowAction}
      />
      <CompaniesThatBooked />
      <TestimonialSection
        testimonials={testimonials}
        title='What Our Clients Say'
      />
    </div>
  )
}

export default LandingPage