import React from 'react'
import { SubSlider } from '../Components/SubSlider'
import { EditorGuidlines  } from '../Components/EditorGuidlines'

export const Editor = () => {
  return (
    <div>
      {/* <SubSlider /> */}
       <SubSlider
                    data={{
                      backgroundImage: "/assets/img/banner/guidelines.jpg",
                      title: "Clear guidelines lead to stronger research",
                      highlight: "and impactful publications.",
                    }}
                  />
    <EditorGuidlines />
    </div>
  )
}
