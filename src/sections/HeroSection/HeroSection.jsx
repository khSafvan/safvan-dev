import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./HeroSection.css";

export default function HeroSection() {
  const { hero } = portfolioConfig;

  // Layout:
  // "Hi, I'm [Image] Binjan!"
  // "I'm a UI/UX Designer at"
  // "Global Solutions. [Badge]" (Using dummy company since config doesn't have one, or just "Freelance.")

  return (
    <section className="hero section container" id="home">
      <div className="hero-center-content">
        <h1 className="hero-title">
          {/* Row 1: Hi, I'm [Image] Name! */}
          <div className="title-row">
            <span className="serif-text">Hi, I'm</span>
            <div className="floating-image-wrapper svg-shape">
              <svg viewBox="0 0 200 200" className="cookie-svg">
                <defs>
                  {/* Squircle Shape Path */}
                  <path id="squircle-shape" d="M 100,0 
                    C 20,0 0,20 0,100 
                    C 0,180 20,200 100,200 
                    C 180,200 200,180 200,100 
                    C 200,20 180,0 100,0 Z" />

                  {/* Gradient for Border: Pastel Yellow to Pastel Blue */}
                  <linearGradient id="border-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" stopColor="#FCD34D" /> {/* More vibrant Pastel Yellow (Amber 300) */}
                    <stop offset="100%" stopColor="#64B5F6" /> {/* More visible Pastel Blue (Blue 300) */}
                  </linearGradient>
                </defs>
                <clipPath id="cookie-clip">
                  <use href="#squircle-shape" className="spin-shape" />
                </clipPath>

                {/* Border (Stroke) with Gradient */}
                <use href="#squircle-shape" className="spin-shape" stroke="url(#border-gradient)" strokeWidth="6" fill="none" />

                {/* Image */}
                <image
                  href={hero.image}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath="url(#cookie-clip)"
                />
              </svg>
            </div>
            <span className="serif-text">{hero.name}!</span>
          </div>

          {/* Row 2: I'm a [Role] at */}
          <div className="title-row">
            <span className="sans-text-light">I'm a</span>
            <span className="sans-text-bold">{hero.title}</span>
            <span className="sans-text-light">at</span>
          </div>

          {/* Row 3: [Company] [Badge] */}
          <div className="title-row">
            <span className="sans-text-colored">Binjan Design.</span>

            <div className="status-badge">
              <span className="status-dot"></span>
              <span className="status-text">Open to work</span>
            </div>
          </div>
        </h1>

        <p className="hero-description">
          {hero.description}
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Let's Connect</button>
          <button className="btn-secondary">View Work</button>
        </div>
      </div>

      <div className="hero-footer">
        <div className="social-links">
          {["Twitter", "Dribbble", "Behance", "LinkedIn"].map((social) => (
            <a href="#!" key={social} className="social-link">{social}</a>
          ))}
        </div>

        <div className="discover-more">
          <span>Discover</span>
          <svg className="arrow-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
