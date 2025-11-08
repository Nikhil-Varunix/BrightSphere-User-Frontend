import { Link, useLocation } from "react-router-dom";
import { OnlineSubForm } from "../pages/Components/OnlineSubForm";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
const [showGuide, setShowGuide] = useState(false);

  const isActive = (path) => location.pathname === path;

  const openMenu = () => {
    document.body.classList.add("ltn__utilize-open");

    document.getElementById("ltn__utilize-mobile-menu")?.classList.add("ltn__utilize-open");

    document.querySelector(".ltn__utilize-overlay").style.display = "block";

    document.querySelector(".ltn__utilize-toggle")?.classList.add("close");
  };

  const closeMenu = () => {
    document.body.classList.remove("ltn__utilize-open");

    document.getElementById("ltn__utilize-mobile-menu")?.classList.remove("ltn__utilize-open");

    document.querySelector(".ltn__utilize-overlay").style.display = "none";

    document.querySelector(".ltn__utilize-toggle")?.classList.remove("close");
  };

  return (
    <>
      {/* HEADER */}
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
        <div className="sticky-mobile-header">
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo">
                      <Link to="/">
                        <img src="/assets/img/logo.png" alt="Logo" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu">
                        <ul>
                          <li className={isActive("/") ? "active" : ""}>
                            <Link to="/">Home</Link>
                          </li>
                          <li className={isActive("/journals") ? "active" : ""}>
                            <Link to="/journals">Journals</Link>
                          </li>

                          <li
                            className={`menu-icon ${
                              location.pathname.startsWith("/Guidlines") ? "active" : ""
                            }`}
                          >
                            <Link to="#">Guidelines </Link>
                            <ul >
                              <li>
                                <Link to="/Guidlines/author">Author</Link>
                              </li>
                              <li>
                                <Link to="/Guidlines/editor">Editor</Link>
                              </li>
                              <li>
                                <Link to="/Guidlines/reviewer">Reviewer</Link>
                              </li>
                              <li>
                                <Link to="/Guidlines/APC">APC</Link>
                              </li>
                            </ul>
                          </li>

                          <li className={isActive("/about") ? "active" : ""}>
                            <Link to="/about">About Us</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="col d-flex justify-content-end align-items-center">
                  <a
                    className="online-submission-btn d-none d-md-inline-block me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#submissionModal"
                  >
                    Online Submission
                  </a>

                  {/* ✅ Mobile Menu Toggle */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <button
                      type="button"
                      className="ltn__utilize-toggle text-end"
                      onClick={openMenu}
                    >
                      <svg viewBox="0 0 800 600" className="ms-auto">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ MOBILE MENU */}
      <div
        id="ltn__utilize-mobile-menu"
        className="ltn__utilize ltn__utilize-mobile-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link to="/" onClick={closeMenu}>
                <img src="/assets/img/logo.png" alt="Logo" />
              </Link>
            </div>

            <button className="ltn__utilize-close" onClick={closeMenu}>
              ×
            </button>
          </div>

          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/journals" onClick={closeMenu}>Journals</Link>
              </li>

                {/* Guidelines expandable */}
            <li>
              <button
                className="menu-icon w-100 text-start bg-transparent border-0 p-0"
                onClick={() => setShowGuide(!showGuide)}
              >
                Guidelines <i className={`fa-xs mt-2 fa fa-chevron-${showGuide ? "down" : "right"}`}></i>
              </button>

              <ul className="sub-menu" style={{ display: showGuide ? "block" : "none" }}>
                <li><Link className="text-dark" to="/Guidlines/author" onClick={closeMenu}>Author</Link></li>
                <li><Link className="text-dark" to="/Guidlines/editor" onClick={closeMenu}>Editor</Link></li>
                <li><Link className="text-dark" to="/Guidlines/reviewer" onClick={closeMenu}>Reviewer</Link></li>
                <li><Link className="text-dark" to="/Guidlines/APC" onClick={closeMenu}>APC</Link></li>
              </ul>
            </li>

              <li>
                <Link to="/about" onClick={closeMenu}>About Us</Link>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-start align-items-start mt-20 mb-20">
            <button
              className="online-submission-btn"
              data-bs-toggle="modal"
              data-bs-target="#submissionModal"
              onClick={closeMenu}
            >
              Online Submission
            </button>
          </div>

        </div>
      </div>

      {/* ✅ Overlay */}
      <div className="ltn__utilize-overlay" onClick={closeMenu} />

      <OnlineSubForm />
    </>
  );
};

export default Header;
