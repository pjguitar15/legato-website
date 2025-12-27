'use client'

import { motion } from 'framer-motion'

const HeroWithImage = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaAction,
  reverse = false,
}: {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaAction?: () => void
  reverse?: boolean
}) => {
  return (
    <section className='overflow-x-hidden bg-zinc-950'>
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-2 items-center
          lg:h-[75vh]
          ${reverse ? 'lg:flex-row-reverse' : ''}
        `}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`
            flex flex-col gap-3 lg:gap-6
            px-7 lg:px-24 py-24 lg:py-0
            ${reverse ? 'lg:order-2' : 'lg:order-1'}
          `}
        >
          {subtitle && (
            <p className='text-sm uppercase tracking-widest text-emerald-400 font-semibold'>
              {subtitle}
            </p>
          )}

          <h2 className='text-3xl lg:text-5xl font-semibold text-white leading-tight'>
            {title}
          </h2>

          <p className='text-sm lg:text-base text-white/70 leading-relaxed'>
            {description}
          </p>

          {ctaText && (
            <div className='pt-4'>
              <button
                onClick={ctaAction}
                className='px-4 py-3 lg:px-8 lg:py-4
                  bg-linear-to-r from-emerald-600 to-cyan-600
                  text-white font-bold
                  hover:scale-105 transition-transform duration-300
                  text-sm lg:text-base'
              >
                {ctaText}
              </button>
            </div>
          )}
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`
            relative w-full h-[260px] sm:h-[360px] lg:h-full
            ${reverse ? 'lg:order-1' : 'lg:order-2'}
          `}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent' />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroWithImage
