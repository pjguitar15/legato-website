import { GrFreebsd, GrGoogleWallet } from "react-icons/gr"

const arr = [
  {
    title: 'Live Sound Systems',
    description:
      'It all started with delivering clear and powerful sound for live performances. From small school programs to full band productions, we built reliable sound systems that ensure vocals, instruments, and every detail are heard with clarity, balance, and impact across any venue.',
    bgColor: 'bg-zinc-900',
    icon: <GrGoogleWallet />,
  },
  {
    title: 'Stage Lighting',
    description:
      'Lighting evolved beyond visibility into creating mood and energy on stage. By combining well-balanced front lights, dynamic backlights, and controlled effects, we enhance performances and transform ordinary stages into engaging visual experiences for every audience.',
    bgColor: 'bg-slate-900',
    icon: <GrGoogleWallet />,
  },
  {
    title: 'Today',
    description:
      'Today, we provide complete sounds and lights solutions for events of all sizes. With professional equipment, experienced technicians, and careful planning, we deliver seamless setups that support performers, impress audiences, and elevate every event experience.',
    bgColor: 'bg-dark-900',
    icon: <GrGoogleWallet />,
  },
]


const InfoPillars = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-3'>
      {arr.map((item, index) => (
        <div
          key={index}
          className={`border p-12 flex flex-col gap-3 ${item.bgColor}`}
        >
          <div className='text-4xl text-white'>{item.icon}</div>
          <h6 className='text-lg font-medium uppercase'>{item.title}</h6>
          <p className='text-sm leading-7'>{item.description}</p>
        </div>
      ))}
    </section>
  )
}

export default InfoPillars