import React, { useState, useEffect } from "react";
import { portfolioConfig } from "../../../config/portfolio";
import "./Header.css";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Methodology", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { name, resumeUrl } = portfolioConfig.personal;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for section spy
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "works", "experience", "methodology", "contact"];
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

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header-container container">
        {/* Brand & Terminal Stamp */}
        <a href="#home" className="header-brand" aria-label="Safvan Khalifa Home">
          <span className="brand-name">{name}</span>
          <span className="brand-prompt-badge">zack@ghost</span>
        </a>

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
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions: Resume CTA & Mobile Toggle */}
        <div className="header-actions">
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
          </div>
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item, index) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                    onClick={handleNavClick}
                  >
                    <span className="mobile-nav-index font-mono">0{index + 1}.</span>
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
              Download Verified CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
