import React from "react";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <section className="choose-section pt-190 pb-22">
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Side: Headline + Cards */}
          <div className="col-md-8 d-flex flex-column align-items-start mb-4 mb-md-0">
            <div className="d-flex flex-column justify-content-start text-start mb-3">
              <h2 className="hed-title" style={{ color: "#AFD5FF" }}>
                A wide range of journal{" "}
                <span className="highlight">Categories</span>
              </h2>
              <p className="p-tag">
                One platform. Endless journal categories to discover.
              </p>
            </div>

            {/* Statement 1 */}
            <div className="glass-card">
              <Link className="text-decoration-none" to="/journals">
                Journal of Earth And Environmental Science
              </Link>
            </div>

            {/* Statement 2 */}
            <div className="glass-card">
              <Link className="text-decoration-none" to="/journals">
                Journal of Modern Applied Sciences &amp; Engineering
              </Link>
            </div>

            {/* Statement 3 */}
            <div className="glass-card">
              <Link className="text-decoration-none" to="/journals">
                Journal of Health &amp; Medical Research
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-md-4 text-center">
            <img
              src="/assets/img/blog/9.png"
              alt="Journal Book"
              className="img-fluid white-shadow custom-width"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
