import React from 'react'
import { SubSlider } from '../Components/SubSlider';
import { AuthorGuidlines } from '../Components/AuthorGuidlines'


export const Author = () => {
  return (
    <div>
         <SubSlider
                      data={{
                        backgroundImage: "/assets/img/banner/guidelines.jpg",
                        title: "Clear guidelines lead to stronger research",
                        highlight: "and impactful publications.",
                      }}
                    />
        
        <AuthorGuidlines />
    </div>
    
  )
}
