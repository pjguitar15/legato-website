import Backline from '@/app/components/pages/full-band-page/Backline'
import Header from '@/app/components/pages/full-band-page/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Backline Rental',
  description:
    'We also offer backline rental. High-quality musical instruments, sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

export default function page() {
  return (
    <main className='w-full'>
      <Header title='ONLY NEED BACKLINE? WE GOT YOU.' hideButtons bgType='backline' />
      <Backline />
    </main>
  )
}
