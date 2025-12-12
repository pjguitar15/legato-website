'use client'

import FeatureSplit from './components/sections/FeatureSplit'
import Background from './components/ui/Background'
import bg from '@/public/backgrounds/stripes.png'
import {
  serviceImagePlaceholders,
  eventTypes,
  brand,
} from './constants/businessInfo'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <div className='pt-36'>
      <Background imageUrl={bg}>
        <div className='flex min-h-screen flex-col items-center font-sans max-w-5xl mx-auto px-6 py-28 gap-16'>
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
            <FeatureSplit
              title='Sound Check, Mic Drop, Party On!'
              description={`Whether it's a wedding, corporate shindig, or your dog's birthday bash (yes, we've done those too!), let's team up and make some noise - the good kind, of course.`}
              imageUrl='/feature-images/feature-1.webp'
            />
          </motion.div>

          <motion.section
            className='w-full rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-8 shadow-2xl shadow-black/30 flex flex-col gap-6'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                What we do
              </p>
              <h2 className='text-2xl font-semibold text-white'>
                Events, bands, and clean mixes
              </h2>
              <p className='text-white/75 max-w-3xl'>
                We keep it real: solid gear, fast setups, and mixes that work
                for hosts, singers, and crowds.
              </p>
            </div>
            <div className='grid sm:grid-cols-3 gap-4 text-sm text-white/80'>
              {[
                'Weddings and receptions',
                'Campus and corporate',
                'Full band shows',
              ].map((title) => (
                <div
                  key={title}
                  className='rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2'
                >
                  <div className='h-28 rounded-md border border-white/15 bg-white/10 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-white/60'>
                    add image here
                  </div>
                  <p className='font-semibold text-white'>{title}</p>
                  <p className='text-white/70 text-sm'>
                    Clean vocals, balanced lights, no-fuss tech flow.
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className='w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-2xl shadow-black/30 flex flex-col gap-5'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Rigs in action
              </p>
              <h3 className='text-xl font-semibold text-white'>
                Drop your gig shots later
              </h3>
              <p className='text-white/70'>
                Use these slots for BTS, FOH stacks, and stage looks.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {serviceImagePlaceholders.slice(0, 6).map((ph) => (
                <div
                  key={ph.id}
                  className='rounded-xl border border-white/10 bg-white/10 px-4 py-5 flex flex-col gap-3 h-32 justify-between text-white'
                >
                  <span className='font-semibold text-sm'>{ph.label}</span>
                  <span className='text-xs text-white/70 uppercase tracking-[0.2em]'>
                    add image here
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className='w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-7 shadow-2xl shadow-black/30 flex flex-col gap-4'
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-xs uppercase tracking-[0.25em] text-white/70'>
                Where we roll
              </p>
              <h3 className='text-xl font-semibold text-white'>
                Cavite and nearby shows
              </h3>
              <p className='text-white/70 max-w-3xl'>
                {brand.descriptionShort}
              </p>
            </div>
            <div className='flex flex-wrap gap-2 text-sm text-white/80'>
              {eventTypes.map((event) => (
                <span
                  key={event}
                  className='rounded-full border border-white/15 bg-white/5 px-4 py-2'
                >
                  {event}
                </span>
              ))}
            </div>
            <div className='grid sm:grid-cols-3 gap-3 text-sm text-white/75'>
              {['FOH ready', 'Wireless that works', 'Lights that flatter'].map(
                (item) => (
                  <div
                    key={item}
                    className='rounded-lg border border-white/10 bg-white/5 p-3 flex items-center justify-center h-24 text-center'
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </motion.section>
        </div>
      </Background>
    </div>
  )
}
