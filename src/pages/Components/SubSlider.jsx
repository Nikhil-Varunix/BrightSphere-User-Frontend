import React from "react";

export const SubSlider = ({ data = {} }) => {
  const {
    backgroundImage,
    title,
    highlight,
    subtitle,
    paragraph,
  } = data;

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero-section text-center text-dark"
        style={{
          background: backgroundImage
            ? `url(${backgroundImage}) center/cover no-repeat`
            : "none",
        }}
      >
        <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
          {(title || highlight) && (
            <h1 className="hed-title" style={{ color: "#143E6A" }}>
              {title && <>{title} <br /></>}
              {highlight && (
                <span style={{ color: "#2879D0" }} className="highlight">
                  {highlight}
                </span>
              )}
            </h1>
          )}

          {subtitle && <p className="text-dark">{subtitle}</p>}
        </div>
      </section>

      {/* JOURNAL CONTENT SECTION */}
      {paragraph && (
      <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__car-dealer-form-tab">
                <div className="tab-content box-shadow-1 pb-3">
                  <div
                    className="tab-pane fade active show b"
                    id="ltn__form_tab_1_1"
                  >
                    <div className="car-dealer-form-inner box">
                      <form
                        action="#"
                        className="ltn__car-dealer-form-box row"
                      >
                         <p>{paragraph}</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};
