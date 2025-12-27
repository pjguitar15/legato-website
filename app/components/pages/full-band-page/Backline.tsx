import ImageTextSection from "../../ui/ImageTextSection"

const Backline = () => {
  const backlineEquipment = [
    {
      title: 'Pearl Export Drum Kit',
      imgUrl: '/backline/pearl-drums.jpg',
      description:
        'Our Pearl Export drum kit is a reliable and stage-ready backline option, delivering strong low-end punch and clear attack for live band performances. Known for its durability and consistent tone, this kit is ideal for gigs, corporate events, and full band setups where dependable drum sound is essential.',
    },
    {
      title: 'Laney LX120R Twin Guitar Amplifiers',
      imgUrl: '/backline/laney-amp.jpg',
      description:
        'We provide dual Laney LX120R Twin guitar amplifiers designed for live performance, offering powerful clean headroom and versatile drive tones. These amps ensure excellent projection on stage, making them suitable for bands that require solid, professional-grade guitar amplification.',
    },
    {
      title: 'GK MB115 Bass Amplifier',
      imgUrl: '/backline/gk-bass-amp.jpg',
      description:
        'The GK MB115 bass amplifier delivers a tight, punchy low-end that anchors the band’s overall sound. Its reliable performance and balanced output make it an ideal choice for live events requiring clear and controlled bass presence.',
    },
  ]


  return (
    <div className='bg-zinc-950 text-white w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-3 py-8'>
          {backlineEquipment.map((event, index) => (
            <ImageTextSection
              key={index}
              imgUrl={event.imgUrl}
              title={event.title}
              description={event.description}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Backline