import Link from 'next/link'
import { navLinks } from '@/app/constants/navLinks'

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white py-10 px-6'>
      <div className='max-w-5xl mx-auto flex flex-col gap-6'>
        <div className='flex flex-wrap gap-4 text-sm text-white/80'>
          {navLinks.map((item) => (
            <Link key={item.name} href={item.path} className='hover:text-white'>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='text-xs text-white/60'>
          Legato Sounds & Lights - Cavite, PH
        </div>
      </div>
    </footer>
  )
}

export default Footer
