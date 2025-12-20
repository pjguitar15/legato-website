import { GrFreebsd, GrGoogleWallet } from "react-icons/gr"

const arr = [
  {
    title: 'Entertainment Lighting',
    description:
      'It all started within the entertainment industry with professional lighting. After we successfully enabled the lighting at Coachella, one of the world’s largest festivals, to be controlled wirelessly without interference, our wireless technology effectively became an industry standard.',
    bgColor: 'bg-zinc-900',
    icon: <GrGoogleWallet />,
  },
  {
    title: 'Building Automation',
    description:
      'It all started within the entertainment industry with professional lighting. After we successfully enabled the lighting at Coachella, one of the world’s largest festivals, to be controlled wirelessly without interference, our wireless technology effectively became an industry standard.',
    bgColor: 'bg-slate-900',
    icon: <GrGoogleWallet />,
  },
  {
    title: 'Today',
    description:
      'It all started within the entertainment industry with professional lighting. After we successfully enabled the lighting at Coachella, one of the world’s largest festivals, to be controlled wirelessly without interference, our wireless technology effectively became an industry standard.',
    bgColor: 'bg-dark-900',
    icon: <GrGoogleWallet />,
  },
]

const InfoPillars = () => {
  return (
    <section className='w-full flex'>
      {arr.map((item, index) => (
          <div key={index} className={`flex-1 border p-12 flex flex-col gap-3 ${item.bgColor}`}>
            <div className='text-4xl text-white'>{item.icon}</div>
            <h6 className='text-lg font-medium uppercase'>{item.title}</h6>
            <p className='text-sm leading-7'>
              It all started within the entertainment industry with professional
              lighting. After we successfully enabled the lighting at Coachella,
              one of the world’s largest festivals, to be controlled wirelessly
              without interference, our wireless technology effectively became
              an industry standard.
            </p>
          </div>
        ))}
    </section>
  )
}

export default InfoPillars