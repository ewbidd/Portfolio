"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../globals.css";

export default function Header() {
  const navs = [
    { id: "hero", label: "home" },
    { id: "projects", label: "projects" },
    { id: "experience", label: "experience" },
    { id: "contact", label: "contact" },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const btnRefs = useRef([]);
  const underlineRef = useRef(null);

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navs.map((nav) => document.getElementById(nav.id));
      const scrollY = window.scrollY + window.innerHeight / 4;
      let foundIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i]) {
          const top = sections[i].offsetTop;
          const bottom = top + sections[i].offsetHeight;
          if (
            i === sections.length - 1 &&
            window.innerHeight + window.scrollY >=
              document.body.offsetHeight - 2
          ) {
            foundIdx = i;
            break;
          }
          if (scrollY >= top && scrollY < bottom) {
            foundIdx = i;
            break;
          }
        }
      }
      setActiveIdx(foundIdx);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate underline position
  useEffect(() => {
    const activeBtn = btnRefs.current[activeIdx];
    const underline = underlineRef.current;
    if (activeBtn && underline) {
      const btnRect = activeBtn.getBoundingClientRect();
      const parentRect = activeBtn.parentNode.getBoundingClientRect();
      underline.style.width = `${btnRect.width}px`;
      underline.style.left = `${btnRect.left - parentRect.left}px`;
    }
  }, [activeIdx, btnRefs.current]);

  return (
    <header className="d-flex justify-content-between align-items-center px-5 py-4">
      <div
        className="pill-nav neon-glow align-items-center"
        style={{ position: "relative", gap: "2.5rem" }}
      >
        <Image
          src="/asset/logo.png"
          alt="Logo"
          width={20}
          height={20}
          unoptimized
          className="img-fluid rounded me-4"
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "2.5rem",
          }}
        >
          {navs.map((nav, idx) => (
            <button
              key={nav.id}
              className={`btn-nav nav p-0${
                idx === activeIdx ? " active" : ""
              }`}
              ref={(el) => (btnRefs.current[idx] = el)}
              onClick={() => scrollToSection(nav.id)}
              style={{
                margin: 0,
                background: "none",
                border: "none",
                position: "relative",
              }}
            >
              {nav.label}
            </button>
          ))}
          <div
            ref={underlineRef}
            style={{
              position: "absolute",
              bottom: -1,
              left: 0,
              height: "2px",
              background: "#00aaff",
              borderRadius: "2px",
              transition:
                "left 0.45s cubic-bezier(.4,0,.2,1), width 0.3s cubic-bezier(.4,0,.2,1)",
              boxShadow: "0 0 10px 1px #00aaff80, 0 0 12px #00aaffcc",
              width: btnRefs.current[activeIdx]?.offsetWidth || 0,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </header>
  );
}
