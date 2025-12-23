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
                  {/* 7-Sided Cookie Shape Path */}
                  {/* Okay, I will use a simpler verified "flower" path from a standard library for "7 petal" */}
                  <path id="cookie-shape" d="M100,15 C115,15 128,25 140,32 C155,40 172,40 182,55 C192,70 190,88 195,105 C200,122 195,140 185,155 C175,170 158,175 145,185 C132,195 115,198 100,195 C85,192 68,190 55,180 C42,170 32,155 25,142 C18,128 10,115 12,98 C14,80 25,65 35,52 C45,40 60,30 75,22 C88,15 100,15 100,15Z" />
                </defs>
                <clipPath id="cookie-clip">
                  <use href="#cookie-shape" />
                </clipPath>

                {/* Border (Stroke) */}
                <use href="#cookie-shape" stroke="white" strokeWidth="8" fill="none" />

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
