'use client'

import { packages } from '@/constants/packages-data'
import React, { useState } from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import Header from '../full-band-page/Header'
import PackageModal from '../../ui/packages/PackageModal'
import PackageCard from '../../ui/packages/PackageCard'

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
      <Header hideButtons />
      {selectedPackage && (
        <PackageModal
          selectedPackage={selectedPackage}
          packages={schoolFullBandPackages?.packages}
          setSelectedPackage={setSelectedPackage}
        />
      )}
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
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default InclusionsContent