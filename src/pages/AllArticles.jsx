import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useJournal } from "./contexts/journalContext";
import axios from "axios";
import jsPDF from "jspdf";

export const AllArticles = () => {
  const { journals } = useJournal();
  const { journalId } = useParams();
  const navigate = useNavigate();

  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState("");
  const [activeIssue, setActiveIssue] = useState("");
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!journalId) return;
    const fetchJournal = async () => {
      try {
        const res = await axios.get(`${API_URL}/journals/v2/${journalId}`);
        if (res.data.success) {
          const data = res.data.data;
          setSelectedJournal(data);
          setArticles(data.articles || []);
          const defaultVol = data.volumes[0];
          setSelectedVolume(defaultVol?._id || "");
          setActiveIssue(defaultVol?.issues[0]?._id || "");
        }
      } catch (err) {
        console.error("Failed to fetch journal:", err);
      }
    };
    fetchJournal();
  }, [journalId]);

  const handleJournalChange = (e) => {
    navigate(`/journals/all-articles/${e.target.value}`);
  };

  const handleVolumeChange = (e) => {
    const volumeId = e.target.value;
    setSelectedVolume(volumeId);
    const vol = selectedJournal?.volumes.find((v) => v._id === volumeId);
    setActiveIssue(vol?.issues[0]?._id || "");
  };

  const truncateText = (text, maxLength = 300) => {
    if (!text) return "";
    const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");
    return plainText.length > maxLength ? plainText.slice(0, maxLength) + "..." : plainText;
  };

  const currentVolume = selectedJournal?.volumes.find((v) => v._id === selectedVolume);

  const filteredArticles = articles.filter((a) => {
    let matches = a.title.toLowerCase().includes(searchText.toLowerCase());
    if (selectedVolume) matches = matches && a.volume === selectedVolume;
    if (activeIssue) matches = matches && a.issue === activeIssue;
    return matches;
  });

  const handlePrintPDF = async (article) => {
    if (!article) return;

    // Increment download count
    try {
      await axios.patch(`${API_URL}/articles/download/${article._id}`);
      setArticles((prev) =>
        prev.map((a) =>
          a._id === article._id ? { ...a, downloads: (a.downloads || 0) + 1 } : a
        )
      );
    } catch (err) {
      console.error("Failed to increment download count:", err);
    }

    // Generate PDF
    const doc = new jsPDF();
    const content = `
${article.title}

Author: ${article.author}
Type: ${article.articleType}
Journal: ${article.journal?.title}
Published: ${article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}

Abstract:
${article.content.replace(/<\/?[^>]+(>|$)/g, "")}
    `;
    doc.setFontSize(12);
    doc.text(content, 10, 10, { maxWidth: 190 });
    // 🔹 Instead of saving, open in new tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };

  const handleDownloadXML = (article) => {
    if (!article) return;

    // Create clean XML structure
    const xmlContent = `
<?xml version="1.0" encoding="UTF-8"?>
<article>
  <title>${article.title}</title>
  <author>${article.author}</author>
  <journal>${article.journal?.title || ""}</journal>
  <type>${article.articleType || ""}</type>
  <published>${article.publishedAt ? new Date(article.publishedAt).toISOString() : ""}</published>
  <content>${article.content.replace(/<\/?[^>]+(>|$)/g, "")}</content>
</article>
  `.trim();

    // Create Blob and trigger download
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
    <div>
      <section
        className="hero-section hero-section-2  text-center text-dark"
        style={{
          backgroundImage: `url("/assets/img/banner/planet-earth-surrounded-by-nature-vegetation.jpg")`,
          backgroundPosition: "left center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="page-title" style={{ color: "#143E6A" }}>
            A single article can{" "}
            <span style={{ color: "#2879D0" }} className="highlight">
              spark a thousand ideas
            </span>
            , but a journal <br /> preserves them for generations.
          </h1>
        </div>
      </section>

      <div className="container py-5">
        <h1 className="journal-heading">
          <span><Link style={{ color: "rgb(20, 62, 106)" }} to={"/journals"}>Our Journals</Link> /</span>{" "}
          {selectedJournal ? selectedJournal.title : "Select Journal"} / Articles
        </h1>

        {/* --- Dropdowns --- */}
        <div className="container mb-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <div className="form-group d-flex gap-3">
              <select
                className="form-select"
                value={selectedJournal?._id || ""}
                onChange={handleJournalChange}
              >
                <option value="" disabled>
                  Select Journal
                </option>
                {journals.map((j) => (
                  <option key={j._id} value={j._id}>
                    {j.title}
                  </option>
                ))}
              </select>

              <select
                className="form-select"
                value={selectedVolume || ""}
                onChange={handleVolumeChange}
                disabled={!selectedJournal?.volumes?.length}
              >
                <option value="">Select Volume</option>
                {selectedJournal?.volumes?.slice().reverse().map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.volumeName}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex">
              <input
                type="text"
                className="form-control search-box"
                placeholder="Search articles..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* --- Issue Tabs --- */}
        {currentVolume?.issues?.length > 0 && (
          <>
            <ul className="nav nav-tabs justify-content-start border-0" id="issueTabs" role="tablist">
              {currentVolume.issues.map((issue) => (
                <li className="nav-item" role="presentation" key={issue._id}>
                  <button
                    className={`nav-link ${activeIssue === issue._id ? "active" : ""}`}
                    id={`tab-${issue._id}`}
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    onClick={() => setActiveIssue(issue._id)}
                  >
                    {issue.issueName}
                  </button>
                </li>
              ))}
            </ul>
            <hr className="mt-0 mb-4" />
          </>
        )}

        {/* --- Articles --- */}
        <div className="tab-content">
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="container">
              {filteredArticles.length === 0 && <p>No articles found.</p>}

              {filteredArticles.map((article) => (
                <div className="article-card row align-items-center mb-3" key={article._id}>
                  <div className="col-md-4">
                    <img
                      src={`${BASE_URL}/${article.coverImage}` || "/assets/img/service/card-1.png"}
                      alt={article.title}
                      className="img-fluid rounded-3 shadow"
                    />
                  </div>
                  <div className="col-md-8">
                    <h5>{article.title}</h5>
                    <p className="article-meta">
                      by <strong>{article.author}</strong> on{" "}
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                    <p className="article-text">{truncateText(article.content)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="stats">
                        <span>
                          <i className="fa-regular fa-eye" /> {article.views || 0}
                        </span>
                        <span className="ms-3">
                          <i className="fa-solid fa-download" /> {article.downloads || 0}
                        </span>
                      </div>
                      <div>
                        <Link
                          to={`/articles/abstract/${article._id}`}
                          className="article-btn me-2"
                        >
                          Abstract
                        </Link>

                        {/* PDF Download */}
                        <button
                          onClick={() => handlePrintPDF(article)}
                          className="article-btn me-2"
                        >
                          PDF
                        </button>

                        {/* XML Download */}
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
    </div>
  );
};
