import React from 'react'
// import { SubSlider } from './Components/SubSlider'
// import { AboutCom } from '../Components/AboutCom'

export const About = () => {
  return (
    <div>
      {/* <SubSlider /> */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
      </section>
      <div className="container" style={{ padding: "50px 0" }}>
        <div className="content-section mx-auto">
          <p className="abt-p">
            BrightSphere Insights is a forward-thinking academic publishing platform
            that empowers researchers and institutions to share innovative work with a
            global audience. We publish peer-reviewed journals across the sciences,
            engineering, medicine, and environmental research — with a firm commitment
            to excellence, ethics, and accessibility. We believe that research is not
            just about discovery — it's about solving real-world problems and
            contributing to a better, more informed society. At BrightSphere Insights,
            we believe that every idea has the potential to change the world — but
            only when it is seen, read, and understood. We exist to ensure that
            credible research is not hidden behind paywalls, limited by geography, or
            delayed by bureaucracy.
          </p>
          <h3>Our platform offers:</h3>
          <ul>
            <li>Wide-reaching visibility through open-access publishing</li>
            <li>Fast yet rigorous peer review to ensure credibility and quality</li>
            <li>Supportive editorial processes led by qualified academics</li>
            <li>
              Inclusive policies that welcome submissions from both emerging and
              established researchers
            </li>
          </ul>
          <h3>Peer Review</h3>
          <p>
            Ensuring Quality Through Transparency and Integrity we believe that peer
            review is the cornerstone of credible academic publishing. Our process is
            designed to uphold the highest standards of academic rigor, ethical
            conduct, and editorial transparency. We follow a double-blind peer review
            model — both the authors and reviewers remain anonymous throughout the
            review process to ensure fairness and objectivity.
          </p>
          <h3>Steps in Our Peer Review Process</h3>
          <ol>
            <li>
              Initial Editorial Check{" "}
              <span>
                Upon submission, manuscripts are screened by the editorial team to
                ensure they meet the journal's scope, formatting, and ethical
                standards. Unsuitable manuscripts may be rejected at this stage.
              </span>
            </li>
            <li>
              Assignment to Handling Editor{" "}
              <span>
                A subject expert from our editorial board is assigned to oversee the
                review process. They evaluate the manuscript’s suitability and select
                qualified reviewers.
              </span>
            </li>
            <li>
              Reviewer Invitation{" "}
              <span>
                Two or more independent reviewers with expertise in the relevant field
                are invited to review the manuscript. We strive to maintain diversity
                and avoid conflicts of interest.{" "}
              </span>
            </li>
            <li>
              Double-Blind Peer Review{" "}
              <span>
                Reviewers evaluate the manuscript for originality, methodology,
                clarity, significance, and ethical compliance. They submit detailed
                comments and a recommendation:
              </span>
            </li>
            <li>
              Editorial Decision{" "}
              <span>
                The handling editor assesses reviewer feedback and makes a decision.
                Authors are provided with the reviewers’ comments and the decision
                letter. Accept, revise, or reject...
              </span>
            </li>
            <li>
              Revisions and Resubmission{" "}
              <span>
                If revisions are requested, authors must respond to all reviewer
                comments and submit a revised version. The revised manuscript may be
                returned to the reviewers or decided upon by the editor directly.
              </span>{" "}
            </li>
            <li>
              Final Decision &amp; Acceptance{" "}
              <span>
                Once all issues are resolved, the manuscript is accepted for
                publication. The author is notified, and the article proceeds to
                copyediting and typesetting. Copyediting and formatting...
              </span>
            </li>
            <li>
              Publication{" "}
              <span>
                Accepted articles are published online with full open access
              </span>
            </li>
          </ol>
          <h3>Open Access Policy</h3>
          <p>
            At BrightSphere Insights, we believe that knowledge should be accessible
            to everyone—without financial, legal, or technical barriers. Our Open
            Access policy ensures that all research articles, reviews, case studies,
            and special publications are freely available to the global community
            immediately upon publication. We follow the principle that free access to
            research fosters innovation, encourages collaboration, and accelerates
            scientific progress. By removing paywalls, we aim to empower researchers,
            educators, policymakers, and the public to read, share, and build upon the
            knowledge published in our journals.
          </p>
          <div className="sub-section">
            <h6>Key Features of Our Open Access Model</h6>
            <ul>
              <li>
                Free and Immediate Access - All published content is available online
                at no cost.
              </li>
              <li>
                Creative Commons Licensing - Articles are published under a CC BY
                license (or similar), allowing sharing, distribution, and adaptation
                with proper attribution to the original author(s).
              </li>
              <li>
                Author Rights Retention - Authors retain the copyright to their work
                while granting us the right to publish it.
              </li>
              <li>
                Global Reach - Researchers worldwide can access and cite your work
                without restrictions.
              </li>
            </ul>
          </div>
          <div className="sub-section">
            <h6>Benefits for Authors and Readers</h6>
            <ul>
              <li>
                Increased Visibility - Open Access articles are more widely read and
                cited.
              </li>
              <li>
                Faster Impact - Immediate availability allows research to influence
                the community quickly.
              </li>
              <li>
                Equitable Access - Researchers in low-resource regions gain the same
                access as those in well-funded institutions.
              </li>
            </ul>
            <p className="note">
              At BrightSphere Insights, we are committed to upholding transparency,
              integrity, and accessibility in academic publishing—because knowledge
              grows when it is shared.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
