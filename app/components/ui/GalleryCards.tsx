'use client'
import { useRouter } from 'next/navigation'
import { IoMdEye } from 'react-icons/io'

type TileProps = {
  imgSrc: string
  title: string
  shortDesc: string
  path: string
}

const GalleryCards = ({ tileItems }: { tileItems: TileProps[] }) => {
  const router = useRouter()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
      {tileItems.map((item, i) => (
        <div
          key={i}
          onClick={() => router.push(`/sounds-and-lights/${item.path}`)}
          className='
            relative group cursor-pointer overflow-hidden
            h-75 w-full
          '
        >
          {/* image */}
          <img
            src={item.imgSrc}
            alt=''
            className='
              h-full w-full object-cover
              transition duration-300
              group-hover:brightness-30 group-hover:saturate-125
            '
          />

          {/* gradient overlay */}
          <div
            className='
              pointer-events-none
              absolute inset-x-0 bottom-0 h-40
              bg-linear-to-t from-black/90 via-black/60 to-transparent
              opacity-70 group-hover:opacity-100
              transition-opacity duration-300
            '
          />

          <div className='absolute hidden inset-0 group-hover:flex items-center justify-center flex-col gap-1'>
            <IoMdEye className='text-2xl' />
            <p className='text-white text-sm'>Click to view</p>
          </div>

          {/* text container */}
          <div
            className='
              absolute inset-x-3 bottom-4 z-10
              transition-all duration-300 ease-out
            '
          >
            {/* title always visible */}
            <h6 className='text-start text-lg font-semibold text-white'>
              {item.title}
            </h6>

            {/* description only on hover */}
            <p
              className='
                mt-1 text-xs text-white opacity-80
                transition-all duration-300 ease-out
                group-hover:opacity-100 max-w-[80%]
              '
            >
              {item.shortDesc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryCards
