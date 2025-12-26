'use client'
import Background from './components/ui/Background'
import SectionIntro from './components/ui/SectionIntro'
import HeroWithImage from './components/ui/HeroWithImage'
import StatsSection from './components/ui/StatsSection'
import ServiceCardGrid from './components/ui/ServiceCardGrid'
import TestimonialSection from './components/ui/TestimonialSection'
import PremiumCTASection from './components/ui/PremiumCTASection'
import { motion } from 'framer-motion'
import stripes from '@/public/backgrounds/stripes.png'
import { MdMusicNote, MdLightbulb, MdGraphicEq } from 'react-icons/md'

const stats = [
  {
    number: '500+',
    label: 'Events Completed',
    description: 'Trusted by Cavite',
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    description: 'Quality guaranteed',
  },
  {
    number: '50+',
    label: 'Equipment Pieces',
    description: 'Professional grade',
  },
  {
    number: '10+',
    label: 'Years Experience',
    description: 'Industry expertise',
  },
]

const serviceCards = [
  {
    title: 'Sounds & Lights',
    description:
      'Complete audio and lighting solutions for any event size, from intimate gatherings to large-scale productions.',
    imageSrc: '/event-types/school-full-band.jpg',
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
    imageSrc: '/event-types/gymnasium.jpg',
    icon: <MdGraphicEq />,
    features: ['Drum Kits', 'Amplifiers', 'Keyboards', 'Wireless Systems'],
  },
  {
    title: 'LED & Lighting',
    description:
      'Stunning visual effects with professional LED walls and dynamic lighting to enhance your event atmosphere.',
    imageSrc: '/event-types/corporate.jpg',
    icon: <MdLightbulb />,
    features: ['LED Walls', 'Moving Lights', 'Stage Wash', 'Effect Lighting'],
  },
]

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

export default function Home() {
  return (
    <div className='relative w-full min-h-screen'>
      <Background imageUrl={stripes}>
        <div className='w-full'>
          <div className='max-w-7xl mx-auto px-6 pt-52 pb-24 flex flex-col gap-24'>
            {/* Hero Section */}
            <motion.section
              className='flex flex-col gap-8 text-center items-center'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className='text-6xl md:text-7xl font-bold text-white'>
                Legato Sounds & Lights
              </h1>
              <p className='text-xl text-white/80 max-w-3xl'>
                Professional sounds and lighting for weddings, events, and live
                bands in Cavite
              </p>
              <button className='mt-6 px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition-transform'>
                Get Started
              </button>
            </motion.section>

            {/* Stats Section */}
            <StatsSection stats={stats} title='By The Numbers' />

            {/* Hero with Image */}
            <HeroWithImage
              subtitle='About Us'
              title='Your Premier Event Audio & Lighting Partner'
              description='Founded by Philcob Suzuki, a passionate drummer and events professional, Legato has been delivering exceptional sound and lighting solutions to Cavite for over a decade. We combine cutting-edge technology with expert craftsmanship to make your event unforgettable.'
              imageSrc='/event-types/resto-bar.jpg'
              imageAlt='Professional event setup'
              ctaText='Learn More'
            />

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='mb-12'
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
              imageSrc='/event-types/corporate.jpg'
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
        </div>
      </Background>
    </div>
  )
}

