import React from 'react'
import { imagePaths } from './imagePaths'

import ImageSlider from './imageSlider/ImageSlider'
import HeroText from './heroText/HeroText'
 
function HeroComponent() {
  return (
    <div id='/'>
       <ImageSlider slides={imagePaths}/>
       <HeroText />
    </div>
  )
}

export default HeroComponent