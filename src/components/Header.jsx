import { Link } from "react-router-dom";
import { useState } from "react";
import { OnlineSubForm } from "../pages/Components/OnlineSubForm";
import {  useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const location = useLocation();

  // Function to check if the link matches the current path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <>
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
                       <li className={`menu-icon ${location.pathname.startsWith("/Guidlines") ? "active" : ""}`}>
  <Link to="#">Guidelines</Link>
  <ul>
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
                  style={{ cursor: "pointer" }}
                >
                  Online Submission
                </a>

                <div className="mobile-menu-toggle d-xl-none">
                  <Link
                    to="#ltn__utilize-mobile-menu"
                    className="ltn__utilize-toggle"
                  >
                    <svg viewBox="0 0 800 600">
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
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>

        {/* Utilize Mobile Menu Start */}
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img src="/assets/img/logo.png" alt="Logo" />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/journals">Journals</Link>
                </li>
                <li>
                  <Link to="#">Guidlines</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/author">Author</Link>
                    </li>
                    <li>
                      <Link to="/editor">Editor</Link>
                    </li>
                    <li>
                      <Link to="/reviewer">Reviewer</Link>
                    </li>
                    <li>
                      <Link to="/APC">APC</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-start align-items-start mt-20 mb-20">
              <Link
                to="#"
                className="online-submission-btn"
                data-bs-toggle="modal"
                data-bs-target="#submissionModal"
              >
                Online Submission
              </Link>
            </div>

            <div className="ltn__social-media-2">
              <ul>
                <li>
                  <Link to="#" title="Facebook">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Twitter">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Linkedin">
                    <i className="fab fa-linkedin" />
                  </Link>
                </li>
                <li>
                  <Link to="#" title="Instagram">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>

      <div className="ltn__utilize-overlay" />
       <OnlineSubForm />
    </>
  );
};

export default Header;
