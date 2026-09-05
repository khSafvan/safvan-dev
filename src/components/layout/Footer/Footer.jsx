import React from "react";
import { portfolioConfig } from "../../../config/portfolio";
import "./Footer.css";

export default function Footer() {
  const { personal } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#works" },
    { label: "Experience", href: "#experience" },
    { label: "Methodology", href: "#methodology" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer hairline-top">
      <div className="footer-container container">
        {/* Top Tier: Brand, Status, and Back to Top */}
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <span className="footer-brand-name font-serif">{personal.name}</span>
            <p className="footer-brand-tagline font-sans">
              Full Stack Web Developer & Systems Craftsman
            </p>
            <div className="footer-status-pill font-mono">
              <span className="footer-status-dot"></span>
              <span>Available for US Engineering Roles (Relocating Early 2027)</span>
            </div>
          </div>

          <button
            type="button"
            className="footer-back-top-btn font-mono"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <span className="back-top-arrow">↑</span>
          </button>
        </div>

        {/* Middle Tier: Navigation Links & Verified Digital Profiles */}
        <div className="footer-middle-row hairline-top">
          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.label} className="footer-nav-item">
                  <a href={link.href} className="footer-nav-link font-sans">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-social-row">
            <a
              href={`mailto:${personal.email}`}
              className="footer-social-pill font-mono"
              aria-label="Send direct email"
              title="Open mail client (mailto:)"
            >
              Email ↗
            </a>
            <a
              href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
              className="footer-social-pill font-mono"
              aria-label="Call direct phone line"
              title="Click to place phone call (tel:)"
            >
              Call ↗
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill font-mono"
            >
              GitHub ↗
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill font-mono"
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill font-mono footer-social-pill--accent"
              download
            >
              Resume PDF ↓
            </a>
          </div>
        </div>

        {/* Bottom Tier: Colophon, Copyright & Terminal Metadata Stamp */}
        <div className="footer-bottom-row hairline-top">
          <div className="footer-copyright font-sans">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div className="footer-colophon font-sans">
            Crafted with React 19, Vite, GSAP ScrollTrigger & Lenis.
          </div>

          <div className="footer-system-stamp font-mono">
            Host: ghost | System: Ryoku Dev (Arch/CachyOS) | Shell: fish
          </div>
        </div>
      </div>
    </footer>
  );
}
