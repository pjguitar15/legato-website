'use client'
import HeroWithImage from '../ui/HeroWithImage'
import MarqueeLogos from '../sections/MarqueeLogos'
import { motion } from 'framer-motion'
import SectionIntro from '../ui/SectionIntro'
import ServiceCardGrid from '../ui/ServiceCardGrid'
import { MdGraphicEq, MdLightbulb, MdMusicNote } from 'react-icons/md'
import TestimonialSection from '../ui/TestimonialSection'
import PremiumCTASection from '../ui/PremiumCTASection'
import { useRouter } from 'next/navigation'

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Wedding Couple',
    message:
      'Legato made our wedding day perfect. The sound was crystal clear and the lighting created the most magical atmosphere. Highly recommended!',
  },
  {
    name: 'Juan Dela Cruz',
    role: 'Event Organizer',
    message:
      'Professional team, top-quality equipment, and excellent customer service. They handled our corporate event flawlessly.',
  },
  {
    name: 'Angela Reyes',
    role: 'School Principal',
    message:
      "Our school assembly sounded amazing! Legato's team was responsive, efficient, and made everything seamless.",
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
  },
  {
    title: 'Full Band Rental',
    description:
      'Complete backline and equipment rental for live bands. Everything from drums to keyboards and amplifiers.',
    imageSrc: '/backgrounds/full-band-background.jpg',
    icon: <MdGraphicEq />,
    features: ['Drum Kits', 'Amplifiers', 'Keyboards', 'Wireless Systems'],
  },
  {
    title: 'LED Wall',
    description:
      'Stunning visual effects with professional LED walls and dynamic lighting to enhance your event atmosphere.',
    imageSrc: '/backgrounds/led-wall.jpg',
    icon: <MdLightbulb />,
    features: ['LED Walls', 'Moving Lights', 'Stage Wash', 'Effect Lighting'],
  },
]

const LandingPage = () => {
  const router = useRouter()

  const bookNowAction = () => {
    router.push('/sounds-and-lights')
  }
  return (
    <div className='flex flex-col bg-zinc-950'>
      {/* Hero with Image */}
      <HeroWithImage
        subtitle='LEGATO SOUNDS AND LIGHTS'
        title='Professional Sounds and Lights Service'
        description='Proudly based in Cavite, we specialize in transforming events through exceptional sound and lighting. Our mission is to provide all kinds of events with the professional quality they need to stand out. Our experienced team and premium equipment ensure an unforgettable experience for clients in Cavite and surrounding areas.'
        imageSrc='/backgrounds/landing-bg.jpg'
        imageAlt='Professional event setup'
        ctaText='Book Now'
        ctaAction={bookNowAction}
      />

      <div className='w-full bg-black pb-6 pt-5'>
        <MarqueeLogos />
      </div>

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
      />

      {/* Testimonials */}
      <TestimonialSection
        testimonials={testimonials}
        title='What Our Clients Say'
      />

      {/* Premium CTA */}
      <PremiumCTASection
        headline='Ready to Create Magic?'
        subheadline='Let Legato bring professional sound and stunning visuals to your next event. Contact us today for a consultation and custom quote.'
        buttonText='Start Your Event'
      />
    </div>
  )
}

export default LandingPage