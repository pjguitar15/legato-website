'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from './Navbar'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function DesktopNavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <div className='hidden sm:ml-6 sm:block'>
      <div className='flex items-center'>
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + '/') ||
            item.sublinks?.some((sub) => pathname === sub.href)

          // ITEM WITH SUBLINKS (HOVER DROPDOWN)
          if (item.sublinks && item.sublinks.length > 0) {
            return (
              <div key={item.label} className='relative group'>
                {/* Parent link */}
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center gap-2 px-6 py-6 text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-zinc-900'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  <FiChevronDown className='text-sm transition-transform duration-200 group-hover:rotate-180' />
                </Link>

                {/* Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className='absolute left-0 top-full z-50 hidden min-w-[220px] bg-zinc-900 border border-white/10 shadow-xl group-hover:block'
                >
                  {item.sublinks.map((sub) => {
                    const isSubActive = pathname === sub.href

                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={`block px-5 py-3 text-sm transition-colors ${
                          isSubActive
                            ? 'text-white bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    )
                  })}
                </motion.div>
              </div>
            )
          }

          // ITEM WITHOUT SUBLINKS
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={`inline-flex items-center px-6 py-6 text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-white bg-zinc-900'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
