import React from 'react'

export const ReviewerGuidlines = () => {
  return (
    <div className="container py-5">
  <div className="content-section mx-auto">
    <h2 style={{ color: "#143E6A" }}>Reviewer Guidelines:</h2>
    <h3>Role of a Reviewer</h3>
    <p>
      Reviewers help maintain the journal’s academic quality by providing
      honest, objective, and constructive feedback on submitted manuscripts.
    </p>
    <h3>Responsibilities</h3>
    <ul>
      <li>
        Evaluate the manuscript’s originality, methodology, clarity, and
        scientific relevance.
      </li>
      <li>Provide detailed, respectful comments to help authors improve.</li>
      <li>
        {" "}
        Recommend a decision: Accept, Minor Revisions, Major Revisions, or
        Reject.
      </li>
      <li>Maintain confidentiality throughout the process.</li>
      <li>
        Avoid conflicts of interest — decline the review if there's any
        personal, professional, or financial connection.
      </li>
    </ul>
    <h3>Review Timeline</h3>
    <p>
      Please aim to submit your review within 2–3 weeks of accepting the
      invitation.
    </p>
    <h6>Ethical Standards</h6>
    <ul>
      <li>Do not use or share the manuscript content.</li>
      <li>Do not attempt to identify the authors (in double-blind review).</li>
      <li>Report any ethical concerns (e.g., plagiarism, data fabrication).</li>
    </ul>
  </div>
</div>

  )
}
