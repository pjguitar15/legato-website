'use client'

import React, { useEffect, useRef, useState } from 'react'
import BrandLogo from './BrandLogo'
import DesktopNavLinks from './DesktopNavLinks'

export type NavItem = {
  label: string
  href: string
  current?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', current: true },
  { label: 'Sounds and Lights', href: '/sounds-and-lights' },
  { label: 'Full Band Rental', href: '/full-band-setup' },
  { label: 'LED Wall', href: '/led-wall' },
  { label: 'Stage Setup', href: '/stage-setup' },
  { label: 'About Legato', href: '/about-legato' },
]

export default function Navbar() {
  const profileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!profileRef.current) return
      const target = e.target as Node
    }

    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [])

  return (
    <nav className='relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 bg-black'>
      <div className='sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:justify-start'>
            <BrandLogo />
          </div>

          <div className='hidden sm:flex sm:flex-1 sm:justify-end'>
            <DesktopNavLinks items={NAV_ITEMS} />
          </div>
        </div>
      </div>
    </nav>
  )
}
