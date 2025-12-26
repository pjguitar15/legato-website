const SectionIntro = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <section className='w-full bg-zinc-950'>
      <div className='flex flex-col gap-3 items-center text-center max-w-3/4 mx-auto'>
        <h6 className='text-lg lg:text-3xl font-semibold text-white'>
          {title}
        </h6>
        <p className='text-xs lg:text-sm leading-6 text-zinc-400 max-w-140'>
          {description}
        </p>
      </div>
    </section>
  )
}

export default SectionIntro
