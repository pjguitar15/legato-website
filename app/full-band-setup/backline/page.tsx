import Backline from '@/app/components/pages/full-band-page/Backline'
import Header from '@/app/components/pages/full-band-page/Header'

export default function page() {
  return (
    <main className='w-full'>
      <Header title='ONLY NEED BACKLINE? WE GOT YOU.' hideButtons bgType='backline' />
      <Backline />
    </main>
  )
}
