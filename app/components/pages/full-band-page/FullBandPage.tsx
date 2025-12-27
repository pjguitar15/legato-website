import HeroWithImage from '../../ui/HeroWithImage'
import Header from './Header'

const FullBandPage = () => {
  return (
    <div className='w-full'>
      <Header
        title='WE CARE ABOUT SOUND OF PERFORMERS'
        bgType='full-band-setup'
      />
      <HeroWithImage
        subtitle='WHY BOOK OUR FULL BAND'
        title='Quality Equipments'
        description='We value quality sound for each musicians. For that, trusted brands like RCF, Allen&Heath, QSC, etc. are the go-to equipment used for each full band events at Legato Sounds and Lights.'
        imageSrc='/backgrounds/full-band-background.jpg'
        imageAlt='Professional event setup'
      />
    </div>
  )
}

export default FullBandPage