import AboutUs from '../components/sections/about/AboutUs'
import HeaderCards from '../components/sections/about/HeaderCards'
import FeatureSplit from '../components/sections/FeatureSplit'
import Background from '../components/ui/Background'
import bg from '@/public/backgrounds/about-bg.png'
import stripes from '@/public/backgrounds/stripes.png'
import MarqueeLogos from '../components/sections/MarqueeLogos'

export default function About() {
  return (
    <div className='flex flex-col justify-center font-sans'>
      <div className='relative pt-80 pb-24'>
        <Background imageUrl={bg}>
          <HeaderCards />
        </Background>
      </div>
      <div className='relative'>
        <Background imageUrl={stripes}>
          <AboutUs />
        </Background>
      </div>
      <MarqueeLogos />
    </div>
  )
}
