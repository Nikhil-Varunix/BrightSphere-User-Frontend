import React from "react";
import { Link } from "react-router-dom";
import { useJournal } from "../contexts/journalContext";

export const OurJournals = () => {
  const { journals } = useJournal();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getFirstParagraph = (htmlString) => {
    if (!htmlString) return "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const p = doc.querySelector("p");

    return p ? p.outerHTML : "";
  };

  return (
    <div className="container py-5">
      <h2 className="section-title mb-4">Our Journals</h2>

      {journals.map((j, i) => {
        const isOdd = i % 2 !== 0;

        return (
          <div
            key={j._id}
            className={`row align-items-center journal-card mb-5 pb-3 flex-column flex-md-row ${isOdd ? "flex-md-row-reverse" : ""}`}
          >
            {/* Text Column */}
            <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center">
              <h5 className="fw-bold">{j.title}</h5>
              <small className="text-muted">{j.subTitle}</small>

              {/* ✅ First Paragraph Render */}
              <div
                className="mt-3"
                dangerouslySetInnerHTML={{ __html: getFirstParagraph(j.content) }}
              />

              <div className="d-flex gap-1 mt-3 journal-buttons">
                <Link to={`/journals/journal-details/${j._id}`} className="btn btn-outline-primary">
                  Full Journal
                </Link>
                <Link to={`/journals/all-articles/${j._id}`} className="btn btn-outline-primary">
                  Archives
                </Link>
                <Link to={`/journals/all-articles/in-press/${j._id}`} className="btn btn-outline-primary">
                  Article in Press
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className={`col-md-6 d-flex justify-content-center`}>
              <div className={`position-relative w-100 d-flex justify-content-${isOdd ? "start" : "end"}`}>
                <div className="position-relative w-75">
                  <img
                    src={`${BASE_URL}/${j.coverImage}`}
                    alt={j.title}
                    className="img-fluid rounded-5 shadow-lg shadow w-100"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                  {j.issn && (
                    <span
                      className="position-absolute text-white px-2 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(106, 107, 107, 0.4)",
                        bottom: "10px",
                        right: isOdd ? "auto" : "10px",
                        left: isOdd ? "10px" : "auto",
                        fontSize: "0.9rem",
                      }}
                    >
                      ISSN: {j.issn}
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
