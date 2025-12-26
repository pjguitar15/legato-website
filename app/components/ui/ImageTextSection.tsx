const ImageTextSection = ({
  reverse,
  imgUrl,
  title,
  description,
}: {
  reverse?: boolean
  imgUrl: string
  title: string
  description: string
}) => {
  return (
    <div
      className={
        reverse
          ? 'flex flex-col lg:flex-row-reverse border border-zinc-700'
          : 'flex flex-col lg:flex-row border border-zinc-700'
      }
    >
      <div className='flex-1 basis-1/2 h-60'>
        <img className='w-full h-full object-cover' src={imgUrl} alt={title} />
      </div>
      <div className='flex-1 px-10 py-5 flex flex-col items-center justify-center gap-5 bg-zinc-900 basis-1/2'>
        <div className='w-full'>
          <h6 className='text-start text-lg font-semibold'>{title}</h6>
        </div>
        <p className='text-sm leading-6 text-justify text-zinc-300'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ImageTextSection
