import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const AllArticlesInPress = () => {
  const { journalId } = useParams();
  const [articles, setArticles] = useState([]);
  const [journalTitle, setJournalTitle] = useState("Journal");
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // ✅ Fetch in-press articles by journal ID
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`${API_URL}/inpress-articles/journal/${journalId}`);
        if (res.data.success) {
          setArticles(res.data.data);

          // ✅ Set journal title from populated data
          if (res.data.data.length > 0 && res.data.data[0].journal?.title) {
            setJournalTitle(res.data.data[0].journal.title);
          }
        }
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      } finally {
        setLoading(false);
      }
    };

    if (journalId) fetchArticles();
  }, [journalId]);

  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="hero-section hero-section-2 text-center text-dark"
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

      {/* ✅ Articles Table */}
      <div className="container py-5">
        <h1 className="journal-heading mb-4">
          <span>Our Journals /</span> {journalTitle} / Articles In Press
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : articles.length === 0 ? (
          <p>No in-press articles found.</p>
        ) : (
          <div className="card shadow border border-1 border-secondary-subtle">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="table-light">
                    <tr className="border border-0">
                      <th>S.No</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Author</th>
                      <th>PDF</th>
                    </tr>
                  </thead>

                  <tbody>
                    {articles.map((article, i) => (
                      <tr key={article._id}>
                        {/* ✅ Title */}
                        <td>
                          {i+1}
                        </td>
                        <td className="text-truncate" style={{ maxWidth: "250px" }}>
                          {article.title}
                        </td>

                        {/* ✅ Tooltip for Content */}
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id={`tooltip-${i}`} className="tooltip-lg">
                              <div
                                dangerouslySetInnerHTML={{ __html: article.content }}
                              />
                            </Tooltip>
                          }
                        >
                          <td
                            className="text-truncate"
                            style={{ maxWidth: "280px", cursor: "pointer" }}
                          >
                            {article.content
                              ?.replace(/<\/?[^>]+(>|$)/g, "")
                              .slice(0, 80) || ""}
                            ...
                          </td>
                        </OverlayTrigger>

                        {/* ✅ Author */}
                        <td className="text-truncate" style={{ maxWidth: "180px" }}>
                          {article.author}
                        </td>

                        {/* ✅ PDF */}
                        <td>
                          {article.document ? (
                            <a
                              href={`${BASE_URL}/${article.document}`}
                              target="_blank"
                              rel="noreferrer"
                              className="btn text-white online-submission-btn"
                            >
                              View PDF
                            </a>
                          ) : (
                            <span className="text-muted">No PDF</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllArticlesInPress;
