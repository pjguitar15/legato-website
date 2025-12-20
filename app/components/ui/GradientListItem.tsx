'use client'

import { usePathname, useRouter } from 'next/navigation'
import { TiArrowRight } from 'react-icons/ti'

const GradientListItem = ({
  listKey,
  name,
  slug,
}: {
  listKey: number
  name: string
  slug: string
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const currentPath =
    pathname.split('/').filter(Boolean)[0] ?? 'sounds-and-lights'
  const isActive = slug === currentPath
  return (
    <li
      onClick={() => router.push(`/${slug}`)}
      className={`
    text-3xl relative transition-all select-none font-semibold ps-36
    duration-300 hover:scale-105
    group
  `}
    >
      {/* arrow never gets clipped/transparent */}
      <div
        className={`absolute left-12 top-1/2 -translate-y-1/2 ${
          isActive ? 'block' : 'hidden'
        } group-hover:block`}
      >
        <TiArrowRight className='text-white' />
      </div>

      {/* gradient applies ONLY to text */}
      <span
        className={`
      ${
        isActive
          ? 'bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'
          : 'text-white'
      }
      group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-cyan-400
      group-hover:bg-clip-text group-hover:text-transparent
    `}
      >
        {name}
      </span>
    </li>
  )
}

export default GradientListItem;
