import Image from "next/image"

const FeatureSplit = ({
  className,
  title,
  description,
  imageUrl,
}: {
  className?: string
  title: string
  description: string
  imageUrl: string
}) => {
  return (
    <section className={`${className} flex items-center justify-between gap-20`}>
      <div className='flex flex-col gap-12 w-1/2'>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="w-1/2">
        <Image className="w-full" width={1000} height={1000} src={imageUrl} alt='section image' />
      </div>
    </section>
  )
}

export default FeatureSplit