import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import axios from "axios";

export const JournalDetialsCom = ({ journal }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const API_URL = import.meta.env.VITE_API_URL;

  // 🔹 Helper function to strip and truncate HTML
  const truncateText = (text, maxLength = 300) => {
    if (!text) return "";
    const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  };

  // 🔹 PDF generation and open in new tab
  const handlePrintPDF = async (article) => {
    if (!article) return;

    // Increment download count
    try {
      await axios.patch(`${API_URL}/articles/download/${article._id}`);
      // optional: if parent passes setArticles or refresh logic, you can update count here
    } catch (err) {
      console.error("Failed to increment download count:", err);
    }

    // Generate the PDF
    const doc = new jsPDF();
    const content = `
${article.title}

Author: ${article.authorName}
Type: ${article.articleType || "N/A"}
Journal: ${journal.title}
Published: ${
      article.createdAt
        ? new Date(article.createdAt).toLocaleDateString()
        : "N/A"
    }

Abstract:
${article.content.replace(/<\/?[^>]+(>|$)/g, "")}
    `;

    doc.setFontSize(12);
    doc.text(content, 10, 10, { maxWidth: 190 });

    // Open in new tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  
  // 🔹 XML download
  const handleDownloadXML = (article) => {
    if (!article) return;

    const xmlContent = `
<?xml version="1.0" encoding="UTF-8"?>
<article>
  <title>${article.title}</title>
  <author>${article.authorName}</author>
  <journal>${journal.title}</journal>
  <type>${article.articleType || ""}</type>
  <published>${
    article.createdAt ? new Date(article.createdAt).toISOString() : ""
  }</published>
  <content>${article.content.replace(/<\/?[^>]+(>|$)/g, "")}</content>
</article>
    `.trim();

    const blob = new Blob([xmlContent], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${article.title.replace(/\s+/g, "_")}.xml`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  return (
    <div className="container py-5">
      <h1 className="journal-heading">
        <span> <Link style={{color:"rgb(20, 62, 106)"}} to={"/journals"}>Our Journals</Link> /</span> {journal.title}
      </h1>

      {/* Tabs Header */}
      <ul
        className="nav nav-tabs justify-content-start border-0"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="tab1-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab1"
            type="button"
            role="tab"
          >
            About
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab2-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab2"
            type="button"
            role="tab"
          >
            Editorial Board
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab3-tab"
            data-bs-toggle="tab"
            data-bs-target="#tab3"
            type="button"
            role="tab"
          >
            Articles
          </button>
        </li>
      </ul>

      <hr className="mt-0 mb-4" />

      <div className="tab-content" id="myTabContent">
        {/* About Tab */}
        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
          <div className="content-section mx-auto">
            <h3>{journal.subTitle}</h3>
            <div
              className="fw-normal"
              dangerouslySetInnerHTML={{ __html: journal.content }}
            />
          </div>
        </div>

        {/* Editorial Board */}
        <div className="tab-pane fade" id="tab2" role="tabpanel">
          <div className="row">
            {journal.editors.length === 0 && <p>No editors assigned yet.</p>}
            {journal.editors.map((editor) => (
              <div className="col-md-6 mb-3" key={editor._id}>
                <div className="profile-card">
                  <div className="profile-img">
                    <img
                      src={`${BASE_URL}/${editor.coverImage}`}
                      className="w-75 rounded-3"
                      alt=""
                    />
                  </div>
                  <div className="profile-info">
                    <h5>
                      {editor.firstName} {editor.lastName}
                    </h5>
                    <p>{editor.email}</p>
                    <p>
                      <small>{editor.department}</small>
                    </p>
                    <p>{editor.university}</p>
                    <p>{editor.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="tab-pane fade" id="tab3" role="tabpanel">
          <div className="container">
            {journal.articles.length === 0 && <p>No articles published yet.</p>}

            {journal.articles.length > 0 && (
              <div className="mb-4 text-end">
                <Link
                  to={`/journals/all-articles/${journal._id}`}
                  className="fw-bold text-decoration"
                  style={{ color: "#143E6A" }}
                >
                  View All Articles
                </Link>
              </div>
            )}

            {journal.articles.map((article) => (
              <div
                className="article-card row align-items-center mb-3"
                key={article._id}
              >
                <div className="col-md-4">
                  <img
                    src={
                      article.coverImage
                        ? `${BASE_URL}/${article.coverImage}`
                        : "/assets/img/service/card-1.png"
                    }
                    alt={article.title}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="col-md-8">
                  <h5>{article.title}</h5>
                  <p className="article-meta">
                    by <strong>{article.authorName}</strong> on{" "}
                    {new Date(article.createdAt).toLocaleDateString()}
                  </p>
                  <p
                    className="article-text"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {truncateText(article.content)}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="stats">
                      <span>
                        <i className="fa-regular fa-eye" /> {article.views}
                      </span>
                      <span className="ms-3">
                        <i className="fa-solid fa-download" /> {article.downloads}
                      </span>
                    </div>
                    <div>
                      <Link
                        to={`/articles/abstract/${article._id}`}
                        className="article-btn me-2"
                      >
                        Abstract
                      </Link>

                      <button
                        onClick={() => handlePrintPDF(article)}
                        className="article-btn me-2"
                      >
                        PDF
                      </button>

                      <button
                        onClick={() => handleDownloadXML(article)}
                        className="article-btn"
                      >
                        XML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
