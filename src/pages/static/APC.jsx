import React from 'react'
import { APCGuidlines } from '../Components/APCGuidlines'
import { SubSlider } from '../Components/SubSlider'

export const APC = () => {
  return (
    <div>
      
         <SubSlider
               data={{
                 backgroundImage: "/assets/img/banner/guidelines.jpg",
                 title: "Clear guidelines lead to stronger research",
                 highlight: "and impactful publications.",
               }}
             />
        <APCGuidlines />
    </div>
  )
}
