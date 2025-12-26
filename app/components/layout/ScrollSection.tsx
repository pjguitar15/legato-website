'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ScrollSection = ({ children }: { children: React.ReactNode }) => (
  <div
    className='
      scrollbar-modern
      lg:px-16 py-24
      w-full max-h-screen
      overflow-y-auto overflow-x-hidden
    '
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className='
        flex flex-col gap-7 items-center
      '
    >
      {children}
    </motion.div>
  </div>
)

export default ScrollSection
