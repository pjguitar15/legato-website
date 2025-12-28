'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { packages } from '../../../../constants/packages-data'
import PackageModal from './PackageModal'
import PackageCard from './PackageCard'
import { formatSlugToTitle } from '@/utils/helpers'
import { EventTypes } from '@/constants/eventTypes'

const Packages = ({
  category,
  eventType,
}: {
  category?: string
  eventType: EventTypes
}) => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const pathname = usePathname()
  const currentPath = pathname.split('/').filter(Boolean)[1] || ''
  const packageName = currentPath ? formatSlugToTitle(currentPath) : ''

  const schoolFullBandPackages = packages.find(
    (pkg) => pkg.category === (category ?? 'school-full-band'),
  )

  const handleClick = (packageId: number) => {
    setSelectedPackage(packageId)
  }

  return (
    <div className='px-4 sm:px-6 lg:px-0 py-6'>
      {selectedPackage && (
        <PackageModal
          selectedPackage={selectedPackage}
          packages={schoolFullBandPackages?.packages}
          setSelectedPackage={setSelectedPackage}
        />
      )}

      <div className='mb-6 text-center sm:text-left'>
        <h2 className='text-zinc-400 text-sm sm:text-base mb-1'>
          Recommended Packages for
        </h2>
        <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>
          {packageName}
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {schoolFullBandPackages?.packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            name={pkg.name}
            price={pkg.price}
            features={pkg.features}
            id={pkg.id}
            handleClick={handleClick}
            eventType={eventType ?? 'full-band'}
          />
        ))}
      </div>
    </div>
  )
}

export default Packages
