'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const VideoBackground = () => {
  const videoSrc =
    'https://res.cloudinary.com/dbibwzs6c/video/upload/v1766826032/website-video-1_tp03pn.mp4'

  const posterSrc =
    'https://res.cloudinary.com/dbibwzs6c/image/upload/v1766826566/thumbnail_rlq1tk.jpg'

  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative w-full h-[42vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden bg-black'>
      {/* Poster image (instant) */}
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
      <div className='absolute inset-0 bg-black/70' />
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      {/* Text */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white gap-3 text-center'>
        <h1 className='font-oswald text-4xl sm:text-6xl lg:text-8xl font-bold uppercase'>
          About Legato
        </h1>
        <h2 className='uppercase tracking-widest text-zinc-300 text-sm sm:text-lg'>
          Who We Are • What We Do
        </h2>
      </div>
    </div>
  )
}

export default VideoBackground
