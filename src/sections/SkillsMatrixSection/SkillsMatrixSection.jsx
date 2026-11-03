import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./SkillsMatrixSection.css";

export default function SkillsMatrixSection() {
  const { skills } = portfolioConfig;
  const { coreMern, toolingSystems } = skills;

  return (
    <section className="skills-matrix section container" id="skills">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 02 / COMPARATIVE MATRIX: TECHNICAL CAPABILITIES ]</span>
          <span className="structural-status">DUAL-DOMAIN</span>
        </div>
        <h2 className="section-title font-serif">{skills.title}</h2>
        <p className="section-subtitle font-sans">
          Production full-stack MERN engineering for US enterprise clients, complemented by Linux systems and low-level exploratory tooling.
        </p>
      </div>

      {/* Comparative Ledger Grid */}
      <div className="comparative-ledger-grid">
        {/* PANEL 1: CORE WEB ENGINEERING (FULL STACK MERN) - PRIMARY COMMERCIAL STACK */}
        <div className="ledger-panel ledger-panel--mern has-crosshairs hairline-border">
          <div className="ledger-panel-header hairline-bottom">
            <div className="panel-badge-wrapper">
              <span className="badge-mern font-mono">{coreMern.badgeText}</span>
              <span className="panel-verification-tag font-mono">COMMERCIAL PRODUCTION</span>
            </div>
            <h3 className="panel-title font-serif">{coreMern.categoryName}</h3>
            <p className="panel-description font-sans">{coreMern.description}</p>
          </div>

          <div className="ledger-panel-body custom-scrollbar">
            {coreMern.groups.map((group) => (
              <div key={group.name} className="skill-group-block hairline-bottom">
                <h4 className="group-title font-mono">{group.name}</h4>
                <div className="skill-tags-wrapper">
                  {group.items.map((item) => {
                    const isStoredProcs = item.includes("Stored Procedures");
                    const isConcur = item.includes("US Client Collaboration");
                    return (
                      <span
                        key={item}
                        className={`skill-tag skill-tag--mern ${isStoredProcs || isConcur ? "skill-tag--annotated" : ""}`}
                      >
                        {item}
                        {isStoredProcs && (
                          <span className="skill-annotation font-mono">// -45% DB latency</span>
                        )}
                        {isConcur && (
                          <span className="skill-annotation font-mono">// US Teams</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: SYSTEMS, TOOLING & INFRASTRUCTURE - DEV TOOLING & EXPLORATORY */}
        <div className="ledger-panel ledger-panel--systems has-crosshairs hairline-border">
          <div className="ledger-panel-header hairline-bottom">
            <div className="panel-badge-wrapper">
              <span className="badge-systems font-mono">{toolingSystems.badgeText}</span>
              <span className="panel-verification-tag font-mono">EXPLORATORY & DEVOPS</span>
            </div>
            <h3 className="panel-title font-serif">{toolingSystems.categoryName}</h3>
            <p className="panel-description font-sans">{toolingSystems.description}</p>
          </div>

          <div className="ledger-panel-body custom-scrollbar">
            {toolingSystems.groups.map((group) => (
              <div key={group.name} className="skill-group-block hairline-bottom">
                <h4 className="group-title font-mono">{group.name}</h4>
                <div className="skill-tags-wrapper">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag skill-tag--systems">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
