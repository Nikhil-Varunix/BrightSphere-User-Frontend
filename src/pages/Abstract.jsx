import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Abstract = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`${API_URL}/articles/${articleId}`);
        if (res.data.success) {
          setArticle(res.data.data);

          // Increment view count on load
          await axios.patch(`${API_URL}/articles/view/${articleId}`);
        }
      } catch (err) {
        console.error("Failed to fetch article or update view count:", err);
      }
    };
    fetchArticle();
  }, [articleId]);

  const handlePrintPDF = async () => {
    if (!article) return;

    // Increment download count
    try {
      await axios.patch(`${API_URL}/articles/download/${articleId}`);
      setArticle((prev) => ({ ...prev, downloads: (prev.downloads || 0) + 1 }));
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
    doc.save(`${article.title}.pdf`);
  };

  if (!article) return <p className="text-center my-5">Loading article...</p>;

  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      })
    : "";

  return (
    <div className="container my-5">
      {/* Article Image */}
      <img
        src={article.coverImage ? `${BASE_URL}/${article.coverImage}` : "/assets/img/product/details.png"}
        alt={article.title}
        className="img-fluid rounded mb-4 w-100"
        style={{ height: "200px", objectFit: "cover" }}
      />

      {/* Article Header */}
      <div className="detail-sec mb-4">
        <h1 className="fw-semibold mb-2">{article.title}</h1>
        <p className="mb-2" style={{ fontWeight: "500" }}>
          by {article.author}
        </p>
        <p className="mb-3">
          Article type: <strong>{article.articleType}</strong> <br />
          Journal: <strong>{article.journal?.title}</strong> <br />
          Published: <strong>{publishedDate}</strong>
        </p>

        {/* Stats */}
        <div className="mb-4">
          <span>
            <i className="fa-regular fa-eye me-2" />
            {article.views || 0}
          </span>
          <span className="ms-3">
            <i className="fa-solid fa-download me-2" />
            {article.downloads || 0}
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="mb-4">
        <h5 className="fw-bold">Abstract</h5>
        <p style={{ fontSize: "16px", color: "#393939" }}>
          {article.content.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
      </div>

      {/* PDF Button */}
      <div className="text-end">
        <button onClick={handlePrintPDF} className="btn btn-primary">
          PDF
        </button>
      </div>
    </div>
  );
};
