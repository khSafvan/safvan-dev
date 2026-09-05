import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./SkillsMatrixSection.css";

export default function SkillsMatrixSection() {
  const { skills } = portfolioConfig;
  const { nativeMernCore, aiAugmentedSystems } = skills;

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
          Web development in MERN, with systems and mobile tooling.
        </p>
      </div>

      {/* Comparative Ledger Grid */}
      <div className="comparative-ledger-grid">
        {/* PANEL 1: NATIVE HANDCRAFTED MERN CORE */}
        <div className="ledger-panel ledger-panel--mern has-crosshairs hairline-border">
          <div className="ledger-panel-header hairline-bottom">
            <div className="panel-badge-wrapper">
              <span className="badge-mern font-mono">HAND-CODED</span>
              <span className="panel-verification-tag font-mono">CORE STACK</span>
            </div>
            <h3 className="panel-title font-serif">{nativeMernCore.categoryName}</h3>
            <p className="panel-description font-sans">{nativeMernCore.description}</p>
          </div>

          <div className="ledger-panel-body">
            {nativeMernCore.groups.map((group) => (
              <div key={group.name} className="skill-group-block hairline-bottom">
                <h4 className="group-title font-mono">{group.name}</h4>
                <div className="skill-tags-wrapper">
                  {group.items.map((item) => {
                    const isSpecial = item.includes("Stored Procedures");
                    return (
                      <span
                        key={item}
                        className={`skill-tag skill-tag--mern ${isSpecial ? "skill-tag--annotated" : ""}`}
                      >
                        {item}
                        {isSpecial && (
                          <span className="skill-annotation font-mono">// -45% DB latency</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 2: AI-AUGMENTED SYSTEMS & APPLIED TOOLING */}
        <div className="ledger-panel ledger-panel--ai has-crosshairs hairline-border">
          <div className="ledger-panel-header hairline-bottom">
            <div className="panel-badge-wrapper">
              <span className="badge-ai font-mono">AI-ASSISTED</span>
              <span className="panel-verification-tag font-mono">COMPILED & TESTED</span>
            </div>
            <h3 className="panel-title font-serif">{aiAugmentedSystems.categoryName}</h3>
            <p className="panel-description font-sans">{aiAugmentedSystems.description}</p>
          </div>

          <div className="ledger-panel-body">
            {aiAugmentedSystems.groups.map((group) => (
              <div key={group.name} className="skill-group-block hairline-bottom">
                <h4 className="group-title font-mono">{group.name}</h4>
                <div className="skill-tags-wrapper">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag skill-tag--ai">
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
