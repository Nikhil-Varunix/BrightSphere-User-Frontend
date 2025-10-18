import React from 'react'

export const EditorGuidlines = () => {
  return (
    <div className="container py-5">
  <div className="content-section mx-auto">
    <h2 style={{ color: "#143E6A" }}>Editor Guidelines:</h2>
    <h6>Editorial Responsibilities</h6>
    <ul>
      <li>
        <strong className=" mb-2">Initial Screening</strong>
        <span>
          Review all submitted manuscripts for journal scope, formatting
          compliance, language quality, and ethical suitability (plagiarism,
          authorship, etc.).
        </span>
      </li>
      <li>
        <strong className=" mb-2">Peer Review Oversight</strong>
        <span>
          {" "}
          Assign manuscripts to qualified and impartial reviewers. Ensure the
          process is double-blind, unbiased, and completed in a timely manner.
        </span>
      </li>
      <li>
        <strong className=" mb-2">Decision Making</strong>
        <span>
          Evaluate reviewer reports and make clear editorial decisions (Accept /
          Minor Revision / Major Revision / Reject). <br /> Provide authors with
          a transparent, respectful rationale for every decision.
        </span>
      </li>
      <li>
        <strong className=" mb-2">Author Support</strong>
        <span>
          Guide authors through revision stages. Provide feedback that is
          constructive, respectful, and educational, especially for early-career
          researchers.
        </span>
      </li>
      <li>
        <span>Ethical and Professional Standards</span>
      </li>
      <li>
        <strong className=" mb-2">Conflicts of Interest</strong>
        <span>
          Editors must recuse themselves from handling manuscripts if they have
          personal, financial, or professional ties to the authors.
        </span>
      </li>
      <li>
        <strong className=" mb-2">Confidentiality</strong>
        <span>
          Do not share manuscript content or reviewer identities with
          unauthorized individuals. Maintain confidentiality throughout the
          review and decision-making process.
        </span>
      </li>
      <li>
        <strong className=" mb-2">Handling Misconduct</strong>
        <span>
          Suspected issues such as plagiarism, data manipulation, duplicate
          submission, or unethical research must be reported to the
          Editor-in-Chief or Ethics Committee. Actions may include
          investigation, withdrawal, or retraction.
        </span>
      </li>
      <li>
        <strong className=" mb-2">Compliance</strong>
        <span>
          Follow publishing standards set by COPE (Committee on Publication
          Ethics), ICMJE, and BrightSphere’s internal policies.
        </span>
      </li>
      <li>
        <span>Commitment to Quality</span>
      </li>
    </ul>
    <h3>Editors are expected to:</h3>
    <ul>
      <li>Promote academic integrity, objectivity, and diversity</li>
      <li>
        Ensure fairness for authors regardless of nationality, gender, or
        institutional affiliation
      </li>
      <li>Work to improve editorial workflows and timelines</li>
      <li>Encourage interdisciplinary research and innovation</li>
    </ul>
  </div>
</div>

  )
}
