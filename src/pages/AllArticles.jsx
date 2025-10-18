import React, { useEffect, useState } from "react";
import { SubSlider } from "./Components/SubSlider";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useJournal } from "./contexts/journalContext";
import axios from "axios";

export const AllArticles = () => {
  const { journals } = useJournal();
  const { journalId } = useParams();
  const navigate = useNavigate();

  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedVolume, setSelectedVolume] = useState("");
  const [activeIssue, setActiveIssue] = useState("");
  const [articles, setArticles] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!journalId) return;
    const fetchJournal = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
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

  const filteredArticles = articles.filter((a) => {
    let matches = a.title.toLowerCase().includes(searchText.toLowerCase());
    if (selectedVolume) matches = matches && a.volume === selectedVolume;
    if (activeIssue) matches = matches && a.issue === activeIssue;
    return matches;
  });

  const truncateText = (text, maxLength = 300) => {
    if (!text) return "";
    const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");
    return plainText.length > maxLength ? plainText.slice(0, maxLength) + "..." : plainText;
  };

  const currentVolume = selectedJournal?.volumes.find((v) => v._id === selectedVolume);

  return (
    <div>
      <SubSlider />
      <div className="container py-5">
        <h1 className="journal-heading">
          <span>Our Journals /</span>{" "}
          {selectedJournal ? selectedJournal.title : "Select Journal"} / Articles
        </h1>

        {/* --- Dropdowns --- */}
        <div className="container mb-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            {/* Journal Dropdown */}
            <div className="form-group">
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
            </div>

            {/* Volume Dropdown */}
            <div className="form-group">
              <select
                className="form-select"
                value={selectedVolume || ""}
                onChange={handleVolumeChange}
                disabled={!selectedJournal?.volumes?.length}
              >
                <option value="">Select Volume</option>
                {selectedJournal?.volumes.map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.volumeName}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
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
                      src={article.image || "/assets/img/service/card-1.png"}
                      alt={article.title}
                      className="img-fluid"
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
                        <Link to={article.pdfUrl || "#"} className="article-btn" target="_blank">
                          PDF
                        </Link>
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
