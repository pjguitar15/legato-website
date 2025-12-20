import React from 'react'
import type { NavItem } from './Navbar'

type Props = {
  open: boolean
  id: string
  items: NavItem[]
  onNavigate?: () => void
}

export default function MobileMenuPanel({
  open,
  id,
  items,
  onNavigate,
}: Props) {
  if (!open) return null

  return (
    <div id={id} className='block sm:hidden'>
      <div className='space-y-1 px-2 pt-2 pb-3'>
        {items.map((item) => {
          const isCurrent = Boolean(item.current)

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={
                isCurrent
                  ? 'block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white'
                  : 'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white'
              }
              onClick={onNavigate}
            >
              {item.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
