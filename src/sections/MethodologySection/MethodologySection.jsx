import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./MethodologySection.css";

export default function MethodologySection() {
  const { methodology } = portfolioConfig;

  return (
    <section className="methodology section container" id="methodology">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 05 / ENGINEERING ETHOS: METHODOLOGY & PILLARS ]</span>
          <span className="structural-status">PRACTICAL STANDARDS</span>
        </div>
        <h2 className="section-title font-serif">How I Work: Practical Standards & Verification</h2>
        <p className="section-subtitle font-sans">
          Principles that guide my daily work across web development and systems programming.
        </p>
      </div>

      {/* 3-Pillar Architectural Grid */}
      <div className="methodology-grid">
        {methodology.map((pillar) => (
          <div key={pillar.id} className="methodology-card has-crosshairs hairline-border">
            <div className="methodology-card-header hairline-bottom">
              <span className="pillar-number font-serif">{pillar.number}</span>
              <span className="pillar-tagline font-mono">{pillar.tagline}</span>
            </div>

            <div className="methodology-card-body">
              <h3 className="pillar-title font-serif">{pillar.title}</h3>
              <p className="pillar-description font-sans">{pillar.description}</p>
            </div>

            <div className="methodology-card-footer hairline-top">
              <span className="pillar-stamp font-mono">PILLAR // {pillar.id.toUpperCase()}</span>
              <span className="pillar-status font-mono">ENFORCED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
