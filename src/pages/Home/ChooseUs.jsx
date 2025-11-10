import React from "react";

const ChooseUs = () => {
  return (
    <section className="choose-section">
  <h2 className="hed-title">
    Why to <span className="highlight">choose us</span> ?
  </h2>
  <p className="p-tag">
    Where trust meets talent, and knowledge finds its voice.
  </p>
  <div className=" my-5">
    <div className="cards-wrapper">
      {/* Card 1 */}
      <div className="choose-card">
        <div className="icon-circle">
          <i className="fas fa-globe" />
        </div>
        <h5>Global Reach</h5>
        <p>
          Your research deserves a worldwide audience. We ensure broad
          visibility through open-access publishing and strategic dissemination
          across academic and digital platforms.
        </p>
      </div>
      {/* Card 2 */}
      <div className="choose-card">
        <div className="icon-circle">
          <i className="fas fa-check-square" />
        </div>
        <h5>Rigorous Peer Review</h5>
        <p>
          Every submission undergoes a strict peer-review process managed by
          experienced editors and experts, ensuring your work meets the highest
          academic standards.
        </p>
      </div>
      {/* Card 3 */}
      <div className="choose-card">
        <div className="icon-circle">
          <i className="fas fa-crosshairs" />
        </div>
        <h5>Interdisciplinary Focus</h5>
        <p>
          We publish across life sciences, health, medicine, engineering, and
          technology — encouraging collaboration between fields and welcoming
          innovative, cross-cutting research.
        </p>
      </div>
      {/* Card 4 */}
      <div className="choose-card">
        <div className="icon-circle">
          <i className="fas fa-gauge-simple-high" />
        </div>
        <h5>Fast &amp; Transparent Process</h5>
        <p>
          Timely publication matters. We provide efficient editorial timelines,
          clear communication, and transparency at every stage of submission and
          review.
        </p>
      </div>
      {/* Card 5 */}
      <div className="choose-card">
        <div className="icon-circle">
          <i className="fas fa-unlock" />
        </div>
        <h5>Open Access for Impact</h5>
        <p>
          All accepted articles are freely available to readers globally —
          maximizing citations, readership, and academic influence.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default ChooseUs;