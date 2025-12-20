import React from 'react'

type Props = {
  open: boolean
  onToggle: () => void
  controlsId: string
}

export default function MobileMenuButton({
  open,
  onToggle,
  controlsId,
}: Props) {
  return (
    <button
      type='button'
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controlsId}
      className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500'
    >
      <span className='absolute -inset-0.5' />
      <span className='sr-only'>Open main menu</span>

      {!open ? (
        // Hamburger
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          aria-hidden='true'
          className='size-6'
        >
          <path
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : (
        // X
        <svg
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          aria-hidden='true'
          className='size-6'
        >
          <path
            d='M6 18 18 6M6 6l12 12'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  )
}
