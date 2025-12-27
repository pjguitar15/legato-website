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
    <section
      className='relative w-full overflow-hidden
        lg:min-h-[42vh]
        flex items-stretch'
    >
      {/* Background image (slow premium zoom) */}
      <motion.img
        src={coverImage}
        alt='header'
        className='absolute inset-0 h-full w-full object-cover will-change-transform'
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient overlay */}
      <motion.div
        className='absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Vignette */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
      />

      {/* Content */}
      <motion.div
        className='relative z-10 w-full'
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
        }}
      >
        <div
          className='mx-auto w-full max-w-6xl
            px-4 sm:px-6 lg:px-8
            pt-16 sm:pt-20 lg:pt-24
            pb-10 sm:pb-12 lg:pb-16
            flex flex-col items-center justify-end text-center gap-4'
        >
          <motion.p
            className='text-[11px] sm:text-sm uppercase tracking-[0.22em] text-emerald-400 font-semibold'
            variants={{
              hidden: { y: 14, opacity: 0, filter: 'blur(6px)' },
              show: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            FULL BAND EVENTS
          </motion.p>

          <motion.h1
            className='font-oswald text-white font-semibold uppercase tracking-wide
              text-3xl sm:text-5xl lg:text-6xl
              leading-[1.05] max-w-[26ch]'
            variants={{
              hidden: { y: 26, opacity: 0, filter: 'blur(8px)' },
              show: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {title}
          </motion.h1>

          {/* Buttons / Back link */}
          {!hideButtons ? (
            <motion.div
              className='mt-2 flex w-full max-w-md flex-col gap-2 sm:max-w-none sm:w-auto sm:flex-row sm:gap-3'
              variants={{
                hidden: { y: 16, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              <Link
                href='/full-band-setup/inclusions'
                className='text-sm px-5 py-3 font-semibold
                  bg-linear-to-r from-green-600 to-cyan-600
                  hover:from-green-500 hover:to-cyan-500 transition-colors
                  text-white text-center'
              >
                View Inclusions
              </Link>

              <Link
                href='/full-band-setup/backline'
                className='px-5 py-3 text-sm font-semibold
                  bg-white text-zinc-950 text-center'
              >
                Backline Rental
              </Link>
            </motion.div>
          ) : (
            <motion.div
              className='mt-2'
              variants={{
                hidden: { y: 14, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              <Link
                href='/full-band-setup'
                className='inline-flex items-center gap-1
                  px-4 py-3 text-xs font-semibold
                  text-white hover:bg-white/10 rounded-md transition'
              >
                <IoArrowBackOutline />
                Back to Full Band page
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Header
