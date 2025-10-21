import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-next-btn slick-arrow btn btn-light bg-white px-2"
    onClick={onClick}
  >
    <i className="fas fa-chevron-right text-dark fs-4"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="slick-prev-btn slick-arrow btn btn-light bg-white px-2"
    onClick={onClick}
  >
    <i className="fas fa-chevron-left text-dark fs-4"></i>
  </button>
);

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

  const truncateText = (html, maxLength = 175) => {
    const text = html.replace(/<\/?[^>]+(>|$)/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="ltn__blog-area pt-50 pb-70 position-relative">
      <div className="container px-md-5">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="hed-title">
            Explore the{" "}
            <span className="highlight" style={{ color: "#2879D0" }}>
              latest knowledge
            </span>{" "}
            with us.
          </h2>
          <p className="p-tag" style={{ color: "#101010" }}>
            “Knowledge grows stronger when shared — discover our newest articles
            and be part of the journey.”
          </p>
        </div>

        {/* Slick Slider */}
        <Slider {...settings}>
          {articles.map((article) => (
            <div key={article._id} className="px-3 d-flex justify-content-center">
              <div className="ltn__blog-item shadow rounded overflow-hidden card flex-fill">
                <div className="ltn__blog-img">
                  <Link to={`/articles/abstract/${article._id}`}>
                    <img
                      src={
                        article.coverImage
                          ? `${BASE_URL}/${article.coverImage}`
                          : "/assets/img/product/details.png"
                      }
                      alt={article.title}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
                <div className="ltn__blog-brief p-3">
                  <div className="d-flex justify-content-between mb-2 text-muted small fw-bold">
                    <span>
                      <i className="far fa-eye me-2 text-dark"></i>
                      {article.views || 0}
                    </span>
                    <span>
                      <i className="fas fa-download me-2 text-dark"></i>
                      {article.downloads || 0}
                    </span>
                  </div>
                  <h4 className="ltn__blog-title mb-2">
                    <Link
                      to={`/articles/abstract/${article._id}`}
                      className="text-decoration-none text-dark"
                    >
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-muted small mb-0">
                    {truncateText(article.content)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Inline styles for positioning arrows */}
      <style>
        {`
          .slick-prev-btn, .slick-next-btn {
            position: absolute;
            top: 45%;
            z-index: 10;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            opacity: 0.9;
          }
          .slick-prev-btn { left: -20px; }
          .slick-next-btn { right: -20px; }
          .slick-prev-btn:hover, .slick-next-btn:hover {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};
