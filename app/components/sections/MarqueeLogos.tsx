'use client'

import React, { useState } from 'react'

// changes
const logos = [
  { id: 1, name: 'RCF', src: 'sections/about/logos/rcf.png' },
  { id: 2, name: 'QSC', src: 'sections/about/logos/qsc.png' },
  { id: 3, name: 'allenheath', src: 'sections/about/logos/allenheath.png' },
  { id: 4, name: 'laney', src: 'sections/about/logos/laney.png' },
  { id: 5, name: 'pearl', src: 'sections/about/logos/pearl.png' },
]

const MarqueeLogos: React.FC = () => {

  return (
    <main className='overflow-x-hidden'>
      <article
        className={`mx-auto flex max-w-[100vw] gap-[var(--gap)] px-4 flex-col`}
      >
        <div className={`marquee`}>
          <div className='marquee__group'>
            {logos.map((logo) => (
              <div
                key={logo.id}
                className='flex items-center justify-center rounded-md p-4'
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className='h-16 w-28 object-contain'
                />
              </div>
            ))}
          </div>

          <div aria-hidden='true' className='marquee__group'>
            {logos.map((logo) => (
              <div
                key={`${logo.id}-clone-1`}
                className='flex items-center justify-center rounded-md p-4'
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className='h-16 w-28 object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}

export default MarqueeLogos
