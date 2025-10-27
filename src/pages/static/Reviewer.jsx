import React from 'react'
import { SubSlider } from '../Components/SubSlider'
import { ReviewerGuidlines } from '../Components/ReviewerGuidlines'

export const Reviewer = () => {
  return (
    <div>
      <SubSlider
                   data={{
                     backgroundImage: "/assets/img/banner/guidelines.jpg",
                     title: "Clear guidelines lead to stronger research",
                     highlight: "and impactful publications.",
                   }}
                 />
    <ReviewerGuidlines />
    </div>
  )
}
