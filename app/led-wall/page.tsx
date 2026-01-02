import { Metadata } from 'next'
import FullImageWithTextOverlay from '../components/ui/FullImageWithTextOverlay'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | LED Wall',
  description:
    'We also offer LED Wall Rental Services. High-quality sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

export default function page() {
  return (
    <main>
      <FullImageWithTextOverlay />
    </main>
  )
}
