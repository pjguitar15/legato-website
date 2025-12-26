import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from './Navbar'

export default function DesktopNavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <div className='hidden sm:ml-6 sm:block'>
      <div className='flex items-center'>
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + '/')

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
