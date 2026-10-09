import React, { useState, useEffect, useRef } from "react";
import { portfolioConfig } from "../../../config/portfolio";
import Magnetic from "../../common/Magnetic";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Works", href: "#works", index: "01" },
  { label: "Capabilities", href: "#skills", index: "02" },
  { label: "About", href: "#about", index: "03" },
  { label: "Experience", href: "#experience", index: "04" },
  { label: "Ethos", href: "#methodology", index: "05" },
  { label: "Recommendations", href: "#testimonials", index: "06" },
  { label: "Contact", href: "#contact", index: "07" },
];

const SLIDE_INDEX_MAP = {
  home: "00",
  works: "01",
  skills: "02",
  about: "03",
  experience: "04",
  methodology: "05",
  testimonials: "06",
  contact: "07",
};

export default function Header() {
  const { name, resumeUrl } = portfolioConfig.personal;
  const headerRef = useRef(null);
  const svgRef = useRef(null);
  const railPathRef = useRef(null);
  const fillPathRef = useRef(null);
  const clipRectRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll progress tracking & corner-wrapping SVG path (Landscape notch is always active)
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    let ticking = false;

    const updateHeader = () => {
      const currentY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const overallScroll = docHeight > 0 ? Math.min(Math.max(currentY / docHeight, 0), 1) : 0;

      // In landscape/desktop, the topbar is always the refined notch with 18px circular corners
      const isLandscape = window.matchMedia("(min-width: 861px), (orientation: landscape) and (min-width: 768px)").matches;
      const radiusPx = isLandscape ? 18 : 0;

      const W = headerEl.offsetWidth || window.innerWidth;
      const H = 76;
      const t = 2.5;

      let pathD;
      if (radiusPx > 0.5) {
        // Tapered corner wrap: 2.5px on bottom, tapering to 0px at vertical edges
        pathD = `M 0 ${H - radiusPx} A ${radiusPx} ${radiusPx} 0 0 0 ${radiusPx} ${H} L ${W - radiusPx} ${H} A ${radiusPx} ${radiusPx} 0 0 0 ${W} ${H - radiusPx} Q ${W} ${H - t} ${W - radiusPx} ${H - t} L ${radiusPx} ${H - t} Q 0 ${H - t} 0 ${H - radiusPx} Z`;
      } else {
        pathD = `M 0 ${H - t} L ${W} ${H - t} L ${W} ${H} L 0 ${H} Z`;
      }

      if (svgRef.current) {
        svgRef.current.setAttribute("viewBox", `0 0 ${W} ${H}`);
        svgRef.current.setAttribute("width", `${W}`);
      }
      if (railPathRef.current) railPathRef.current.setAttribute("d", pathD);
      if (fillPathRef.current) fillPathRef.current.setAttribute("d", pathD);
      if (clipRectRef.current) clipRectRef.current.setAttribute("width", `${W * overallScroll}`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateHeader();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // IntersectionObserver for section spy
  useEffect(() => {
    const sectionIds = ["home", "works", "skills", "about", "experience", "methodology", "testimonials", "contact"];
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (window.lenis && href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        window.lenis.scrollTo(el, { duration: 0.85 });
      }
    }
  };

  const handleToggleTerminal = () => {
    window.dispatchEvent(new CustomEvent("toggle-terminal"));
  };

  const currentSlideIndex = SLIDE_INDEX_MAP[activeSection] || "00";

  return (
    <header
      ref={headerRef}
      className={`header ${mobileMenuOpen ? "header--mobile-open" : ""}`}
    >
      <div className="header-container container">
        {/* Brand & Terminal Stamp & Merged Deck Slide Telemetry */}
        <div className="header-brand-wrap">
          <a
            href="#home"
            className="header-brand"
            aria-label="Safvan Khalifa Home"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <span className="brand-name">{name}</span>
          </a>
          <Magnetic strength={0.22}>
            <button
              type="button"
              className="brand-prompt-badge font-mono"
              onClick={handleToggleTerminal}
              title="Open terminal drawer (Ctrl+K)"
              aria-label="Toggle terminal drawer"
            >
              zack@ghost
            </button>
          </Magnetic>
          {/* Merged Presentation Deck Slide Telemetry */}
          <div className="header-slide-badge font-mono" title={`Deck Slide: ${currentSlideIndex} of 07`}>
            <span className="slide-badge-num">{currentSlideIndex}</span>
            <span className="slide-badge-sep">/</span>
            <span className="slide-badge-total">07</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="nav-link-index font-mono">{item.index}.</span>
                    <span className="nav-link-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Terminal Trigger, Resume CTA & Mobile Toggle */}
        <div className="header-actions">
          <Magnetic strength={0.25}>
            <button
              type="button"
              className="btn-terminal-trigger font-mono"
              onClick={handleToggleTerminal}
              aria-label="Open developer terminal drawer (Ctrl+K)"
              title="Open Terminal (Ctrl+K)"
            >
              <span className="terminal-trigger-prompt">&gt;_</span>
              <span className="terminal-trigger-kbd">⌘K</span>
            </button>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
              download
              aria-label="Download verified PDF resume"
            >
              <span className="resume-icon">↓</span>
              <span className="resume-text">Resume</span>
            </a>
          </Magnetic>

          <button
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? "mobile-toggle--active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer--open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner container">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-tag font-mono">// NAVIGATION MENU</span>
            <button
              type="button"
              className="mobile-terminal-btn font-mono"
              onClick={() => {
                setMobileMenuOpen(false);
                handleToggleTerminal();
              }}
            >
              [ &gt;_ TERMINAL ]
            </button>
          </div>
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="mobile-nav-index font-mono">{item.index}.</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-drawer-footer">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-resume-btn"
              download
            >
              Download Verified CV (PDF) ↓
            </a>
          </div>
        </div>
      </div>

      {/* Page Scroll Progress SVG with corner-wrap tapering to zero at vertical edges */}
      <svg
        ref={svgRef}
        className="header-progress-svg"
        height={76}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="header-progress-clip">
            <rect ref={clipRectRef} x="0" y="0" width="0" height="76" />
          </clipPath>
        </defs>

        {/* Subtle Background Track Rail (Tapered) */}
        <path
          ref={railPathRef}
          fill="rgba(31, 107, 79, 0.12)"
        />

        {/* Active Forest Green Fill (Tapered Corner Wrap) */}
        <path
          ref={fillPathRef}
          fill="var(--color-primary)"
          clipPath="url(#header-progress-clip)"
        />
      </svg>
    </header>
  );
}
