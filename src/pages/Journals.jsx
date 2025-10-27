import React from 'react'
import { SubSlider } from './Components/SubSlider'
import { OurJournals } from './Components/OurJournals'

export const Journals = () => {
  return (
    <div style={{ backgroundColor: "#E5F2F8" }}>
      <SubSlider
        data={{
          backgroundImage: "/assets/img/banner/3d-rendering-pen-ai-generated.jpg",
          title: "Journals are not just pages of research — they are bridges",
          highlight: "that connect ideas, people, and progress",
          subtitle: "Step into the world of research — explore our journals",
          paragraph:
            "Journals serve as a vital medium for researchers, authors, and students to share their knowledge with the world. They preserve discoveries, inspire innovation, and allow ideas to be tested, discussed, and expanded. Through journals, knowledge grows collectively, ensuring that every contribution — big or small — helps shape the future of learning and research.",
        }}
      />

      <OurJournals />

    </div>
  )
}
