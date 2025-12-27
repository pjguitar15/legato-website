'use client'

import { packages } from '@/constants/packages-data'
import { useState } from 'react'
import Header from '../full-band-page/Header'
import PackageModal from '../../ui/packages/PackageModal'
import PackageCard from '../../ui/packages/PackageCard'
import { AnimatePresence } from 'framer-motion'

const InclusionsContent = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const schoolFullBandPackages = packages.find(
    (pkg) => pkg.category === 'restobar-band-setup',
  )

  const handleClick = (packageId: number) => {
    setSelectedPackage(packageId)
  }
  return (
    <>
      <Header hideButtons title='FULL BAND PACKAGES' bgType='full-band-setup' />
      <AnimatePresence mode='wait'>
        {selectedPackage && (
          <PackageModal
            selectedPackage={selectedPackage}
            packages={schoolFullBandPackages?.packages}
            setSelectedPackage={setSelectedPackage}
          />
        )}
      </AnimatePresence>

      <div className='bg-zinc-950 text-white px-16 py-18'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {schoolFullBandPackages?.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              id={pkg.id}
              handleClick={handleClick}
              eventType='full-band'
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default InclusionsContent
