import React, { useState, useEffect, useMemo } from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./WorksSection.css";

export default function WorksSection() {
  const { works } = portfolioConfig;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState(works[0]?.id || 1);

  const mernCount = useMemo(() => works.filter((w) => w.type === "mern").length, [works]);
  const aiCount = useMemo(() => works.filter((w) => w.type === "ai").length, [works]);

  const filteredWorks = useMemo(() => {
    if (activeFilter === "mern") return works.filter((work) => work.type === "mern");
    if (activeFilter === "ai") return works.filter((work) => work.type === "ai");
    return works;
  }, [works, activeFilter]);

  // Keep selected project within filtered list
  useEffect(() => {
    const exists = filteredWorks.some((w) => w.id === selectedProjectId);
    if (!exists && filteredWorks.length > 0) {
      setSelectedProjectId(filteredWorks[0].id);
    }
  }, [filteredWorks, selectedProjectId]);

  const activeProject = works.find((w) => w.id === selectedProjectId) || works[0];

  return (
    <section className="works-section section container" id="works">
      {/* Section Editorial Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 01 / SELECTED WORKS: COMMERCIAL & ENTERPRISE MERN ]</span>
          <span className="structural-status">US CLIENTS & PRODUCTION</span>
        </div>

        <div className="works-header-row">
          <div>
            <h2 className="section-title font-serif">Selected Works</h2>
            <p className="section-subtitle font-sans">
              Commercial Web Applications Built for US & International Clients
            </p>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="works-filter-bar" role="tablist" aria-label="Project Category Filter">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "all"}
              className={`filter-tab font-mono ${activeFilter === "all" ? "filter-tab--active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All [{works.length}]
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "mern"}
              className={`filter-tab font-mono ${activeFilter === "mern" ? "filter-tab--active" : ""}`}
              onClick={() => setActiveFilter("mern")}
            >
              Commercial MERN [{mernCount}]
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === "ai"}
              className={`filter-tab font-mono ${activeFilter === "ai" ? "filter-tab--active" : ""}`}
              onClick={() => setActiveFilter("ai")}
            >
              Exploratory Systems [{aiCount}]
            </button>
          </div>
        </div>
      </div>

      {/* Master-Detail Workstation Console */}
      <div className="works-workstation-console hairline-border has-crosshairs">
        {/* Left Column: Project Selector Index */}
        <aside className="works-selector-pane hairline-right" aria-label="Project Navigation List">
          <div className="selector-pane-header hairline-bottom font-mono">
            <span className="pane-header-title">PROJECT INDEX</span>
            <span className="pane-header-count">{filteredWorks.length} ENTRIES</span>
          </div>

          <div className="works-selector-list custom-scrollbar" role="tablist" aria-orientation="vertical">
            {filteredWorks.map((work, index) => {
              const isSelected = work.id === selectedProjectId;
              const isUSClient = work.id === 1;
              const isCommercial = work.type === "mern";

              return (
                <button
                  key={work.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`works-selector-item hairline-bottom ${isSelected ? "works-selector-item--active" : ""}`}
                  onClick={() => setSelectedProjectId(work.id)}
                >
                  <div className="selector-item-top font-mono">
                    <span className="selector-item-num">0{work.id}</span>
                    <span className="selector-badge-tag">
                      {isUSClient ? "US CLIENT" : isCommercial ? "COMMERCIAL" : "EXPLORATORY"}
                    </span>
                  </div>

                  <h3 className="selector-item-title font-serif">{work.title}</h3>
                  <div className="selector-item-role font-mono">{work.period} // {work.stack.slice(0, 3).join(", ")}</div>

                  {work.metric && (
                    <div className="selector-item-metric font-mono">
                      <span className="metric-bullet">↳</span>
                      <span>{work.metric}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Active Project Case Study Showcase Stage */}
        <main className="works-showcase-stage" aria-live="polite">
          {/* Showcase Top Control Bar */}
          <div className="showcase-topbar hairline-bottom font-mono">
            <div className="showcase-meta-group">
              <span className="showcase-project-num">PROJECT // 0{activeProject.id}</span>
              <span className="showcase-category-tag">
                {activeProject.type === "mern" ? "COMMERCIAL MERN CORE" : "SYSTEMS EXPLORATION"}
              </span>
            </div>

            <div className="showcase-actions-group">
              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-action-btn font-mono"
                  aria-label={`Open live demonstration for ${activeProject.title}`}
                >
                  <span>Live Demo</span>
                  <span className="btn-arrow">↗</span>
                </a>
              )}
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-action-btn font-mono"
                  aria-label={`Open GitHub repository for ${activeProject.title}`}
                >
                  <span>Source Code</span>
                  <span className="btn-arrow">↗</span>
                </a>
              )}
              {activeProject.isProprietary && (
                <span className="proprietary-pill font-mono">
                  <span>PROPRIETARY CLIENT SYSTEM</span>
                </span>
              )}
            </div>
          </div>

          {/* Showcase Scrollable Content Stage */}
          <div className="showcase-scroll-body custom-scrollbar">
            {/* Title & Client Context */}
            <div className="showcase-headline-block">
              <div className="showcase-role-banner font-mono">
                {activeProject.role}
              </div>
              <h3 className="showcase-title font-serif">{activeProject.title}</h3>
              <p className="showcase-description font-sans">{activeProject.description}</p>
            </div>

            {/* 30-Second Spec Bar */}
            <div className="showcase-spec-bar hairline-border">
              <div className="spec-tile hairline-right">
                <span className="tile-label font-mono">KEY METRIC</span>
                <span className="tile-val font-serif tile-val--accent">{activeProject.metric}</span>
              </div>
              <div className="spec-tile hairline-right">
                <span className="tile-label font-mono">RUNTIME TARGET</span>
                <span className="tile-val font-mono">{activeProject.specLedger.runtimeTarget}</span>
              </div>
              <div className="spec-tile hairline-right">
                <span className="tile-label font-mono">PRIMARY STACK</span>
                <span className="tile-val font-mono">{activeProject.stack.join(" · ")}</span>
              </div>
              <div className="spec-tile">
                <span className="tile-label font-mono">DEPLOYMENT</span>
                <span className="tile-val font-mono">{activeProject.specLedger.deploymentStatus}</span>
              </div>
            </div>

            {/* 4-Part Retrospective Grid */}
            <div className="showcase-retrospective-grid">
              <div className="retro-card retro-card--problem hairline-border">
                <div className="retro-header hairline-bottom font-mono">
                  <span className="retro-tag">01 // PROBLEM / REQUIREMENT</span>
                </div>
                <p className="retro-text font-sans">{activeProject.retrospective.bottleneck}</p>
              </div>

              <div className="retro-card retro-card--constraints hairline-border">
                <div className="retro-header hairline-bottom font-mono">
                  <span className="retro-tag">02 // PRODUCTION CONSTRAINTS</span>
                </div>
                <p className="retro-text font-sans">{activeProject.retrospective.constraints}</p>
              </div>

              <div className="retro-card retro-card--solution hairline-border">
                <div className="retro-header hairline-bottom font-mono">
                  <span className="retro-tag">03 // ENGINEERING SOLUTION</span>
                </div>
                <p className="retro-text font-sans">{activeProject.retrospective.solution}</p>
              </div>

              <div className="retro-card retro-card--outcome hairline-border">
                <div className="retro-header hairline-bottom font-mono">
                  <span className="retro-tag">04 // MEASURED OUTCOME</span>
                </div>
                <p className="retro-text font-sans">{activeProject.retrospective.outcome}</p>
              </div>
            </div>

            {/* Project 01 Exclusive: Benchmark Metrics Comparison & Pipeline */}
            {activeProject.id === 1 && (
              <div className="showcase-deep-dive-block">
                <div className="deep-dive-grid">
                  {/* Before / After Table */}
                  <div className="benchmark-card hairline-border">
                    <div className="benchmark-header hairline-bottom font-mono">
                      <span>BEFORE / AFTER BENCHMARK COMPARISON</span>
                      <span className="benchmark-tag">PROFILED IN PROD</span>
                    </div>
                    <table className="benchmark-table font-sans">
                      <thead>
                        <tr className="font-mono">
                          <th>Metric</th>
                          <th>Baseline (Legacy ORM)</th>
                          <th>Optimized (Stored Procs)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeProject.metricsComparison.map((row) => (
                          <tr key={row.label}>
                            <td className="metric-cell font-mono">{row.label}</td>
                            <td className="baseline-cell">{row.baseline}</td>
                            <td className="optimized-cell font-mono">{row.optimized}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Architecture Data Pipeline */}
                  <div className="pipeline-card hairline-border">
                    <div className="pipeline-header hairline-bottom font-mono">
                      <span>DATA PIPELINE ARCHITECTURE</span>
                      <span className="pipeline-tag">SYNC FLOW</span>
                    </div>
                    <div className="pipeline-flow">
                      {activeProject.pipeline.map((step, idx) => (
                        <React.Fragment key={step}>
                          <div className="pipeline-step font-mono">
                            <span className="step-idx">0{idx + 1}</span>
                            <span className="step-name">{step}</span>
                          </div>
                          {idx < activeProject.pipeline.length - 1 && (
                            <span className="pipeline-arrow font-mono">↓</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trade-offs Callout */}
            {activeProject.retrospective.tradeoffs && (
              <div className="tradeoffs-callout hairline-border">
                <div className="tradeoffs-icon font-mono">⚖</div>
                <div className="tradeoffs-content">
                  <span className="tradeoffs-title font-mono">ARCHITECTURAL TRADE-OFFS & DISCARDED ALTERNATIVES</span>
                  <p className="tradeoffs-text font-sans">{activeProject.retrospective.tradeoffs}</p>
                </div>
              </div>
            )}

            {/* System Audit Spec Ledger */}
            <div className="audit-ledger hairline-border">
              <div className="audit-header hairline-bottom font-mono">
                <span>SYSTEM AUDIT SPEC LEDGER</span>
                <span className="audit-status">VERIFIED</span>
              </div>
              <div className="audit-grid font-mono">
                <div className="audit-item hairline-right hairline-bottom">
                  <span className="audit-key">INDIVIDUAL SCOPE</span>
                  <span className="audit-val font-sans">{activeProject.specLedger.individualScope}</span>
                </div>
                <div className="audit-item hairline-bottom">
                  <span className="audit-key">CLASSIFICATION</span>
                  <span className="audit-val font-sans">{activeProject.specLedger.classification}</span>
                </div>
                <div className="audit-item hairline-right">
                  <span className="audit-key">DATABASE ENGINE</span>
                  <span className="audit-val">{activeProject.specLedger.databaseEngine}</span>
                </div>
                <div className="audit-item">
                  <span className="audit-key">VERIFIED PROCESS NOTE</span>
                  <span className="audit-val audit-val--mono">{activeProject.retrospective.processNote}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
