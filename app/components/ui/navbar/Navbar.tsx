'use client'

import React, { useEffect, useRef, useState } from 'react'
import MobileMenuButton from './MobileMenuButton'
import BrandLogo from './BrandLogo'
import DesktopNavLinks from './DesktopNavLinks'
import MobileMenuPanel from './MobileMenuPanel'

export type NavItem = {
  label: string
  href: string
  current?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#', current: true },
  { label: 'Contact', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'About', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement | null>(null)

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!profileRef.current) return
      const target = e.target as Node
    }

    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [])

  return (
    <nav className='relative bg-zinc-800/30 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10'>
      <div className='px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <MobileMenuButton
              open={mobileOpen}
              onToggle={() => setMobileOpen((v) => !v)}
              controlsId='mobile-menu'
            />
          </div>

          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <BrandLogo />

            <DesktopNavLinks items={NAV_ITEMS} />
          </div>
        </div>
      </div>

      <MobileMenuPanel
        open={mobileOpen}
        id='mobile-menu'
        items={NAV_ITEMS}
        onNavigate={() => setMobileOpen(false)}
      />
    </nav>
  )
}
