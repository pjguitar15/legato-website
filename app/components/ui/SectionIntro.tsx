const SectionIntro = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <section className='w-full'>
      <div className='flex flex-col gap-4 items-center text-center max-w-3/4 mx-auto'>
        <h6 className='text-lg lg:text-3xl font-semibold'>{title}</h6>
        <p className='text-xs lg:text-sm leading-6 text-zinc-400'>
          {description}
        </p>
      </div>
    </section>
  )
}

export default SectionIntro
