import Image, { StaticImageData } from 'next/image'

const Background = ({
  children,
  imageUrl,
}: {
  children: React.ReactNode
  imageUrl: StaticImageData
}) => {
  return (
    <>
      <Image
        alt='Background'
        src={imageUrl}
        placeholder='blur'
        quality={100}
        fill
        sizes='100vw'
        className='fixed inset-0 -z-10 object-cover object-bottom'
      />
      {children}
    </>
  )
}

export default Background
