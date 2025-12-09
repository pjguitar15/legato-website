import Image from 'next/image'
import React from 'react'
import philson from '@/public/sections/about/philson.png'

const AboutUs = () => {
  return (
    <div className='w-3/5 mx-auto py-12 flex flex-col gap-12'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-bold'>About Us</h2>
        <p className='leading-7'>
          Welcome to Legato Sounds and Lights, your premier destination for
          top-notch sound and lighting services in Cavite and beyond. Founded by
          Philson Josol and Philcob Josol, Legato Sounds and Lights is committed
          to setting the standard for excellence in event production, providing
          unforgettable experiences for a wide range of occasions.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold'>Owned By</h2>
        <div className='grid grid-cols-4 gap-3'>
          <Image
            className='bg-[#121212] w-full'
            src={philson}
            width={400}
            height={400}
            alt='philson'
          />
          <Image
            className='bg-[#121212] w-full'
            src={philson}
            width={400}
            height={400}
            alt='philson'
          />
          <Image
            className='bg-[#121212] w-full'
            src={philson}
            width={400}
            height={400}
            alt='philson'
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
