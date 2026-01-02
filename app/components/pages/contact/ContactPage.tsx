'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: '',
      })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='bg-zinc-950 pt-12 sm:pt-16 pb-20 sm:pb-24 text-white relative overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0 z-0'>
        <img
          className='w-full h-full object-cover opacity-10'
          src='/backgrounds/contact-bg.jpg'
          alt=''
        />
        <div className='absolute inset-0 bg-zinc-950/70' />
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
              <div className='mt-5 mb-6 text-sm text-zinc-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
                {/* Left */}
                <div>
                  <p>
                    <span className='font-medium text-white'>Owner:</span>{' '}
                    Philson Suzuki Josol
                  </p>
                  <p>
                    <span className='font-medium text-white'>Phone:</span>{' '}
                    <a href='tel:09762737247' className='hover:underline'>
                      0976 273 7247
                    </a>
                  </p>
                </div>

                {/* Divider */}
                <div className='hidden sm:block w-px h-7 bg-white/40' />
                <div className='block sm:hidden h-px w-full bg-white/20' />

                {/* Right */}
                <div>
                  <p>
                    <span className='font-medium text-white'>Email:</span>{' '}
                    <a
                      href='mailto:legatosoundsandlights@gmail.com'
                      className='hover:underline'
                    >
                      legatosoundsandlights@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className='font-medium text-white'>Location:</span>{' '}
                    Trece Martires City, Cavite
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              className='flex flex-col gap-4 sm:gap-5'
              onSubmit={handleSubmit}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: 'easeOut' },
                },
              }}
            >
              <input
                required
                name='name'
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  required
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
                <input
                  required
                  name='phone'
                  type='tel'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <input
                  required
                  name='eventType'
                  type='text'
                  placeholder='Type of Event'
                  value={formData.eventType}
                  onChange={handleChange}
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
                <input
                  required
                  name='eventDate'
                  type='date'
                  value={formData.eventDate}
                  onChange={handleChange}
                  className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                />
              </div>

              <textarea
                required
                name='message'
                placeholder='Other details such as time, venue, and theme'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className='w-full rounded-md bg-zinc-900/80 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />

              <div className='pt-2'>
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className='w-full sm:w-fit px-6 py-3 bg-linear-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-md transition-transform disabled:opacity-50'
                >
                  {loading ? 'Sending...' : 'Send Inquiry'}
                </motion.button>
              </div>

              {status === 'success' && (
                <p className='text-emerald-400 mt-2'>
                  Your message was sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className='text-red-500 mt-2'>
                  Something went wrong. Please try again.
                </p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default ContactPage
