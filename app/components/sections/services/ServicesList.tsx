import React from 'react'
import GradientListItem from '../../ui/GradientListItem'

const services = [
  { id: 1, name: 'Sounds and Lights' },
  { id: 2, name: 'Event Lighting' },
  { id: 3, name: 'LED Wall' },
  { id: 4, name: 'Stage Setup' },
  { id: 5, name: 'Audio-Visual Support' },
]

const backgroundMap: Record<number, string> = {
  1: '/backgrounds/service-list-bg.jpg',
  2: '/backgrounds/service-lighting-bg.jpg',
  3: '/backgrounds/service-list-bg.jpg',
  4: '/backgrounds/service-list-bg.jpg',
}

const ServicesList = ({ activeKey, setActiveKey }: { activeKey: number; setActiveKey: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div
      className='
        relative
        h-screen w-full
        border-r
        flex justify-center items-center
        bg-cover bg-center
        transition-[background-image] duration-500
      '
      style={{
        backgroundImage: `url(${backgroundMap[activeKey]})`,
      }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/80' />

      {/* Content */}
      <ul className='relative z-10 flex flex-col gap-4 uppercase font-bold cursor-pointer'>
        {services.map((service) => (
          <GradientListItem
            key={service.id}
            listKey={service.id}
            name={service.name}
            activeKey={activeKey}
            updateKey={setActiveKey}
          />
        ))}
      </ul>
    </div>
  )
}

export default ServicesList
