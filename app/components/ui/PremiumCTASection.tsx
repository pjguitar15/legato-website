'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const PremiumCTASection = ({
  headline,
  subheadline,
  buttonText,
  buttonAction,
}: {
  headline: string
  subheadline: string
  buttonText: string
  buttonAction?: () => void
}) => {
  const router = useRouter()

  return (
    <section className='w-full'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='overflow-hidden bg-linear-to-r from-zinc-700/20 via-teal-600/20 to-zinc-700/20 border-y border-zinc-900/30 p-16 text-center relative'
      >
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover object-center brightness-12'
            src='/backgrounds/cta-bg.jpg'
            alt=''
          />
        </div>
        <div className='relative z-10'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-xl lg:text-4xl font-bold text-yellow-500 mb-6 leading-tight uppercase'
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='lg:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            {subheadline}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              router.push('/contact')
            }}
            className='px-9 lg:px-12 py-3 lg:py-4 bg-linear-to-r from-emerald-400 to-cyan-400 text-black font-bold text-sm lg:text-md hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 cursor-pointer'
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default PremiumCTASection
