import DefaultPackages from '@/app/components/pages/DefaultPackages'
import Header from '@/app/components/pages/full-band-page/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Packages',
  description:
    'High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. Packages.',
}

const page = () => {
  return (
    <div>
      <Header hideButtons title='Our Packages' bgType='simple-corporate' />
      <div className='bg-zinc-950 px-16 py-16'>
        <DefaultPackages />
      </div>
    </div>
  )
}

export default page