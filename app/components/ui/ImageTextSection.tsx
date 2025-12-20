import React from 'react'

const ImageTextSection = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div
      className={
        reverse
          ? 'flex flex-row-reverse border border-zinc-700'
          : 'flex border border-zinc-700'
      }
    >
      <div className='flex-1 basis-1/2'>
        <img
          className='w-full h-full object-cover'
          src='/backgrounds/about-bg.png'
          alt=''
        />
      </div>
      <div className='flex-1 px-10 py-5 flex flex-col items-center justify-center gap-5 bg-zinc-900 basis-1/2'>
        <div className='w-full'>
          <h6 className='text-start text-lg font-semibold'>
            Why Legato Sounds and Lights?
          </h6>
        </div>
        <p className='text-sm leading-6'>
          Thanks to its rock-solid reliability, LumenRadio’s CRMX technology for
          Wireless DMX is the technology of choice for wireless lighting control
          in the entertainment lighting industry. It outperforms other wireless
          technologies, particularly in the most challenging conditions, so
          lighting professionals can rely on it to deliver faultless
        </p>
      </div>
    </div>
  )
}

export default ImageTextSection
