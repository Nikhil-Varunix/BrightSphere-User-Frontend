import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ltn__footer-area">
      <div className="footer-top-area section-bg-2 plr--5">
        <div className="container">
          <div className="row gy-4 align-items-start">
            {/* About */}
            <div className="col-lg-5 col-md-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo">
                    <img src="/assets/img/logo-2.png" alt="Logo" style={{ width: '180px' }} />
                  </div>
                </div>
                <p>
                  BrightSphere Insights is a forward-thinking academic publishing
                  platform that empowers researchers and institutions to share
                  innovative work with a global audience.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title mb-3">Quick Links</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/journals">Journals</Link>
                    </li>
                    <li>
                      <Link to="/guidlines/apc">APC</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title mb-3">Legal</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-widget footer-newsletter-widget">
                <h4 className="footer-title mb-3">Contact Us</h4>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-mail" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="mailto:contact@brightsphereinsights.com" target="_blank">
                            contact@brightsphereinsights.com
                          </a>

                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="ltn__social-media mt-1">
                  <ul className="d-flex gap-3">
                    <li>
                      <a
                        href="https://www.instagram.com/brigh.tsphere?igsh=dXBzeTI3MTg5MDd6"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/share/1BN68Wj3dV/"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/Bright1sphere"
                        title="X (Twitter)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="YouTube">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
        <div className="container ltn__border-top-2">
          <div className="row">
            <div className="col-12">
              <div className="ltn__copyright-design clearfix text-center">
                <p>
                  © 2025 All rights reserved, Bright Sphere Insights{" "}
                  <span className="current-year" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
