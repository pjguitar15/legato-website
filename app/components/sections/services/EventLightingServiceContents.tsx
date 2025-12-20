import React from 'react'
import SectionIntro from '../../ui/SectionIntro'
import ImageTextSection from '../../ui/ImageTextSection'
import InfoPillars from '../../ui/InfoPillars'
import TextImageButtonCTA from '../../ui/TextImageButtonCTA'

const EventLightingServiceContents = () => {
  return (
    <>
      <SectionIntro
        title='Event Lighting Services'
        description='Click on tiles below to find what you are looking for!'
      />
      <InfoPillars />
      <ImageTextSection
        imgUrl='/backgrounds/about-bg.png'
        title='Why Legato Sounds and Lights'
        description={`Legato Sounds and Lights provides reliable sound and lighting solutions for live bands, churches, corporate events, and community gatherings. We focus on clear audio, clean setups, and smooth event flow so every performance is heard properly and every moment feels right. Our team works closely with clients and venues to ensure each setup fits the space, the program, and the audience.

Maayos ang gamit at maingat ang setup, para siguradong malinaw at pulido ang tunog sa bawat event.`}
      />
      <TextImageButtonCTA />
    </>
  )
}

export default EventLightingServiceContents