import React from 'react'
import CardWithButton from './CardWithButton'
import img1 from '@/public/sections/about/about-img-1.png'
import img2 from '@/public/sections/about/about-img-2.png'
import Image from 'next/image'

const cardItems = [
  {
    component: <CardWithButton />,
  },
  {
    component: (
      <Image
        alt='card image'
        className='object-cover h-full'
        height={600}
        width={600}
        src={img1}
      />
    ),
  },
  {
    component: (
      <Image
        alt='card image'
        className='w-full object-cover h-full'
        height={600}
        width={600}
        src={img2}
      />
    ),
  },
]

const HeaderCards = () => {
  return (
    <div className='w-3/5 mx-auto grid grid-cols-3 gap-6 auto-rows-fr'>
      {cardItems.map((item, index) => (
        <div key={index}>{item.component}</div>
      ))}
    </div>
  )
}

export default HeaderCards