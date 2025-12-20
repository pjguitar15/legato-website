import React from 'react'
import type { NavItem } from './Navbar'

export default function DesktopNavLinks({ items }: { items: NavItem[] }) {
  return (
    <div className='hidden sm:ml-6 sm:block'>
      <div className='flex space-x-4'>
        {items.map((item) => {
          const isCurrent = Boolean(item.current)

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={isCurrent ? 'page' : undefined}
              className={
                isCurrent
                  ? 'rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white'
                  : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white'
              }
            >
              {item.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
