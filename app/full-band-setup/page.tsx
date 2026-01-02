import FullBandPage from '../components/pages/full-band-page/FullBandPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Full Band Setup',
  description:
    'We also offer Full Band Setup. High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

const page = () => {
  return (
    <>
      <FullBandPage />
    </>
  )
}

export default page
