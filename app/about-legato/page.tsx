import VideoBackground from '../components/ui/VideoBackground'
import TextWindowImage from '../components/ui/TextWindowImage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sound & Lighting Services for Events | About Legato',
  description:
    'About Legato Sounds and Lights. High-quality musical instruments, sound systems and professional lighting services for weddings, corporate events, and celebrations. ',
}

export default function page() {
  const images = [
    { id: 1, img: '/who-we-are/who-we-are-1.jpg' },
    { id: 2, img: '/who-we-are/who-we-are-2.jpg' },
    { id: 3, img: '/who-we-are/who-we-are-3.jpg' },
    { id: 4, img: '/who-we-are/who-we-are-4.jpg' },
  ]

  const images2 = [
    { id: 1, img: '/who-we-are/what-we-do-1.jpg' },
    { id: 2, img: '/who-we-are/what-we-do-2.jpg' },
    { id: 3, img: '/who-we-are/what-we-do-3.jpg' },
    { id: 4, img: '/who-we-are/what-we-do-4.jpg' },
  ]
  return (
    <div>
      <VideoBackground />
      <TextWindowImage
        images={images}
        subtitle='WHO WE ARE'
        title='Driven by passion. Focused on unforgettable events.'
        description='We are a team of passionate young individuals from Trece Martires City, Cavite who believe that great
            events are built on quality sound, thoughtful lighting, and
            attention to detail. Every setup we do is guided by one goal — to
            create an atmosphere where people can fully enjoy the moment,
            connect, and have the best time of their lives. With reliable
            equipment, creative execution, and genuine care for every event, we
            turn ideas into experiences worth remembering.'
      />

      <TextWindowImage
        reverse
        images={images2}
        subtitle='WHAT WE DO'
        title='Creating seamless sound and lighting experiences'
        description='Started in 2023, we have been providing complete sound and lighting solutions designed to elevate live performances, gatherings, and celebrations of all sizes. From clear, powerful audio to carefully planned lighting that enhances the mood, we focus on delivering setups that feel balanced, reliable, and polished.

Our team handles everything from planning and equipment setup to on-site technical support, ensuring smooth transitions and consistent quality throughout the event.'
      />
    </div>
  )
}
