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
  const currentPath = pathname.split('/').filter(Boolean)[0] ?? ''
  const isActive = slug === currentPath
  return (
    <li
      onClick={() => router.push(`/${slug}`)}
      className={`
    text-xl relative transition-all select-none font-semibold
    duration-300 hover:scale-105
    group
  `}
    >
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
