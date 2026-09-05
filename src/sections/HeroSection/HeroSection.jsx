import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./HeroSection.css";

export default function HeroSection() {
  const { hero, personal } = portfolioConfig;

  const handleOpenTerminal = () => {
    window.dispatchEvent(new CustomEvent("toggle-terminal"));
  };

  return (
    <section className="hero section container" id="home">
      {/* Editorial Meta Bar: Relocation Notice & Category Micro-label */}
      <div className="hero-meta-bar">
        <div className="hero-relocation-pill">
          <span className="pill-dot"></span>
          <span className="pill-text font-mono">{hero.relocationNotice}</span>
        </div>
        <div className="hero-structural-tag font-mono">
          <span className="tag-bracket">[</span>
          <span className="tag-number">00</span>
          <span className="tag-divider">/</span>
          <span className="tag-name">PROLOGUE: FULL STACK & SYSTEMS</span>
          <span className="tag-bracket">]</span>
        </div>
      </div>

      {/* Main Editorial Stage: Oversized Typography Interacting with Visual */}
      <div className="hero-editorial-stage">
        {/* Left Column: Eyebrow, Giant Editorial Headline, Description, Actions */}
        <div className="hero-content-column">
          <div className="hero-headline-group">
            <div className="hero-eyebrow font-mono">
              <span className="eyebrow-arrow font-mono">↳</span>
              <span className="eyebrow-text">ENGINEERING PORTFOLIO</span>
            </div>

            <h1 className="hero-display-name font-serif">
              <span className="name-line name-line--first">Safvan</span>
              <span className="name-line name-line--second">Khalifa</span>
            </h1>

            <p className="hero-editorial-lead font-sans">
              {hero.description}
            </p>
          </div>

          {/* Primary Call-to-Actions */}
          <div className="hero-actions">
            <a href="#works" className="btn-primary hero-btn">
              <span>{hero.ctaText}</span>
              <span className="btn-arrow font-mono">→</span>
            </a>
            <a href="#contact" className="btn-outline hero-btn">
              <span>{hero.ctaSecondary}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Stage with Geometric Swoop & Interacting Blueprint Card */}
        <div className="hero-visual-stage">
          {/* Subtle Decorative Geometric Swoop (Forest Green #1F6B4F) */}
          <div className="hero-swoop-wrapper" aria-hidden="true">
            <svg
              className="hero-swoop-svg"
              viewBox="0 0 460 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dynamic primary swoop curve */}
              <path
                d="M 35 430 C 50 200, 210 50, 435 65"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Secondary precision dashed arc */}
              <path
                d="M 75 450 C 95 245, 245 95, 455 110"
                stroke="var(--color-primary)"
                strokeWidth="1.25"
                strokeDasharray="4 6"
                opacity="0.45"
              />
              {/* Subtle inner geometric circle guide */}
              <circle
                cx="250"
                cy="230"
                r="190"
                stroke="var(--color-primary)"
                strokeWidth="1"
                opacity="0.12"
              />
              {/* Precision Crosshair Accent */}
              <path
                d="M 425 65 L 445 65 M 435 55 L 435 75"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
              />
              <circle cx="35" cy="430" r="4" fill="var(--color-primary)" />
            </svg>
          </div>

          {/* Overlapping Architectural Blueprint Card */}
          <div className="avatar-blueprint-card has-crosshairs hairline-border">
            <div className="avatar-header hairline-bottom">
              <span className="avatar-tag font-mono">FIG 01. CORE DEVELOPER</span>
              <span className="avatar-status font-mono">ACTIVE [60 FPS]</span>
            </div>

            <div className="avatar-image-container">
              <img
                src={hero.image}
                alt={`${hero.name} 8-bit developer avatar`}
                className="avatar-image"
                loading="eager"
              />
            </div>

            {/* Interactive Terminal Trigger Button */}
            <button
              type="button"
              className="terminal-trigger-btn hairline-top font-mono"
              onClick={handleOpenTerminal}
              title="Click or press Ctrl+K to open interactive terminal drawer"
              aria-label="Open developer terminal drawer"
            >
              <span className="terminal-prefix">{personal.terminalPrompt}</span>
              <span className="terminal-cursor">_</span>
              <span className="terminal-hotkey-badge">Ctrl+K</span>
            </button>
          </div>
        </div>
      </div>

      {/* Verified Metrics Blueprint Strip */}
      <div className="hero-metrics-strip hairline-border">
        {hero.metrics.map((metric, index) => (
          <div key={metric.label} className="metric-item">
            <div className="metric-value font-serif">{metric.value}</div>
            <div className="metric-label font-mono">{metric.label}</div>
            {index < hero.metrics.length - 1 && <span className="metric-divider"></span>}
          </div>
        ))}
      </div>
    </section>
  );
}
