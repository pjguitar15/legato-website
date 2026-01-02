import InclusionsContent from '@/app/components/pages/inclusions/InclusionsContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Inclusions Full Band Setup',
  description:
    'Here are the inclusions for full band setup. High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

const page = () => {
  return (
    <div>
      <InclusionsContent />
    </div>
  )
}

export default page
