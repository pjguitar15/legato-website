'use client'

import { IoMdClose } from 'react-icons/io'
import ScrollSection from '../../layout/ScrollSection'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'

const PackageModal = ({
  selectedPackage,
  packages,
  setSelectedPackage,
}: {
  selectedPackage: number
  packages: any
  setSelectedPackage: (id: number | null) => void
}) => {
  const selectedPackageData = packages?.find(
    (pkg: any) => pkg.id === selectedPackage,
  )

  const equipments: string[] = selectedPackageData?.equipment ?? []
  const sampleImages: string[] = selectedPackageData?.sampleImages ?? []

  /* Group equipment by category */
  const groupedEquipment = equipments.reduce(
    (acc: Record<string, string[]>, item) => {
      const [rawCategory, ...rest] = item.split(':')
      const category = rawCategory.trim()
      const value = rest.join(':').trim()

      if (!acc[category]) acc[category] = []
      acc[category].push(value)

      return acc
    },
    {},
  )

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPackage(null)
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [setSelectedPackage])

  return (
    <motion.div
      className='fixed inset-0 z-50 bg-black/60 overflow-y-auto scrollbar-modern'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedPackage(null)}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className='absolute right-0 inset-y-0
          w-full sm:w-5/6 lg:w-4/6
          h-full bg-zinc-900'
        onClick={(e) => e.stopPropagation()}
      >
        <ScrollSection>
          {/* Sticky header (mobile-friendly) */}
          <div className='sticky top-0 left z-10 backdrop-blur border-zinc-800 w-full'>
            <button
              className='flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition cursor-pointer'
              onClick={() => setSelectedPackage(null)}
            >
              <IoMdClose />
              Close
            </button>
          </div>

          {/* QUOTATION DETAILS */}
          <div className='w-full bg-zinc-950 border border-zinc-800 p-4 sm:p-6 flex flex-col gap-6'>
            <span className='text-xs uppercase tracking-wide text-zinc-500'>
              Quotation Details
            </span>

            {/* HEADER + CTA */}
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-zinc-800 pb-4 gap-4'>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  Equipment & Inclusions
                </h3>
                <p className='text-xs text-zinc-400 mt-1'>
                  Below is the list of equipment included in this package.
                </p>
              </div>

              <Link
                href='/contact'
                className='w-full sm:w-auto
        inline-flex items-center justify-center
        px-6 py-3 lg:px-8 lg:py-4
        bg-linear-to-r from-emerald-600 to-cyan-600
        text-white font-semibold tracking-wide
        hover:scale-105 hover:shadow-lg
        transition-all duration-300
        text-sm lg:text-base'
              >
                Request a Quote
              </Link>
            </div>

            {/* GROUPED EQUIPMENT */}
            <div className='flex flex-col gap-6'>
              {Object.entries(groupedEquipment).map(([category, items]) => (
                <div key={category}>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    {category}
                  </h4>

                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm'>
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-zinc-200'
                      >
                        <span className='mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='border-t border-zinc-800 pt-4 text-xs text-zinc-500'>
              *Equipment quantity and configuration may vary depending on venue
              size and event requirements.
            </div>
          </div>

          {/* SAMPLE IMAGES */}
          {sampleImages.length > 0 && (
            <div className='mt-10'>
              <h4 className='text-sm font-semibold text-white mb-1'>
                Sample Setup Photos
              </h4>
              <p className='text-xs text-zinc-400 mb-4'>
                Actual event setups using this package.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {sampleImages.map((src, index) => (
                  <div
                    key={index}
                    className='aspect-video overflow-hidden border border-zinc-800 bg-zinc-900'
                  >
                    <img
                      src={src}
                      alt={`Sample setup ${index + 1}`}
                      className='w-full h-full object-cover hover:scale-105 transition duration-300'
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollSection>
      </motion.div>
    </motion.div>
  )
}

export default PackageModal
