import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./AboutSection.css";

export default function AboutSection() {
  const { about, personal } = portfolioConfig;

  const handleOpenTerminalBio = () => {
    window.dispatchEvent(new CustomEvent("toggle-terminal"));
  };

  return (
    <section className="about section container" id="about">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 01 / BIOGRAPHY & SPECIFICATIONS ]</span>
          <span className="structural-status">PROFILE VERIFIED</span>
        </div>
        <h2 className="section-title font-serif">{about.title}</h2>
      </div>

      <div className="about-grid">
        {/* Left Column: Narrative Craftsmanship */}
        <div className="about-narrative">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}


        </div>

        {/* Right Column: Architectural Blueprint Card */}
        <div className="about-sidebar">
          <div className="blueprint-card has-crosshairs hairline-border">
            <div className="blueprint-card-header hairline-bottom">
              <span className="blueprint-tag font-mono">SPECIFICATION SHEET // PERS_01</span>
              <span className="blueprint-status font-mono">VERIFIED</span>
            </div>

            <div className="blueprint-specs-list">
              <div className="spec-row hairline-bottom">
                <span className="spec-key font-mono">ACADEMIC DEGREE</span>
                <span className="spec-value font-serif">{about.blueprint.degree}</span>
              </div>

              <div className="spec-row hairline-bottom">
                <span className="spec-key font-mono">COMMERCIAL EXPERIENCE</span>
                <span className="spec-value font-serif">{about.blueprint.experienceYears}</span>
              </div>

              <div className="spec-row hairline-bottom">
                <span className="spec-key font-mono">CORE WEB STACK</span>
                <span className="spec-value font-mono spec-highlight-sage">{about.blueprint.nativeDomain}</span>
              </div>

              <div className="spec-row hairline-bottom">
                <span className="spec-key font-mono">ADDITIONAL SYSTEMS</span>
                <span className="spec-value font-mono spec-highlight-terracotta">{about.blueprint.systemsDomain}</span>
              </div>

              <div className="spec-row hairline-bottom">
                <span className="spec-key font-mono">RELOCATION DESTINATION</span>
                <span className="spec-value font-serif">{about.blueprint.relocation}</span>
              </div>

              <div className="spec-row">
                <span className="spec-key font-mono">INTERESTS & DISCIPLINES</span>
                <span className="spec-value font-sans">{about.blueprint.disciplines}</span>
              </div>
            </div>

            {/* CLI Drawer Shortcut Footer */}
            <div className="blueprint-card-footer hairline-top">
              <button
                type="button"
                className="blueprint-terminal-btn font-mono"
                onClick={handleOpenTerminalBio}
                aria-label="Open CLI to inspect developer bio"
              >
                <span>{personal.terminalPrompt} cat bio</span>
                <span className="blueprint-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
