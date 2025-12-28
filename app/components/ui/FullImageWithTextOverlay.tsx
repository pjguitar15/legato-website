'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const FullImageWithTextOverlay = () => {
  return (
    <div className='relative w-full overflow-hidden h-[70vh] sm:h-[80vh] lg:h-[90vh]'>
      {/* Background image (slow premium zoom) */}
      <motion.img
        src='/led-wall/led-wall.jpg'
        alt=''
        className='absolute inset-0 h-full w-full object-cover object-center will-change-transform'
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient overlay */}
      <motion.div
        className='absolute inset-0 h-full bg-linear-to-t from-black via-black/60 to-transparent'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />

      {/* Subtle vignette */}
      <motion.div
        className='absolute inset-0 h-full'
        style={{
          background:
            'radial-gradient(80% 60% at 70% 80%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.78) 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
      />

      {/* Text + CTA block */}
      <motion.div
        className='absolute
          left-5 right-5 bottom-6
          sm:left-auto sm:right-8 sm:bottom-10
          lg:right-12 lg:bottom-14
          text-left sm:text-right'
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
        }}
      >
        <div className='flex flex-col items-start sm:items-end gap-3 sm:gap-4'>
          <motion.h1
            className='font-oswald text-white tracking-wide leading-tight uppercase
              text-4xl sm:text-6xl md:text-7xl lg:text-9xl'
            variants={{
              hidden: { y: 28, opacity: 0, filter: 'blur(8px)' },
              show: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            LED WALL
          </motion.h1>

          <motion.p
            className='font-oswald text-zinc-300 tracking-[0.2em] uppercase
              text-xs sm:text-base md:text-xl lg:text-3xl'
            variants={{
              hidden: { y: 18, opacity: 0, filter: 'blur(6px)' },
              show: {
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Big visuals. Bigger impact.
          </motion.p>

          {/* Accent line */}
          <motion.div
            className='h-0.5 w-14 sm:w-20 bg-white/70'
            variants={{
              hidden: { scaleX: 0, opacity: 0, transformOrigin: '100% 50%' },
              show: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />

          {/* CTA */}
          <motion.div
            className='pt-4 sm:pt-6'
            variants={{
              hidden: { y: 16, opacity: 0 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <Link
              href='/contact'
              className='inline-flex items-center justify-center
                px-6 py-3 lg:px-10 lg:py-4
                bg-linear-to-r from-emerald-600 to-cyan-600
                text-white font-semibold tracking-wide
                hover:scale-105 hover:shadow-lg
                transition-all duration-300
                text-sm lg:text-base'
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default FullImageWithTextOverlay
