'use client'

import { FaFire } from 'react-icons/fa'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { packages } from '../../../../constants/packages-data'
import { useState } from 'react'
import PackageModal from './PackageModal'

const schoolFullBandPackages = packages.find(
  (pkg) => pkg.category === 'school-full-band',
)

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

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
      <h2 className='text-2xl font-bold mb-4'>Recommended Packages</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {schoolFullBandPackages?.packages.map((pkg) => (
          <div
            key={pkg.id}
            className='border border-zinc-700 bg-zinc-950 flex flex-col'
          >
            <div className='flex flex-col gap-4 text-center bg-linear-to-r from-dark-900 to-zinc-900 border border-zinc-800 py-10'>
              <div className='flex flex-col items-center mx-auto gap-2'>
                <FaFire
                  className={
                    pkg.id === 1
                      ? 'text-yellow-700'
                      : pkg.id === 2
                      ? 'text-orange-600'
                      : 'text-red-500'
                  }
                />
                <h6 className='text-md font-medium'>{pkg.name}</h6>
              </div>
              <div>
                <h3 className='text-3xl font-bold'>P{pkg.price}</h3>
                <p className='text-xs'>/event</p>
              </div>
            </div>
            <div className='px-12 py-6 flex flex-col gap-5 grow'>
              <ul className='flex flex-col gap-2'>
                {pkg.features.map((feature, index) => (
                  <li key={index} className='flex items-start gap-2 text-sm'>
                    <IoCheckmarkOutline
                      size={16}
                      className='text-green-500 shrink-0 mt-0.5'
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className='flex justify-center mt-auto pt-12'>
                <button
                  onClick={() => handleClick(pkg.id)}
                  className='border border-zinc-600 hover:border-white text-zinc-400 hover:text-white transition duration-300 px-4 py-2 text-sm cursor-pointer'
                >
                  Click to view inclusion
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Packages
