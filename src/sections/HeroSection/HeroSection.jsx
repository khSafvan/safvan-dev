import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./HeroSection.css";

export default function HeroSection() {
  const { hero, personal } = portfolioConfig;

  return (
    <section className="hero section container">
      <div className="hero-grid">
        {/* Left Column: Text & Stats */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">{hero.greeting}</span>
            <br />
            <span className="name">{hero.name}</span>
          </h1>

          <a href={`mailto:${personal.email}`} className="hero-email">
            {personal.email}
          </a>

          <div className="hero-stat">
            <span className="stat-number">{hero.experience}</span>
            <span className="stat-label">YEARS<br />EXPERIENCE</span>
          </div>
        </div>

        {/* Right Column: Image & Badge */}
        <div className="hero-visual">
          <div className="brush-background"></div>
          <img
            src={hero.image}
            alt={hero.name}
            className="hero-image"
          />

          <div className="hero-quote">
            <p>{hero.description}</p>
          </div>

          <div className="hero-badge">
            <div className="badge-circle">
              {/* Simple CSS Badge or SVG */}
              <svg viewBox="0 0 100 100" className="badge-svg">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text width="100">
                  <textPath href="#curve" className="badge-text" startOffset="50%" textAnchor="middle">
                    IDF CERTIFIED PROFESSIONAL
                  </textPath>
                </text>
                <text x="50" y="55" className="badge-center-text" textAnchor="middle">UI/UX</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
