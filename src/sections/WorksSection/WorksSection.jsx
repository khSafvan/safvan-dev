import React, { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./WorksSection.css";

export default function WorksSection() {
  const { works } = portfolioConfig;
  const [activeFilter, setActiveFilter] = useState("all");

  const mernCount = works.filter((w) => w.type === "mern").length;
  const aiCount = works.filter((w) => w.type === "ai").length;

  const filteredWorks = works.filter((work) => {
    if (activeFilter === "mern") return work.type === "mern";
    if (activeFilter === "ai") return work.type === "ai";
    return true;
  });

  // Refresh ScrollTrigger when filter updates
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [activeFilter, filteredWorks.length]);

  const featuredWork = filteredWorks[0];
  const supportingWorks = filteredWorks.slice(1);

  // Helper to determine asymmetric grid span class
  const getAsymmetricClass = (index) => {
    const cycle = index % 6;
    switch (cycle) {
      case 0:
        return "span-wide"; // 7 cols
      case 1:
        return "span-compact"; // 5 cols
      case 2:
        return "span-compact"; // 5 cols
      case 3:
        return "span-wide"; // 7 cols
      case 4:
        return "span-half"; // 6 cols
      case 5:
        return "span-half"; // 6 cols
      default:
        return "span-full";
    }
  };

  return (
    <section className="works-section section container" id="works">
      {/* Section Editorial Header */}
      <div className="section-header-block">
        <div className="works-structural-meta font-mono">
          <span className="structural-tag">[ 03 / SELECTED WORKS: PRODUCTION & SYSTEMS ]</span>
          <span className="works-curated-badge font-mono">EDITORIAL CURATION</span>
        </div>

        <h2 className="section-title font-serif">Production Web Platforms & Systems Engineering</h2>
        <p className="section-subtitle font-sans">
          Selected case studies in full-stack web applications, native mobile, and bare-metal systems.
        </p>

        {/* Filter Navigation Tabs */}
        <div className="works-filter-bar" role="tablist" aria-label="Project Category Filter">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "all"}
            className={`filter-tab font-mono ${activeFilter === "all" ? "filter-tab--active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All Projects [{works.length}]
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "mern"}
            className={`filter-tab font-mono ${activeFilter === "mern" ? "filter-tab--active" : ""}`}
            onClick={() => setActiveFilter("mern")}
          >
            Web & MERN [{mernCount}]
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "ai"}
            className={`filter-tab font-mono ${activeFilter === "ai" ? "filter-tab--active" : ""}`}
            onClick={() => setActiveFilter("ai")}
          >
            Systems & Mobile (AI-Assisted) [{aiCount}]
          </button>
        </div>
      </div>

      {/* Asymmetric Works Container */}
      <div className="works-editorial-layout">
        {/* 1. Prominent Lead Feature Block */}
        {featuredWork && (
          <article className="work-feature-block">
            <div className="feature-main-content">
              <div className="feature-meta-bar font-mono">
                <span className="feature-badge">
                  ★ FEATURED CASE STUDY // {featuredWork.category}
                </span>
                <span className="feature-period">{featuredWork.period}</span>
              </div>

              <h3 className="feature-title font-serif">{featuredWork.title}</h3>
              <div className="feature-role font-mono">// {featuredWork.role}</div>

              {/* Prominent Architectural Impact Block */}
              {featuredWork.metric && (
                <div className="feature-impact-block">
                  <span className="impact-tag font-mono">⚡ ARCHITECTURAL IMPACT:</span>
                  <span className="impact-value font-mono">{featuredWork.metric}</span>
                </div>
              )}

              <p className="feature-description font-sans">{featuredWork.description}</p>

              {/* Tech Stack Badges */}
              <div className="feature-stack-row">
                {featuredWork.stack.map((tech) => (
                  <span key={tech} className="tech-badge font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="feature-actions-row font-mono">
                {featuredWork.github ? (
                  <a
                    href={featuredWork.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary feature-btn"
                    aria-label={`View ${featuredWork.title} source on GitHub`}
                  >
                    <span>Source Code</span>
                    <span className="btn-arrow font-mono">↗</span>
                  </a>
                ) : (
                  <span className="feature-proprietary font-mono">
                    // Enterprise / Proprietary Core
                  </span>
                )}
                {featuredWork.link && (
                  <a
                    href={featuredWork.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline feature-btn"
                    aria-label={`View ${featuredWork.title} details`}
                  >
                    <span>Case Details</span>
                    <span className="btn-arrow font-mono">→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Feature Side Spec Ledger (Solid Contrasting Cream Block) */}
            <div className="feature-spec-ledger font-mono">
              <div className="spec-ledger-header">
                <span className="ledger-title">SYSTEM AUDIT SPEC</span>
                <span className="ledger-status">[VERIFIED]</span>
              </div>

              <div className="spec-ledger-rows">
                <div className="spec-item">
                  <span className="spec-label">INDEX</span>
                  <span className="spec-val">0{featuredWork.id} // CORE</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">ENGINEERING CLASS</span>
                  <span className="spec-val">
                    {featuredWork.type === "mern" ? "Native MERN Stack" : "Systems & Mobile"}
                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">PRIMARY OUTCOME</span>
                  <span className="spec-val">{featuredWork.metric.split("|")[0].trim()}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">LEAD TECHNOLOGIES</span>
                  <span className="spec-val">{featuredWork.stack.slice(0, 3).join(", ")}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">COMMERCIAL DEPLOYMENT</span>
                  <span className="spec-val">{featuredWork.period}</span>
                </div>
              </div>

              <div className="spec-ledger-footer">
                <span>ARCHITECTURAL INTEGRITY // 100%</span>
              </div>
            </div>
          </article>
        )}

        {/* 2. Asymmetric Secondary Blocks Grid */}
        <div className="works-asymmetric-grid">
          {supportingWorks.map((work, idx) => {
            const spanClass = getAsymmetricClass(idx);
            const isContrastingCream = idx % 2 === 1;
            const bgClass = isContrastingCream ? "asym-card--cream" : "asym-card--surface";
            const formattedIndex = work.id < 10 ? `0${work.id}` : `${work.id}`;

            return (
              <article
                key={work.id}
                className={`asym-card ${spanClass} ${bgClass}`}
              >
                {/* Header Strip */}
                <div className="asym-card-header font-mono">
                  <div className="asym-header-left">
                    <span className="asym-index font-serif">{formattedIndex}.</span>
                    <span className="asym-category">{work.category}</span>
                  </div>
                  <span className="asym-period">{work.period}</span>
                </div>

                {/* Body Content */}
                <div className="asym-card-body">
                  <h4 className="asym-title font-serif">{work.title}</h4>
                  <div className="asym-role font-mono">// {work.role}</div>

                  {/* Prominent Metric Box */}
                  {work.metric && (
                    <div className="asym-metric-box font-mono">
                      <span className="asym-metric-icon">⚡</span>
                      <span className="asym-metric-text">{work.metric}</span>
                    </div>
                  )}

                  <p className="asym-description font-sans">{work.description}</p>

                  {/* Tech Stack Badges */}
                  <div className="asym-stack-wrap">
                    {work.stack.map((tech) => (
                      <span key={tech} className="tech-badge font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="asym-card-footer font-mono">
                  {work.github ? (
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="asym-action-link"
                      aria-label={`View ${work.title} on GitHub`}
                    >
                      <span>Source Code</span>
                      <span className="asym-arrow">↗</span>
                    </a>
                  ) : (
                    <span className="asym-proprietary">// Enterprise / Proprietary</span>
                  )}
                  {work.link && (
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="asym-action-link asym-link-highlight"
                      aria-label={`View ${work.title} case details`}
                    >
                      <span>Case Details</span>
                      <span className="asym-arrow">→</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
