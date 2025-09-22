"use client";
import TypedText from "./components/TypedText";
import Image from "next/image";
import SpotlightEffect from "./components/SpotlightEffect";
import { useRef, useState, useEffect } from "react";
import projectData from "./projectData";

export default function Page() {
  // Contact form logic
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  // Overlay state
  const [overlay, setOverlay] = useState({ open: false, idx: null });
  const [showOverlay, setShowOverlay] = useState(false); // for fade

  useEffect(() => {
    if (overlay.open) {
      setShowOverlay(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timeout = setTimeout(() => setShowOverlay(false), 350); // tunggu animasi selesai
      return () => clearTimeout(timeout);
    }
  }, [overlay.open]);

  // Inject overlay.css if not present
  useEffect(() => {
    if (!document.getElementById('project-overlay-css')) {
      const link = document.createElement('link');
      link.id = 'project-overlay-css';
      link.rel = 'stylesheet';
      link.href = '/css/overlay.css';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    const form = formRef.current;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch("https://formspree.io/f/xblknqog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Home Section */}
      <section id="hero" className="section-full d-flex flex-column justify-content-center align-items-center text-center">
        <TypedText />
        <p id="aboutmeNama" className="mt-3">Muhammad Abidillah.</p>
        <p id="aboutmeDeskripsi">A beginner who wants to grow more.</p>
      </section>

      {/* Projects Section */}
      <SpotlightEffect />
      <section id="projects" className="section-full container d-flex flex-column justify-content-center">
        <h2 className="text-center mb-4">Something I've Done</h2>
        <div className="row g-4 justify-content-center">
          {projectData.map((proj, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="p-3 border rounded spotlight-card"
                style={{ cursor: "pointer" }}
                onClick={() => setOverlay({ open: true, idx })}
              >
                <h4 className="mb-4">{proj.title}</h4>
                <p>{proj.description}</p>
                <Image src={proj.image} alt={proj.title} width={400} height={300} className="img-fluid rounded mt-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay Project Detail */}
        {showOverlay && overlay.idx !== null && (
          <div
            className={`project-overlay-fade ${overlay.open ? "show" : ""}`}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.7)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOverlay({ open: false, idx: null })}
          >
            <div
              className={`project-overlay-content ${overlay.open ? "show" : ""}`}
              style={{
                background: "#222",
                color: "#fff",
                padding: 32,
                borderRadius: 16,
                maxWidth: 520,
                width: "95%",
                position: "relative",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 24,
                  cursor: "pointer",
                }}
                onClick={() => setOverlay({ open: false, idx: null })}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={projectData[overlay.idx].image}
                alt={projectData[overlay.idx].title}
                width={400}
                height={300}
                className="img-fluid rounded mb-3"
                style={{ objectFit: "cover" }}
              />
              <h3 className="mb-3" style={{ textAlign: "center", width: "100%" }}>
                {projectData[overlay.idx].title}
              </h3>
              <p style={{ textAlign: "center" }}>
                {projectData[overlay.idx].detail}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-5">
        <h2 className="text-center mb-5 text-white">Experiences</h2>
        <div className="position-relative">
          <div className="border-start border-info position-absolute top-0 bottom-0 start-50 translate-middle-x d-none d-md-block neon-glow-vertical" style={{ width: "5px" }}></div>
          <div className="row mb-5">
            <div className="col-md-6 text-end pe-md-4">
              <div className="bg-dark text-light p-4 rounded">
                <h5 className="fw-bold">Family Gathering</h5>
                <p>Electrical Engineering Student Association - Secretariat Division</p>
                <small>October 2023</small>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 d-flex align-items-center justify-content-end position-relative order-md-1"></div>
            <div className="col-md-6 order-md-2 ps-md-4">
              <div className="bg-dark text-light p-4 rounded shadow">
                <h5 className="fw-bold">Internship Staff</h5>
                <p>Electrical Engineering Student Association - Advocacy Division</p>
                <small>April 2024</small>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 text-end pe-md-4">
              <div className="bg-dark text-light p-4 rounded shadow">
                <h5 className="fw-bold">ERC</h5>
                <p>Engineering Robotics Club - Assets Management Division</p>
                <small>2025</small>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 d-flex align-items-center justify-content-end position-relative order-md-1"></div>
            <div className="col-md-6 order-md-2 ps-md-4">
              <div className="bg-dark text-light p-4 rounded shadow">
                <h5 className="fw-bold">Public Lecture</h5>
                <p>Telecomunication and Internet - Equipment Head Division</p>
                <small>September 2025</small>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 text-end pe-md-4">
              <div className="bg-dark text-light p-4 rounded shadow">
                <h5 className="fw-bold">Intership</h5>
                <p>Diskominfo Prov. Riau - Statistic</p>
                <small>Sept 2025 - Des 2025</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-full d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="mb-4">Contact Me</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form p-4 rounded shadow" style={{ maxWidth: 400, width: '100%', background: 'rgba(30,30,30,0.7)' }}>
          <div className="mb-3">
            <input name="name" type="text" className="form-control dark-placeholder" placeholder="John Doe" required />
          </div>
          <div className="mb-3">
            <input name="email" type="email" className="form-control dark-placeholder" placeholder="john.doe@email.com" required />
          </div>
          <div className="mb-3">
            <textarea name="message" className="form-control dark-placeholder" placeholder="“Hi!”" rows={4} required></textarea>
          </div>
          <button
            type="submit"
            className="neon-glow btn btn-dark w-100 btn-send-glass"
            disabled={loading}
            onMouseEnter={e => {
              const btn = e.currentTarget;
              btn.classList.remove("glass-animate");
              // trigger reflow to restart animation
              void btn.offsetWidth;
              btn.classList.add("glass-animate");
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {success === true && <div className="alert alert-success mt-3">Message sent successfully!</div>}
        {success === false && <div className="alert alert-danger mt-3">Failed to send message. Please try again.</div>}
      </section>
    </>
  );
}
