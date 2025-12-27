'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContactPage = () => {
  return (
    <main className='bg-zinc-950 pt-12 sm:pt-16 pb-20 sm:pb-24 text-white relative overflow-hidden'>
      {/* Background image (always behind everything) */}
      <div className='absolute inset-0 z-0'>
        <img
          className='w-full h-full object-cover opacity-10'
          src='/backgrounds/contact-bg.jpg'
          alt=''
        />
        {/* extra dark wash for readability */}
        <div className='absolute inset-0 bg-zinc-950/70' />
        {/* subtle gradient for depth */}
        <div className='absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/70' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-0'>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start lg:items-center'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
        >
          {/* Left: Logo / image */}
          <motion.div
            className='order-2 lg:order-1'
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className='w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[520px] mx-auto lg:mx-0 relative overflow-hidden rounded-2xl'>
              <img
                className='w-full h-auto block'
                src='/philson.png'
                alt='Legato'
              />
              {/* Bottom fade overlay */}
              <div className='pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-zinc-950 to-transparent' />
            </div>

            <p className='mt-4 text-center lg:text-left text-sm text-zinc-400'>
              Prefer chatting first? Message us and we’ll respond as soon as we
              can.
            </p>
          </motion.div>

          {/* Right: Content + form */}
          <motion.div
            className='order-1 lg:order-2 w-full'
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
              className='mb-7 sm:mb-8'
            >
              <h6 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2'>
                Ready to get started?
              </h6>
              <p className='text-zinc-400 text-sm sm:text-base max-w-xl'>
                Schedule a call with us and tell us about your event. We’ll
                recommend the best setup based on your venue and programme.
              </p>
            </motion.div>

            <motion.form
              className='flex flex-col gap-4 sm:gap-5'
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              {/* Name */}
              <input
                type='text'
                placeholder='Name'
                className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                  px-4 py-3 text-white placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />

              {/* Email & Phone */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                    px-4 py-3 text-white placeholder-zinc-400
                    focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                    px-4 py-3 text-white placeholder-zinc-400
                    focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>

              {/* Event Type & Date */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  type='text'
                  placeholder='Type of Event'
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                    px-4 py-3 text-white placeholder-zinc-400
                    focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
                <input
                  type='date'
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                    px-4 py-3 text-white placeholder-zinc-400
                    focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>

              {/* Message */}
              <textarea
                placeholder='Other details such as time, venue, and theme'
                rows={5}
                className='w-full rounded-md bg-zinc-900/80 border border-zinc-700
                  px-4 py-3 text-white placeholder-zinc-400 resize-none
                  focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />

              {/* Submit */}
              <div className='pt-2'>
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full sm:w-fit px-6 py-3
                    bg-linear-to-r from-emerald-600 to-cyan-600
                    text-white font-semibold rounded-md
                    transition-transform'
                >
                  Send Inquiry
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default ContactPage
