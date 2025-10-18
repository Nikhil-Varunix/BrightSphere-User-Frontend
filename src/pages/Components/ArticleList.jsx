import React from 'react'

export const ArticleList = () => {
  return (
    <div className="container py-5">
  <h1 className="journal-heading">
    <span>Our Journals /</span> Journal of Earth And Environmental Science /
    Articles
  </h1>
  <div className="container">
    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
      {/* Left Side: Dropdowns */}
      <div className="d-flex flex-wrap gap-2">
        {/* Dropdown 1 */}
        <div className="dropdown custom-dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Journal of Earth And Environmental Science
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Journal of Earth And Environmental Science
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Journal of Health and Medicine
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Journal of Applied Science and Engineering
              </a>
            </li>
          </ul>
        </div>
        {/* Dropdown 2 */}
        <div className="dropdown custom-dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Volume 1
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Volume 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Volume 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Volume 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Right Side: Search */}
      <div className="d-flex">
        <input
          type="text"
          className="form-control search-box"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
  {/* Tabs Header */}
  <ul
    className="nav nav-tabs justify-content-start border-0"
    id="myTab"
    role="tablist"
  >
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="tab1-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab1"
        type="button"
        role="tab"
      >
        Issue 1
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="tab3-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab3"
        type="button"
        role="tab"
      >
        Issue 2
      </button>
    </li>
  </ul>
  {/* Line under tabs */}
  <hr className="mt-0 mb-4" />
  {/* Tabs Content */}
  <div className="tab-content  " id="myTabContent">
    <div className="tab-pane fade show active" id="tab1" role="tabpanel">
      <div className="container ">
        {/* Article Card 1 */}
        <div className="article-card row align-items-center">
          <div className="col-md-4">
            <img src="/assets/img/service/card-1.png" alt="Article" />
          </div>
          <div className="col-md-8">
            <h5>Go Green, Green Innovation for Global</h5>
            <p className="article-meta">
              by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
            </p>
            <p className="article-text">
              “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together. “A
              meter of green is greener than a centimetre” I am in love with
              this green Earth – Charles lamb. Nowadays, Go Green has becoming
              an initiative protecting the natural resources for the next
              generation...
            </p>
            <div className="d-flex justify-content-between align-items-center ">
              <div className="stats">
                <span>
                  <i className="fa-regular fa-eye" /> 200
                </span>
                <span className="ms-3">
                  <i className="fa-solid fa-download" /> 980
                </span>
              </div>
              <div>
                <a href="details.html" className="article-btn me-2">
                  Abstract
                </a>
                <a href="#" className="article-btn">
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Article Card 2 */}
        <div className="article-card row align-items-center">
          <div className="col-md-4">
            <img src="/assets/img/service/card-1.png" alt="Article" />
          </div>
          <div className="col-md-8">
            <h5>Go Green, Green Innovation for Global</h5>
            <p className="article-meta">
              by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
            </p>
            <p className="article-text">
              “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together. “A
              meter of green is greener than a centimetre” I am in love with
              this green Earth – Charles lamb. Nowadays, Go Green has becoming
              an initiative protecting the natural resources for the next
              generation...
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="stats">
                <span>
                  <i className="fa-regular fa-eye" /> 200
                </span>
                <span className="ms-3">
                  <i className="fa-solid fa-download" /> 980
                </span>
              </div>
              <div>
                <a href="details.html" className="article-btn me-2">
                  Abstract
                </a>
                <a href="#" className="article-btn">
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Article Card 3 */}
        <div className="article-card row align-items-center">
          <div className="col-md-4">
            <img src="/assets/img/service/card-1.png" alt="Article" />
          </div>
          <div className="col-md-8">
            <h5>Go Green, Green Innovation for Global</h5>
            <p className="article-meta">
              by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
            </p>
            <p className="article-text">
              “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together. “A
              meter of green is greener than a centimetre” I am in love with
              this green Earth – Charles lamb. Nowadays, Go Green has becoming
              an initiative protecting the natural resources for the next
              generation...
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="stats">
                <span>
                  <i className="fa-regular fa-eye" /> 200
                </span>
                <span className="ms-3">
                  <i className="fa-solid fa-download" /> 980
                </span>
              </div>
              <div>
                <a href="details.html" className="article-btn me-2">
                  Abstract
                </a>
                <a href="#" className="article-btn">
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tab-pane fade" id="tab3" role="tabpanel">
      <div className="container ">
        {/* Tab Content */}
        <div className="" id="articleTabsContent">
          {/* Latest */}
          <div
            className="tab-pane fade show active"
            id="latest"
            role="tabpanel"
          >
            {/* Article Card 1 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 2 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 3 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 4 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 5 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 6 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 7 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Card 8 */}
            <div className="article-card row align-items-center">
              <div className="col-md-4">
                <img src="/assets/img/service/card-1.png" alt="Article" />
              </div>
              <div className="col-md-8">
                <h5>Go Green, Green Innovation for Global</h5>
                <p className="article-meta">
                  by <strong>Pravinaben Mangubhai Gamit</strong> on dec 25
                </p>
                <p className="article-text">
                  “LIVE GREEN THINK GREEN LOVE GREEN” Let’s go green together.
                  “A meter of green is greener than a centimetre” I am in love
                  with this green Earth – Charles lamb. Nowadays, Go Green has
                  becoming an initiative protecting the natural resources for
                  the next generation...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="stats">
                    <span>
                      <i className="fa-regular fa-eye" /> 200
                    </span>
                    <span className="ms-3">
                      <i className="fa-solid fa-download" /> 980
                    </span>
                  </div>
                  <div>
                    <a href="details.html" className="article-btn me-2">
                      Abstract
                    </a>
                    <a href="#" className="article-btn">
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
