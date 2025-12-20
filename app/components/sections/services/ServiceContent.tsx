'use client'

import EventLightingServiceContents from './EventLightingServiceContents'
import SoundsServiceContents from './SoundsServiceContents'

const ServicePageArea = ({ activeKey }: { activeKey: number }) => {
  return (
    <div
      className='
        scrollbar-modern px-16
        py-12 flex flex-col gap-7 items-center w-full
        max-h-screen overflow-y-auto overflow-x-hidden
      '
    >
      {activeKey === 1 && <SoundsServiceContents />}
      {activeKey === 2 && <EventLightingServiceContents />}
    </div>
  )
}

export default ServicePageArea
