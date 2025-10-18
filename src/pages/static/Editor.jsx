import React from 'react'
import { SubSlider } from '../Components/SubSlider'
import { EditorGuidlines  } from '../Components/EditorGuidlines'

export const Editor = () => {
  return (
    <div>
      {/* <SubSlider /> */}
      <section className="hero-section text-center text-dark">
  <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
    <h1 className="hed-title" style={{ color: "#143E6A" }}>
      Clear guidelines lead to stronger research and <br />
      <span style={{ color: "#2879D0" }} className="highlight">
        impactful publications.
      </span>
    </h1>
  </div>
</section>
    <EditorGuidlines />
    </div>
  )
}
