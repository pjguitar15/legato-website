'use client'
import { useState } from 'react'
import GradientListItem from '../../ui/GradientListItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from '@/public/legato-no-icon.png'

const services = [
  { id: 0, name: 'Home', slug: '' },
  { id: 1, name: 'Sounds and Lights', slug: 'sounds-and-lights' },
  { id: 2, name: 'Full Band Rental', slug: 'full-band-setup' },
  { id: 3, name: 'LED Wall', slug: 'led-wall' },
  // { id: 4, name: 'Stage Setup', slug: 'stage-setup' },
  { id: 5, name: 'About Legato', slug: 'about-legato' },
  { id: 6, name: 'Contact', slug: 'contact' },
]

const backgroundMap: Record<string, string> = {
  '': '/backgrounds/service-list-bg.jpg',
  'sounds-and-lights': '/backgrounds/service-list-bg.jpg',
  'full-band-setup': '/backgrounds/full-band-background.jpg',
  'event-lighting': '/backgrounds/service-lighting-bg.jpg',
  'led-wall': '/backgrounds/led-wall.jpg',
  // 'stage-setup': '/backgrounds/stage.webp',
  'about-legato': '/backgrounds/service-list-bg.jpg',
  contact: '/backgrounds/service-list-bg.jpg',
}

const SidebarNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentPath = pathname.split('/').filter(Boolean)[0] || ''

  const currentImage = backgroundMap[currentPath] || backgroundMap['']

  return (
    <div className='flex relative'>
      {/* Toggle Button */}
      <motion.button
        className='fixed left-0 top-0 z-40 cursor-pointer text-white px-6 py-4  transition-colors bg-zinc-950 w-full flex justify-between'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
        transition={{ duration: 0.2 }}
        disabled={isOpen}
      >
        <div className='w-16'>
          <Image
            src={logo}
            width={50}
            height={50}
            className='w-full h-full object-contain'
            alt='legato sounds and lights'
          />
        </div>

        <GiHamburgerMenu onClick={() => setIsOpen(true)} className='text-xl' />
      </motion.button>

      {/* Sliding Sidebar */}
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            key='sidebar'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed right-0 top-0 h-full w-full md:w-3/4 border-r border-zinc-700 flex flex-col justify-center items-center overflow-hidden z-50'
          >
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

            <div className='absolute top-6 left-0 right-0 z-20 w-full flex justify-between px-6'>
              <img
                src='/legato-logo.png'
                alt='Legato Events Logo'
                className='h-10 w-auto'
              />
              <button
                onClick={() => setIsOpen(false)}
                className='cursor-pointer text-white hover:text-zinc-200 transition-colors'
              >
                <MdClose className='text-2xl' />
              </button>
            </div>

            <ul className='relative z-10 flex flex-col gap-6 uppercase font-bold cursor-pointer'>
              {services.map((service) => (
                <div key={service.id} onClick={() => setIsOpen(false)}>
                  <GradientListItem
                    listKey={service.id}
                    name={service.name}
                    slug={service.slug}
                  />
                </div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 bg-black/40 z-40'
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default SidebarNav
