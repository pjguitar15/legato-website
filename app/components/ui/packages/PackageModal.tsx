'use client'

import { IoMdClose } from 'react-icons/io'
import ScrollSection from '../../layout/ScrollSection'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

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

  const equipments = selectedPackageData?.equipment ?? []
  const sampleImages = selectedPackageData?.sampleImages ?? []

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPackage(null)
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [setSelectedPackage])

  return (
    /* Backdrop */
    <motion.div
      className='fixed inset-0 z-50 bg-black/60 overflow-y-scroll scrollbar-modern'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedPackage(null)}
    >
      {/* Modal panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className='absolute right-0 inset-y-0 w-4/6 h-full bg-zinc-900'
        onClick={(e) => e.stopPropagation()} // 👈 IMPORTANT
      >
        <ScrollSection>
          <div className='w-full'>
            <button
              className='flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition cursor-pointer'
              onClick={() => setSelectedPackage(null)}
            >
              <IoMdClose />
              Close
            </button>
          </div>

          <div className='w-full mx-auto bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-6'>
            <div className='flex items-center justify-between'>
              <span className='text-xs uppercase tracking-wide text-zinc-500'>
                Quotation Details
              </span>
            </div>

            <div className='border-b border-zinc-800 pb-4'>
              <h3 className='text-lg font-semibold text-white'>
                Equipment & Inclusions
              </h3>
              <p className='text-xs text-zinc-400 mt-1'>
                Below is the list of equipment included in this package.
              </p>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm'>
              {equipments.map((equipment: string, index: number) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-zinc-200'
                >
                  <span className='mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500 shrink-0' />
                  <span>{equipment}</span>
                </li>
              ))}
            </ul>

            <div className='border-t border-zinc-800 pt-4 text-xs text-zinc-500'>
              <p>
                *Equipment quantity and configuration may vary depending on
                venue size and event requirements.
              </p>
            </div>
          </div>

          {sampleImages.length > 0 && (
            <div className='w-full mt-10'>
              <div className='mb-4'>
                <h4 className='text-sm font-semibold text-white'>
                  Sample Setup Photos
                </h4>
                <p className='text-xs text-zinc-400'>
                  Actual event setups using this package.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                {sampleImages.map((src: string, index: number) => (
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
