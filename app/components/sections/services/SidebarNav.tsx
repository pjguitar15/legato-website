'use client'
import GradientListItem from '../../ui/GradientListItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion' // 1. Import Framer Motion

const services = [
  { id: 1, name: 'Sounds and Lights', slug: 'sounds-and-lights' },
  { id: 2, name: 'Full Band Rental', slug: 'full-band-setup' },
  { id: 3, name: 'LED Wall', slug: 'led-wall' },
  { id: 4, name: 'Stage Setup', slug: 'stage-setup' },
  { id: 5, name: 'About Legato', slug: 'about-legato' },
]

const backgroundMap: Record<string, string> = {
  'sounds-and-lights': '/backgrounds/service-list-bg.jpg',
  'full-band-setup': '/backgrounds/full-band-background.jpg',
  'event-lighting': '/backgrounds/service-lighting-bg.jpg',
  'led-wall': '/backgrounds/led-wall.jpg',
  'stage-setup': '/backgrounds/stage.webp',
  'about-legato': '/backgrounds/about-bg.jpg', // Added fallback/default
}

const SidebarNav = () => {
  const pathname = usePathname()
  const currentPath =
    pathname.split('/').filter(Boolean)[0] ?? 'sounds-and-lights'

  const currentImage =
    backgroundMap[currentPath] || backgroundMap['sounds-and-lights']

  return (
    <div className='relative h-screen w-full border-r border-zinc-700 flex justify-center items-center overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='absolute inset-0 bg-cover bg-center z-0'
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      </AnimatePresence>

      <div className='absolute inset-0 bg-black/90 z-10' />

      <div className='absolute top-4 inset-x-0 z-20 w-full flex justify-between ps-3 pe-4'>
        <img
          src='/legato-logo.png'
          alt='Legato Events Logo'
          className='h-10 w-auto'
        />
        <button className='cursor-pointer text-white'>
          <GiHamburgerMenu className='text-xl' />
        </button>
      </div>

      <ul className='relative z-10 flex flex-col gap-4 uppercase font-bold cursor-pointer w-full'>
        {services.map((service) => (
          <GradientListItem
            key={service.id}
            listKey={service.id}
            name={service.name}
            slug={service.slug}
          />
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav
