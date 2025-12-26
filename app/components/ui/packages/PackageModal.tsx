'use client'

import { IoMdClose } from 'react-icons/io'
import ScrollSection from '../../layout/ScrollSection'
import { IoArrowBack } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

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
  const equipments = selectedPackageData?.equipment
  const sampleImages = selectedPackageData?.sampleImages ?? []

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 28,
        }}
        className='fixed inset-y-0 right-0 w-4/6 h-full bg-black z-50'
      >
        <ScrollSection>
          <div className='w-full'>
            <button
              className='flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition cursor-pointer'
              onClick={() => setSelectedPackage(null)}
            >
              <IoMdClose />
              Close
            </button>
          </div>
          <div className='w-full mx-auto bg-zinc-950 border border-zinc-800 p-6 flex flex-col gap-6'>
            {/* Header */}
            <div className='flex items-center justify-between'>
              <span className='text-xs uppercase tracking-wide text-zinc-500'>
                Quotation Details
              </span>
            </div>

            {/* Title */}
            <div className='border-b border-zinc-800 pb-4'>
              <h3 className='text-lg font-semibold text-white'>
                Equipment & Inclusions
              </h3>
              <p className='text-xs text-zinc-400 mt-1'>
                Below is the list of equipment included in this package.
              </p>
            </div>

            {/* Equipment List */}
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

            {/* Footer note */}
            <div className='border-t border-zinc-800 pt-4 text-xs text-zinc-500'>
              <p>
                *Equipment quantity and configuration may vary depending on
                venue size and event requirements.
              </p>
            </div>
          </div>

          {sampleImages.length > 0 && (
            <div className='w-full mt-10'>
              {/* Section header */}
              <div className='mb-4'>
                <h4 className='text-sm font-semibold text-white'>
                  Sample Setup Photos
                </h4>
                <p className='text-xs text-zinc-400'>
                  Actual event setups using this package.
                </p>
              </div>

              {/* Image grid */}
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
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
    </AnimatePresence>
  )
}

export default PackageModal
