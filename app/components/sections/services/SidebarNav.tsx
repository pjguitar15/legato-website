'use client'
import GradientListItem from '../../ui/GradientListItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname, useSearchParams } from 'next/navigation'

const services = [
  { id: 1, name: 'Sounds and Lights', slug: 'sounds-and-lights' },
  { id: 2, name: 'Event Lighting', slug: 'event-lighting' },
  { id: 3, name: 'LED Wall', slug: 'led-wall' },
  { id: 4, name: 'Stage Setup', slug: 'stage-setup' },
  { id: 5, name: 'Audio-Visual Support', slug: 'audio-visual-support' },
]

const backgroundMap: Record<string, string> = {
  '': '/backgrounds/service-list-bg.jpg',
  'sounds-and-lights': '/backgrounds/service-list-bg.jpg',
  'event-lighting': '/backgrounds/service-lighting-bg.jpg',
  'led-wall': '/backgrounds/service-list-bg.jpg',
  'stage-setup': '/backgrounds/service-list-bg.jpg',
}

const SidebarNav = () => {
  const pathname = usePathname()
  const currentPath =
    pathname.split('/').filter(Boolean)[0] ?? 'sounds-and-lights'
  return (
    <div
      className='
        relative
        h-screen w-full
        border-r border-zinc-700
        flex justify-center items-center
        bg-cover bg-center
        transition-[background-image] duration-500
      '
      style={{
        backgroundImage: `url(${backgroundMap[currentPath]})`,
      }}
    >
      {/* logo */}
      <div className='absolute top-4 inset-x-0 z-10 w-full flex justify-between ps-3 pe-4'>
        <img
          src='/legato-logo.png'
          alt='Legato Events Logo'
          className='h-10 w-auto'
        />
        <button className='cursor-pointer'>
          <GiHamburgerMenu className='text-xl' />
        </button>
      </div>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/90' />

      {/* Content */}
      <ul className='relative z-10 flex flex-col gap-4 uppercase font-bold cursor-pointer w-full'>
        {services.map((service) => (
          <GradientListItem
            key={service.id}
            listKey={service.id}
            name={service.name}
            slug={service.slug}
          />
        ))}
      </ul>
    </div>
  )
}

export default SidebarNav
