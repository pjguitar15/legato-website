const TextImageButtonCTA = () => {
  return (
    <section className='w-full py-6 bg-linear-to-r from-dark-900 to-zinc-900 border border-zinc-800'>
      <div className='max-w-3/4 mx-auto flex justify-between items-center gap-3 '>
        <div className='flex items-center'>
          <div className='w-50'>
            <img
              className='w-full h-full'
              src='/equipment/rcf-745a.png'
              alt=''
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h6 className='text-2xl font-semibold'>Book Your Event Now!</h6>
            <p className='text-sm leading-6 w-auto max-w-9/10 text-zinc-300'>
              Get in touch with us today to book your sounds and lighting needs
              at your own special event.
            </p>
          </div>
        </div>
        <button className='px-5 py-3 w-35 font-semibold bg-linear-to-r from-green-600 to-cyan-600 cursor-pointer hover:from-green-500 hover:to-cyan-500 transition-colors text-white'>
          Book Now
        </button>
      </div>
    </section>
  )
}

export default TextImageButtonCTA
