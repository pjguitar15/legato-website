import Link from 'next/link'
import { navLinks } from '@/app/constants/navLinks'
import { RiFacebookFill, RiYoutubeLine } from 'react-icons/ri'
import { BiLogoGmail } from 'react-icons/bi'

const Footer = () => {
  const socials = [
    { id: 1, icon: <RiFacebookFill /> },
    { id: 2, icon: <RiYoutubeLine /> },
    { id: 3, icon: <BiLogoGmail /> },
  ]

  return (
    <footer className='w-full bg-black text-white py-10 px-6'>
      <div className='flex flex-col max-w-7xl mx-auto gap-8 justify-center items-center'>
        <div className='flex w-full flex-col lg:flex-row gap-10'>
          {/* Logo */}
          <div className='w-full lg:w-1/4'>
            <div className='w-42'>
              <img src='/legato-logo.png' alt='Legato Sounds & Lights' />
            </div>
          </div>

          {/* Links */}
          <div className='w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8'>
            {navLinks.map((group) => (
              <div key={group.title}>
                <p className='text-sm font-semibold tracking-wide uppercase text-white mb-4'>
                  {group.title}
                </p>

                <ul className='flex flex-col gap-2'>
                  {group.links.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className='text-sm text-white/70 hover:text-white transition-colors'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className='w-full border-white/10' />

        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='flex gap-3'>
            {socials.map((icon) => (
              <div
                key={icon.id}
                className='w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-xl cursor-pointer hover:border-white/40 transition-colors'
              >
                {icon.icon}
              </div>
            ))}
          </div>
          <p className='text-sm text-zinc-500'>
            © {new Date().getFullYear()} Legato Sounds & Lights. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
