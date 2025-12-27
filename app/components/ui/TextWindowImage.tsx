'use client'
import { motion } from 'framer-motion'



const TextWindowImage = ({ subtitle, title, description, images, reverse = false }: { subtitle: string, title: string, description: string, images: {id: number, img: string}[],reverse?: boolean }) => {
  return (
    <main className='bg-zinc-950 text-white py-20 md:py-24 overflow-hidden'>
      <motion.div
        className={`
          grid grid-cols-1 lg:grid-cols-2
          w-full max-w-7xl mx-auto
          px-6 md:px-10 lg:px-0
          gap-12 lg:gap-18
        `}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
        }}
      >
        {/* TEXT */}
        <motion.div
          className={`
            flex flex-col gap-4 justify-center
            ${reverse ? 'lg:order-2' : 'lg:order-1'}
          `}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            className='text-sm uppercase tracking-widest text-emerald-400 font-semibold'
            variants={{
              hidden: {
                y: 14,
                opacity: 0,
                x: reverse ? 24 : 0,
                filter: 'blur(6px)',
              },
              show: {
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {subtitle}
          </motion.p>

          <motion.h6
            className='text-3xl sm:text-4xl font-semibold leading-tight'
            variants={{
              hidden: {
                y: 24,
                opacity: 0,
                x: reverse ? 32 : 0,
                filter: 'blur(8px)',
              },
              show: {
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {title}
          </motion.h6>

          <motion.p
            className='text-zinc-400 leading-7 text-sm sm:text-base'
            variants={{
              hidden: {
                y: 18,
                opacity: 0,
                x: reverse ? 36 : 0,
                filter: 'blur(6px)',
              },
              show: {
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          className={`
            grid grid-cols-2 gap-4 sm:gap-5
            ${reverse ? 'lg:order-1' : 'lg:order-2'}
          `}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {images.map((item) => (
            <motion.div
              key={item.id}
              className='w-full aspect-[4/3] overflow-hidden'
              variants={{
                hidden: { y: 24, opacity: 0, x: reverse ? -20 : 0 },
                show: {
                  y: 0,
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: 'easeOut' },
                },
              }}
            >
              <img
                src={item.img}
                alt='legato'
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}

export default TextWindowImage
