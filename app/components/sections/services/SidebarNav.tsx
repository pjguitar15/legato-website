'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'

import logo from '@/public/legato-no-icon.png'

type SubLink = {
  href: string
  label: string
}

type NavItem = {
  label: string
  href: string
  sublinks?: SubLink[]
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'PACKAGES',
    href: '/sounds-and-lights',
    sublinks: [
      {
        href: '/sounds-and-lights/corporate-events',
        label: 'Corporate Events',
      },
      {
        href: '/sounds-and-lights/simple-wedding-setup',
        label: 'Simple Wedding Setup',
      },
      {
        href: '/sounds-and-lights/simple-corporate-setup',
        label: 'Simple Corporate',
      },
      { href: '/sounds-and-lights/restobar-band-setup', label: 'Indoor Setup' },
      { href: '/sounds-and-lights/school-full-band', label: 'Outdoor Setup' },
      {
        href: '/sounds-and-lights/church-anniversary',
        label: 'Church Anniversary',
      },
      { href: '/sounds-and-lights/cozy-cove-style', label: 'Cozy Cove Style' },
      {
        href: '/sounds-and-lights/gymnasium-events',
        label: 'Gymnasium Events',
      },
      {
        href: '/sounds-and-lights/barangay-gymnasium-events',
        label: 'Barangay Gymnasium Events',
      },
    ],
  },
  { label: 'Full Band Rental', href: '/full-band-setup' },
  { label: 'LED Wall', href: '/led-wall' },
  { label: 'About Legato', href: '/about-legato' },
  { label: 'Contact', href: '/contact' },
]

const backgroundMap: Record<string, string> = {
  '': '/backgrounds/service-list-bg.jpg',
  'sounds-and-lights': '/backgrounds/service-list-bg.jpg',
  'full-band-setup': '/backgrounds/full-band-background.jpg',
  'led-wall': '/backgrounds/led-wall.jpg',
  'about-legato': '/backgrounds/service-list-bg.jpg',
  contact: '/backgrounds/service-list-bg.jpg',
}

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openItem, setOpenItem] = useState<string | null>(null)
  const pathname = usePathname()

  const currentPath = pathname.split('/').filter(Boolean)[0] || ''
  const currentImage = backgroundMap[currentPath] || backgroundMap['']

  return (
    <div className='flex relative'>
      {/* Toggle Button */}
      <motion.button
        className='fixed left-0 top-0 z-40 w-full flex justify-between bg-zinc-950 px-6 py-4 text-white'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -20 : 0 }}
        transition={{ duration: 0.2 }}
        disabled={isOpen}
      >
        <Link href='/' className='w-16'>
          <Image
            src={logo}
            width={50}
            height={50}
            className='w-full h-full object-contain'
            alt='Legato Events'
          />
        </Link>

        <GiHamburgerMenu
          className='text-xl cursor-pointer'
          onClick={() => setIsOpen(true)}
        />
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            key='sidebar'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed right-0 top-0 z-50 h-full w-full md:w-3/4 overflow-hidden'
          >
            {/* Background Image */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='absolute inset-0 bg-cover bg-center'
              style={{ backgroundImage: `url(${currentImage})` }}
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/90' />

            {/* Header */}
            <div className='absolute top-6 left-0 right-0 z-20 flex justify-between px-6'>
              <Link href='/' onClick={() => setIsOpen(false)}>
                <img
                  src='/legato-logo.png'
                  alt='Legato Logo'
                  className='h-10 w-auto'
                />
              </Link>

              <button onClick={() => setIsOpen(false)} className='text-white'>
                <MdClose className='text-2xl' />
              </button>
            </div>

            {/* Navigation */}
            <ul className='relative z-20 mt-24 flex flex-col gap-4 px-8 uppercase font-bold'>
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + '/') ||
                  item.sublinks?.some((sub) => pathname === sub.href)

                const isOpenItem = openItem === item.label

                if (item.sublinks) {
                  return (
                    <li key={item.label}>
                      <button
                        onClick={() =>
                          setOpenItem(isOpenItem ? null : item.label)
                        }
                        className='flex w-full items-center justify-between py-3 text-lg text-white'
                      >
                        <span
                          className={isActive ? 'text-white' : 'text-zinc-300'}
                        >
                          {item.label}
                        </span>
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            isOpenItem ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpenItem && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className='ml-4 overflow-hidden border-l border-white/10'
                          >
                            {item.sublinks.map((sub) => {
                              const isSubActive = pathname === sub.href

                              return (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 pl-4 text-sm ${
                                      isSubActive
                                        ? 'text-white'
                                        : 'text-zinc-300 hover:text-white'
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-lg ${
                        isActive
                          ? 'text-white'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
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
            className='fixed inset-0 z-40 bg-black/40'
          />
        )}
      </AnimatePresence>
    </div>
  )
}
