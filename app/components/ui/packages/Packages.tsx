'use client'

import { FaFire } from 'react-icons/fa'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { packages } from '../../../../constants/packages-data'
import { useState } from 'react'
import PackageModal from './PackageModal'
import { usePathname } from 'next/navigation'
import { formatSlugToTitle } from '@/utils/helpers'
import PackageCard from './PackageCard'
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
    <div>
      {selectedPackage && (
        <PackageModal
          selectedPackage={selectedPackage}
          packages={schoolFullBandPackages?.packages}
          setSelectedPackage={setSelectedPackage}
        />
      )}
      <div className='mb-6'>
        <h2 className='text-zinc-400 mb-1'>Recommended Packages for</h2>
        <p className='text-2xl font-semibold'>{packageName}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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
