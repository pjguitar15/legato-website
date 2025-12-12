'use client'

import Background from '../components/ui/Background'
import stripes from '@/public/backgrounds/stripes.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  brand,
  services,
  equipmentHighlights,
  eventTypes,
  locations,
  fullBandPackage,
  serviceImagePlaceholders,
  socialMedia,
} from '../constants/businessInfo'

const formatPrice = (price: number | string) =>
  typeof price === 'number'
    ? `Starts at PHP ${price.toLocaleString('en-PH')}`
    : price

export default function ServicesPage() {
  const facebookLink = socialMedia.facebookPage.url || '#'
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <div className='relative min-h-screen'>
      <Background imageUrl={stripes}>
        <div className='max-w-5xl mx-auto px-6 pt-52 pb-24 flex flex-col gap-14'>
          <motion.header
            className='flex flex-col gap-4'
            {...fadeUp}
            transition={{ duration: 0.4 }}
          >
            <p className='text-sm uppercase tracking-[0.3em] text-white/70'>
              Services
            </p>
            <h1 className='text-4xl md:text-5xl font-semibold text-white'>
              {brand.tagline}
            </h1>
            <p className='text-lg text-white/80 max-w-3xl'>
              Tailored sounds and lights packages for Cavite events - kasal,
              corporate, campus gigs, pati live bands. Clear vocals, walang
              sablay na mics, at flattering lights para sa photos and videos.
            </p>
            <p className='text-sm text-white/70'>
              Bookings handled via Facebook Page. Message us there to lock your
              date.
            </p>
          </motion.header>

          <motion.section
            className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col gap-6 shadow-2xl shadow-black/30'
            {...fadeUp}
            transition={{ duration: 0.45 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Main package
              </p>
              <h2 className='text-3xl font-semibold text-white'>
                {fullBandPackage.name}
              </h2>
              <p className='text-white/80 max-w-3xl'>
                {fullBandPackage.description}
              </p>
              <p className='text-xs text-white/60'>{fullBandPackage.notes}</p>
            </div>

            <div className='grid md:grid-cols-2 gap-4 text-sm text-white/80'>
              <div className='rounded-lg border border-white/10 bg-black/60 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                  Quick includes
                </p>
                <ul className='list-disc list-inside space-y-2'>
                  {fullBandPackage.includesSummary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='rounded-lg border border-white/10 bg-black/60 p-4 flex flex-col gap-3'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60'>
                  Gear (configurable)
                </p>
                <div className='grid grid-cols-2 gap-2 text-xs text-white/75'>
                  <div className='rounded-md bg-white/5 border border-white/10 p-3'>
                    <p className='font-semibold text-white text-sm mb-1'>FOH</p>
                    <ul className='list-disc list-inside space-y-1'>
                      {fullBandPackage.gear.frontOfHouse.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-md bg-white/5 border border-white/10 p-3'>
                    <p className='font-semibold text-white text-sm mb-1'>
                      Monitors
                    </p>
                    <ul className='list-disc list-inside space-y-1'>
                      {fullBandPackage.gear.monitors.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-md bg-white/5 border border-white/10 p-3'>
                    <p className='font-semibold text-white text-sm mb-1'>
                      Wireless
                    </p>
                    <ul className='list-disc list-inside space-y-1'>
                      {fullBandPackage.gear.wirelessMics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-md bg-white/5 border border-white/10 p-3'>
                    <p className='font-semibold text-white text-sm mb-1'>
                      Wired / DI
                    </p>
                    <ul className='list-disc list-inside space-y-1'>
                      {fullBandPackage.gear.wiredMics.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='rounded-md bg-white/5 border border-white/10 p-3 col-span-2'>
                    <p className='font-semibold text-white text-sm mb-1'>
                      Lights
                    </p>
                    <ul className='list-disc list-inside space-y-1 grid grid-cols-1 sm:grid-cols-2'>
                      {fullBandPackage.gear.lights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-4 text-sm text-white/80'>
              <div className='rounded-lg border border-white/10 bg-black/60 p-4 flex flex-col gap-3'>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                    Backline (drums/guitars/bass)
                  </p>
                  <ul className='list-disc list-inside space-y-1'>
                    {fullBandPackage.gear.backline.drums.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className='list-disc list-inside space-y-1 mt-2'>
                    {fullBandPackage.gear.backline.guitars.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className='list-disc list-inside space-y-1 mt-2'>
                    {fullBandPackage.gear.backline.bass.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='rounded-lg border border-white/10 bg-black/60 p-4 flex flex-col gap-3'>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                    Keys / tracks
                  </p>
                  <ul className='list-disc list-inside space-y-1'>
                    {fullBandPackage.gear.backline.keys.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                    Stage essentials
                  </p>
                  <ul className='list-disc list-inside space-y-1'>
                    {fullBandPackage.gear.backline.stageEssentials.map(
                      (item) => (
                        <li key={item}>{item}</li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className='rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-8 flex flex-col gap-4 shadow-2xl shadow-black/30'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Add your images
              </p>
              <h3 className='text-xl font-semibold text-white'>
                Show the rigs and the crowd
              </h3>
              <p className='text-white/70'>
                Replace these boxes with photos later. We kept labels short so
                you know where to drop them.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {serviceImagePlaceholders.map((ph) => (
                <div
                  key={ph.id}
                  className='rounded-xl border border-white/10 bg-white/10 px-4 py-5 flex flex-col gap-3 h-36 justify-between text-white'
                >
                  <span className='font-semibold text-sm'>{ph.label}</span>
                  <span className='text-xs text-white/70 uppercase tracking-[0.2em]'>
                    add image here
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            className='grid md:grid-cols-2 gap-8'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className='rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-8 flex flex-col gap-6 shadow-2xl shadow-black/30'
              >
                <div className='flex items-start justify-between gap-3'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-xs uppercase tracking-[0.25em] text-white/60'>
                      {service.type}
                    </p>
                    <h2 className='text-2xl font-semibold text-white'>
                      {service.name}
                    </h2>
                  </div>
                  <span className='text-sm text-white/70 rounded-full border border-white/15 px-4 py-1'>
                    {formatPrice(service.startingPricePHP)}
                  </span>
                </div>

                <p className='text-white/80 text-sm leading-6'>
                  {service.description}
                </p>

                <div className='flex flex-col gap-3'>
                  <p className='text-xs font-semibold uppercase tracking-[0.25em] text-white/70'>
                    Includes
                  </p>
                  <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/80'>
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className='rounded-lg bg-white/5 border border-white/10 px-3 py-2'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className='text-xs text-white/60 leading-relaxed'>
                  {service.notes}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.section
            className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col gap-6'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Equipment highlights
              </p>
              <h3 className='text-xl font-semibold text-white'>
                Gear we trust
              </h3>
              <p className='text-white/70 max-w-3xl'>
                {equipmentHighlights.notes}
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-4 text-sm text-white/80'>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                  Speakers
                </p>
                <ul className='list-disc list-inside space-y-1'>
                  {equipmentHighlights.speakers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                  Mixers
                </p>
                <ul className='list-disc list-inside space-y-1'>
                  {equipmentHighlights.mixers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                  Wireless mics
                </p>
                <ul className='list-disc list-inside space-y-1'>
                  {equipmentHighlights.wirelessMics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='rounded-lg border border-white/10 bg-black/50 p-4'>
                <p className='text-xs uppercase tracking-[0.2em] text-white/60 mb-2'>
                  Lights
                </p>
                <ul className='list-disc list-inside space-y-1'>
                  {equipmentHighlights.lights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            className='rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-8 flex flex-col gap-4'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                  Event coverage
                </p>
                <h3 className='text-xl font-semibold text-white'>
                  We are local to {locations.baseLocation}
                </h3>
                <p className='text-white/70 max-w-3xl'>
                  Base: {locations.city}. We mostly cover Cavite, and we can
                  travel to nearby South Luzon and Metro Manila on request.
                </p>
              </div>
              <span className='text-xs text-white/60'>
                {locations.travelNotes}
              </span>
            </div>

            <div className='flex flex-wrap gap-2'>
              {eventTypes.map((event) => (
                <span
                  key={event}
                  className='rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80'
                >
                  {event}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.div
            className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[#B83838]/30 bg-[#B83838]/20 px-6 py-5'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-semibold text-white'>
                Ready to book Legato?
              </h4>
              <p className='text-sm text-white/80'>
                Send your date, venue, and event type on Facebook so we can
                match the right rig.
              </p>
            </div>
            <Link
              href={facebookLink}
              className='inline-flex items-center justify-center rounded-full bg-[#B83838] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#B83838]/30 transition hover:-translate-y-0.5 hover:shadow-xl'
            >
              Message on Facebook
            </Link>
          </motion.div>
        </div>
      </Background>
    </div>
  )
}
