import Image from 'next/image'
import legato from '@/public/legato-logo.png'

export default function BrandLogo() {
  return (
    <div className='flex shrink-0 items-center'>
      <Image src={legato} width={100} height={100} alt='Legato Logo' />
    </div>
  )
}
