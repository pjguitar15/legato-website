'use client'

import { IoCheckmarkOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { coverImages, EventTypes } from '@/constants/eventTypes'

type PackageType = {
  name: string
  price: string
  features: string[]
  id: number
  handleClick: (packageId: number) => void
  eventType: EventTypes
}

const PackageCard = ({
  name,
  price,
  features,
  id,
  handleClick,
  eventType,
}: PackageType) => {
  const coverImage = coverImages[eventType]
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className='border border-zinc-700 bg-zinc-950 flex flex-col'
    >
      <div className='flex flex-col gap-4 text-center bg-linear-to-r from-dark-900 to-zinc-900 border border-zinc-800 py-10 relative overflow-hidden'>
        <div className='flex flex-col items-center mx-auto gap-2 z-10'>
          <h6 className='text-md font-medium'>{name}</h6>
        </div>
        <div className='z-10'>
          <h3 className='text-3xl font-bold'>P{price}</h3>
          <p className='text-xs'>/event</p>
        </div>

        {/* BG image */}
        <img
          src={coverImage}
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-center brightness-30'
        />
      </div>

      <div className='px-12 py-6 flex flex-col gap-5 grow'>
        <ul className='flex flex-col gap-2'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-start gap-2 text-sm'>
              <IoCheckmarkOutline
                size={16}
                className='text-green-500 shrink-0 mt-0.5'
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className='flex justify-center mt-auto pt-12'>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleClick(id)}
            className='border border-zinc-600 hover:border-white text-zinc-400 hover:text-white transition duration-300 px-4 py-2 text-sm cursor-pointer'
          >
            Click to view inclusion
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default PackageCard
