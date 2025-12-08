import React from 'react'

const CardWithButton = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='px-6 py-8 bg-stone-950 bg-opacity-50'>
        <div className='bg-opacity-100'>
          <h6 className='text-xl'>WE CARE ABOUT</h6>
          <h6 className='text-[#B83838] text-3xl font-bold'>GOOD AUDIO</h6>
          <p className='text-sm'>AND BRING OUT THE BEST EVENTS</p>
        </div>
      </div>
      <div className='p-6 bg-[#440000]'>
        <p className='text-sm'>FIND OUT MORE</p>
      </div>
    </div>
  )
}

export default CardWithButton