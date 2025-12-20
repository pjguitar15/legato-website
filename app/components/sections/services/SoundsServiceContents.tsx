import React from 'react'
import SectionIntro from '../../ui/SectionIntro'
import ImageTextSection from '../../ui/ImageTextSection'
import InfoPillars from '../../ui/InfoPillars'
import TextImageButtonCTA from '../../ui/TextImageButtonCTA'
import GalleryCards from '../../ui/GalleryCards'

const SoundsServiceContents = () => {
  return (
    <>
      <SectionIntro />
      <GalleryCards />
      <ImageTextSection />
      <GalleryCards />
      <InfoPillars />
      <TextImageButtonCTA />
    </>
  )
}

export default SoundsServiceContents