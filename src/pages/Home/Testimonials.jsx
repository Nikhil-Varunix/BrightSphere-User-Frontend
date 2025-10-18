import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    text: "The website is well-structured and easy to navigate. I was able to quickly find research papers relevant to my field without wasting time.",
    name: "Michael Adams",
    role: "Author",
  },
  {
    text: "The editorial team responded promptly to all my queries and guided me throughout the process, from submission to publication.",
    name: "Sarah Johnson",
    role: "Author",
  },
  {
    text: "Publishing my article here has significantly improved the visibility of my research. I’ve received citations and recognition globally.",
    name: "Michael Adams",
    role: "Author",
  },
  {
    text: "I found this platform very reliable for accessing updated scientific information.",
    name: "Sarah Johnson",
    role: "Author",
  },
  {
    text: "This journal provides equal opportunities for early-career researchers.",
    name: "Michael Adams",
    role: "Author",
  },
];

export const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let step = 1; // pixels per interval
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += step;
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#F8FBFF", fontFamily: "'Public Sans', sans-serif" }}>
      <div className="container text-center">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="fw-bold mb-2" style={{ color: "#143E6A", fontSize: "2.2rem" }}>
            What{" "}
            <span style={{ color: "#2879D0", fontFamily: '"Pacifico", cursive' }}>
              People Say
            </span>{" "}
            About Us?
          </h2>
          <p className="mx-auto" style={{ color: "#101010", fontSize: "18px", maxWidth: "700px" }}>
            "Every voice shapes not just our journey, but the future we create together..."
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="d-flex gap-4 px-2 mt-5 overflow-auto"
          style={{
            flexWrap: "nowrap",
            scrollBehavior: "smooth",
            scrollbarWidth: "none", // Firefox
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card border-0 flex-shrink-0 d-flex flex-column justify-content-between"
              style={{
                borderRadius: "12px",
                backgroundColor: "#fff",
                minWidth: "320px",
                maxWidth: "360px",
                height: "100%",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="card-body text-start p-4 flex-grow-1">
                <div className="mb-3" style={{ fontSize: "24px", color: "#2879D0" }}>
                  <i className="fa fa-quote-left"></i>
                </div>
                <p className="mb-0" style={{ fontSize: "18px", fontWeight: "500", color: "#101010", lineHeight: "1.4" }}>
                  {t.text}
                </p>
              </div>

              {/* Name & Role */}
              <div className="d-flex p-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{ width: "55px", height: "55px", backgroundColor: "#2879D0" }}
                >
                  <i className="fa fa-user fa-lg text-white"></i>
                </div>
                <div className="d-flex flex-column text-start">
                  <h6 className="mb-0 fw-bold" style={{ fontSize: "18px" }}>
                    {t.name}
                  </h6>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar for Webkit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
