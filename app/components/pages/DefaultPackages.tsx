'use client'

import { packages } from '@/constants/packages-data'
import React, { useState } from 'react'
import PackageModal from '../ui/packages/PackageModal'
import PackageCard from '../ui/packages/PackageCard'

const DefaultPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const schoolFullBandPackages = packages.find(
    (pkg) => pkg.category === 'default-packages',
  )

  const handleClick = (packageId: number) => {
    setSelectedPackage(packageId)
  }

  return (
    <div className='text-white'>
      {selectedPackage && (
        <PackageModal
          selectedPackage={selectedPackage}
          packages={schoolFullBandPackages?.packages}
          setSelectedPackage={setSelectedPackage}
        />
      )}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {schoolFullBandPackages?.packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            name={pkg.name}
            price={pkg.price}
            features={pkg.features}
            id={pkg.id}
            handleClick={handleClick}
            eventType={'basic'}
          />
        ))}
      </div>
    </div>
  )
}

export default DefaultPackages