import React from "react";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3 section-bg-1">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* ltn__slide-item */}
        <div
          className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- bg-image d-flex align-items-end"
          style={{
            backgroundSize: "70%",
            backgroundImage: `url("/assets/img/slider/21.png")`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#E9F4FF",
          }}
        >
          <div
            className="container text-center"
            style={{ marginBottom: "220px", marginTop: "0px" }}
          >
            <h1
              className="slide-title fw-bold display-5"
              style={{
                fontFamily: '"Quicksand", sans-serif',
                color: "#143E6A",
              }}
            >
              Transform ideas into impact. <br />
              Share your research with the world
              <span
                style={{
                  fontFamily: '"Pacifico", cursive',
                  color: "#2879D0",
                }}
              >
                — Publish Today.
              </span>
            </h1>
            <p
              style={{
                fontFamily: '"Public Sans"',
                fontSize: "16px",
                color: "#143E6A",
                lineHeight: "19px",
              }}
            >
              A trusted platform for researchers, authors, and students to
              showcase talent,
              <br />
              publish journals, and explore new knowledge — fast, impactful and
              reliable.
            </p>
            <div className="d-flex justify-content-center gap-1">
              <Link
                to="/journals"
                className="btn text-white d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#2879D0",
                  width: 170,
                  height: "35px",
                  padding: "8px 14px",
                  borderRadius: 8,
                  fontSize: "15px",
                  fontFamily: '"Public Sans", sans-serif',
                  textDecoration: "none",
                }}
              >
                Explore Journals
              </Link>
              <Link
                to="/about"
                className="btn d-flex align-items-center justify-content-center"
                style={{
                  color: "#143E6A",
                  border: "1px solid #2879D0",
                  width: 143,
                  height: 35,
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: "15px",
                  fontFamily: '"Public Sans", sans-serif',
                  textDecoration: "none",
                }}
              >
                Open Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
