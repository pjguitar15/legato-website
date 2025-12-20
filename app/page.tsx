'use client'

import ServicesList from './components/sections/services/ServicesList'
import ServiceImages from './components/sections/services/ServiceContent'
import { useState } from 'react'

export default function Home() {
  const [activeKey, setActiveKey] = useState<number>(1)
  return (
    <div className='flex'>
      <div className='sm:w-1/2 xl:w-2/6'>
        <ServicesList activeKey={activeKey} setActiveKey={setActiveKey} />
      </div>
      <div className='sm:w-1/2 xl:w-4/6'>
        <ServiceImages activeKey={activeKey} />
      </div>
    </div>
  )
}
