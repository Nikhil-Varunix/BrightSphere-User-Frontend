import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`${API_URL}/articles`);
        if (res.data.success) setArticles(res.data.data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      }
    };
    fetchArticles();
  }, []);

  const truncateText = (html, maxLength = 150) => {
    const text = html.replace(/<\/?[^>]+(>|$)/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="ltn__blog-area pt-115--- pb-70 pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h2 className="hed-title">
                Explore the{" "}
                <span className="highlight" style={{ color: "#2879D0" }}>
                  latest knowledge
                </span>{" "}
                with us.
              </h2>
              <p className="p-tag" style={{ color: "#101010" }}>
                “Knowledge grows stronger when shared — discover our newest
                articles and be part of the journey.”
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className="d-flex flex-nowrap gap-3 ltn__blog-item-3-normal"
          style={{ overflowX: "auto", paddingBottom: "10px", scrollBehavior: "smooth" }}
        >
          {articles.map((article) => (
            <div className="col-lg-5 mt-3 flex-shrink-0" key={article._id}>
              <div className="ltn__blog-item ltn__blog-item-3 m">
                <div className="ltn__blog-img">
                  <Link to={`/articles/abstract/${article._id}`}>
                    <img
                      src={article.coverImage ? `${BASE_URL}/${article.coverImage}` : "/assets/img/product/details.png"}
                      alt={article.title}
                    />
                  </Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta d-flex justify-content-between align-items-center mb-2">
                    <div className="blog-views d-flex align-items-center">
                      <i className="far fa-eye me-2" />
                      <span>{article.views || 0}</span>
                    </div>
                    <div className="blog-downloads d-flex align-items-center">
                      <i className="fas fa-download me-2" />
                      <span>{article.downloads || 0}</span>
                    </div>
                  </div>
                  <h3 className="ltn__blog-title">
                    <Link style={{color: "#143E6A"}} className="text-decoration-none" to={`/articles/abstract/${article._id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p>{truncateText(article.content)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
