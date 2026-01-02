import { Metadata } from 'next'
import ContactPage from '../components/pages/contact/ContactPage'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | Contact',
  description:
    'You contact us by filling up this form for you to be able to rent High-quality musical instruments, sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

export default function page() {
  return (
    <div>
      <ContactPage />
    </div>
  )
}
