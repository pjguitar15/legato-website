import FeatureSplit from './components/sections/FeatureSplit'
import Background from './components/ui/Background'
import bg from '@/public/backgrounds/stripes.png'

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center font-sans max-w-3/5 mx-auto'>
      <Background imageUrl={bg}>
        <FeatureSplit
          title='Sound Check, Mic Drop, Party On!'
          description={`Whether it's a wedding, corporate shindig, or your dog's birthday bash (yes, we've done those too!), let's team up and make some noise – the good kind, of course.`}
          imageUrl='/feature-images/feature-1.webp'
        />
      </Background>
    </div>
  )
}
