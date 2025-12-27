'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoArrowBackOutline } from 'react-icons/io5'
import { coverImages, EventTypes } from '@/constants/eventTypes'

const Header = ({
  hideButtons,
  title,
  bgType,
}: {
  hideButtons?: boolean
  title: string
  bgType: EventTypes
}) => {
  const coverImage = coverImages[bgType] ?? '/backgrounds/band-bg-ngis.jpg'
  return (
    <motion.div
      className='w-full h-92 overflow-hidden relative'
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <img
        className='w-full h-full object-cover'
        src={coverImage}
        alt='header'
      />

      {/* gradient overlay */}
      <div
        className='
            pointer-events-none
            absolute inset-x-0 bottom-0 h-full
            bg-linear-to-t from-black via-black/60 to-transparent
            opacity-90
            transition-opacity duration-300
          '
      />

      <motion.div
        className='absolute inset-0 bottom-12 flex items-center justify-center flex-col gap-4'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
      >
        <p className='text-sm uppercase tracking-widest text-emerald-400 font-semibold'>
          FULL BAND EVENTS
        </p>

        <h6
          className={`font-oswald text-white text-5xl font-semibold uppercase`}
        >
          {title}
        </h6>

        {!hideButtons ? (
          <div className='flex gap-2'>
            <Link
              href='/full-band-setup/inclusions'
              className='text-sm px-5 py-3 font-semibold bg-linear-to-r from-green-600 to-cyan-600 cursor-pointer hover:from-green-500 hover:to-cyan-500 transition-colors text-white'
            >
              View Inclusions
            </Link>
            <Link
              href='/full-band-setup/backline'
              className='px-4 py-3 text-zinc-950 text-sm font-semibold cursor-pointer bg-white'
            >
              Backline Rental
            </Link>
          </div>
        ) : (
          <Link
            href='/full-band-setup'
            className='px-4 py-3 text-xs font-semibold cursor-pointer text-white hover:bg-white hover:text-zinc-950 flex items-center gap-1'
          >
            <IoArrowBackOutline />
            Back to Full Band page
          </Link>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Header
