import DefaultPackages from '@/app/components/pages/DefaultPackages'
import Header from '@/app/components/pages/full-band-page/Header'

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