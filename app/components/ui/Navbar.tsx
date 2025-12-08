import Image from 'next/image'
import logo from '@/public/legato-logo.png'
import { navLinks } from '@/app/constants/navLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full py-12 flex flex-col gap-4 z-50'>
      <div className='flex items-center justify-center'>
        <Image
          src={logo}
          height={280}
          width={280}
          alt='Legato Sounds and Lights'
        />
      </div>

      {/* Nav links */}
      <div className='flex justify-center gap-18'>
        {navLinks.map((item, index) => (
          <Link href={item.path} className='text-lg cursor-pointer' key={index}>{item.name}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar