'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const VideoBackground = ({ forHero }: { forHero?: boolean }) => {
  const videoSrc =
    'https://res.cloudinary.com/dbibwzs6c/video/upload/v1766826032/website-video-1_tp03pn.mp4'

  const posterSrc =
    'https://res.cloudinary.com/dbibwzs6c/image/upload/v1766826566/thumbnail_rlq1tk.jpg'

  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative w-full h-[42vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden bg-black'>
      {/* Poster image */}
      <motion.img
        src={posterSrc}
        alt=''
        className='absolute inset-0 w-full h-full object-cover'
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Video */}
      <motion.video
        className='absolute inset-0 w-full h-full object-cover will-change-transform'
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
        onCanPlay={() => setLoaded(true)}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.0, opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlays */}
      <motion.div
        className='absolute inset-0 bg-black/70'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
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

      {/* Text */}
      <motion.div
        className='relative z-10 flex flex-col items-center justify-center h-full gap-3 text-center'
        initial='hidden'
        animate='show'
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
        }}
      >
        <motion.h1
          className={`font-oswald font-bold uppercase text-4xl sm:text-6xl lg:text-8xl ${
            forHero
              ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'
              : 'text-white'
          }`}
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
          {forHero ? 'Legato Sounds and Lights' : 'About Legato'}
        </motion.h1>

        <motion.h2
          className='uppercase tracking-widest text-zinc-300 text-sm sm:text-lg'
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
          {forHero
            ? 'Turning Events Into Experiences'
            : 'Who We Are • What We Do'}
        </motion.h2>
      </motion.div>
    </div>
  )
}

export default VideoBackground
