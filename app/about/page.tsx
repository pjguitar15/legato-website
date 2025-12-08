import HeaderCards from "../components/sections/about/HeaderCards";
import FeatureSplit from "../components/sections/FeatureSplit";
import Background from "../components/ui/Background";
import bg from '@/public/backgrounds/about-bg.png'

export default function About() {
  return (
    <div className='flex justify-center font-sans pt-80 pb-24 relative'>
      <Background imageUrl={bg}>
        <HeaderCards />
      </Background>
    </div>
  )
}
