'use client'
import Image from 'next/image'
import legato from '@/public/legato-logo.png'
import { useRouter } from 'next/navigation'

export default function BrandLogo() {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/')}
      className='flex shrink-0 items-center cursor-pointer'
    >
      <Image src={legato} width={130} height={130} alt='Legato Logo' />
    </div>
  )
}
