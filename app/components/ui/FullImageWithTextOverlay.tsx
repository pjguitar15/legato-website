'use client'

import { motion } from 'framer-motion'

const FullImageWithTextOverlay = () => {
  return (
    <div className='relative h-[90vh] w-full overflow-hidden'>
      {/* Background image (slow premium zoom) */}
      <motion.img
        src='/led-wall/led-wall.jpg'
        alt=''
        className='absolute inset-0 h-full w-full object-cover object-center will-change-transform'
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient overlay (fade in) */}
      <motion.div
        className='absolute inset-0 h-full bg-linear-to-t from-black via-black/60 to-transparent'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />

      {/* Subtle vignette for extra "premium" depth */}
      <motion.div
        className='absolute inset-0 h-full'
        style={{
          background:
            'radial-gradient(80% 60% at 70% 80%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.75) 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.1, ease: 'easeOut' }}
      />

      {/* Text block (stagger + slide up + slight blur) */}
      <motion.div
        className='absolute bottom-10 right-10 text-right'
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.25 },
          },
        }}
      >
        <motion.h1
          className='font-oswald text-5xl md:text-6xl lg:text-9xl text-white tracking-wide leading-tight'
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
          className='font-oswald text-lg md:text-3xl text-zinc-300 tracking-widest mt-2 uppercase'
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

        {/* Tiny accent line */}
        <motion.div
          className='ml-auto mt-5 h-0.5 w-24 bg-white/70'
          variants={{
            hidden: { scaleX: 0, opacity: 0, transformOrigin: '100% 50%' },
            show: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        />
      </motion.div>
    </div>
  )
}

export default FullImageWithTextOverlay
