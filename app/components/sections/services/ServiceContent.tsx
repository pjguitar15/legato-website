'use client'

import EventLightingServiceContents from './EventLightingServiceContents'
import SoundsServiceContents from './SoundsServiceContents'

const ServiceImages = ({activeKey}: {activeKey: number}) => {
  return (
    <div
      className='
        scrollbar-modern
        p-12 flex flex-col gap-3 items-center w-full
        max-h-screen overflow-y-auto overflow-x-hidden
      '
    >
      {activeKey === 1 && <SoundsServiceContents />}
      {activeKey === 2 && <EventLightingServiceContents />}
    </div>
  )
}

export default ServiceImages
