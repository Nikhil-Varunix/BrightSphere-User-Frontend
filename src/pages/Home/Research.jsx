import React from 'react'

export const Research = () => {
  return (
    <div className="ltn__call-to-action-area ltn__call-to-action-4  pt-95 pb-95">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="call-to-action-inner  text-center">
          <div className="">
            <h2 className="hed-title">
              Are you ready to take your{" "}
              <span className="highlight" style={{ color: "#2879D0" }}>
                research further
              </span>{" "}
              ?
            </h2>
            <p className="p-tag" style={{ color: "#101010", fontSize: '18px' }}>
              Your research deserves a platform. Publish with us today.
            </p>
          </div>
          <div className="btn-wrapper">
            <a
              style={{ padding: "10px 0" }}
              href=""
              className="online-submission-btn"
              data-bs-toggle="modal"
              data-bs-target="#submissionModal"
            >
              Online Submission
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
