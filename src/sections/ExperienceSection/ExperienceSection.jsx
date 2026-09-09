import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  const { experience, education } = portfolioConfig;

  return (
    <section className="experience section container" id="experience">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 04 / COMMERCIAL WORK HISTORY & CREDENTIALS ]</span>
          <span className="structural-status">VERIFIED RESUME DATA</span>
        </div>
        <h2 className="section-title font-serif">Commercial Work History & Technical Background</h2>
        <p className="section-subtitle font-sans">
          Three years of commercial full-stack web development, database optimization, and academic background.
        </p>
      </div>

      <div className="experience-layout">
        {/* Left / Main: Vertical Timeline */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Timeline Marker Dot */}
              <div className="timeline-marker">
                <span className="marker-index font-mono">0{index + 1}</span>
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-card has-crosshairs hairline-border">
                <div className="timeline-card-header hairline-bottom">
                  <div className="card-company-wrap">
                    <h3 className="timeline-company font-serif">{exp.company}</h3>
                    <span className="timeline-location font-mono">{exp.location}</span>
                  </div>
                  <span className="timeline-period font-mono">{exp.period}</span>
                </div>

                <div className="timeline-card-body">
                  <div className="timeline-role-row">
                    <h4 className="timeline-role font-sans">{exp.role}</h4>
                    {exp.badge && (
                      <span className="timeline-badge font-mono">{exp.badge}</span>
                    )}
                  </div>
                  <p className="timeline-description font-sans">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right / Secondary: Education & Verified Credentials */}
        <div className="credentials-sidebar">
          <div className="credentials-card has-crosshairs hairline-border">
            <div className="credentials-header hairline-bottom">
              <span className="credentials-tag font-mono">EDUCATION & CREDENTIALS</span>
              <span className="credentials-status font-mono">ACCREDITED</span>
            </div>

            <div className="credentials-list">
              {education.map((edu) => (
                <div key={edu.id} className="credential-item hairline-bottom">
                  <div className="credential-top">
                    <h4 className="credential-degree font-serif">{edu.degree}</h4>
                    <span className="credential-score font-mono">{edu.score}</span>
                  </div>
                  <div className="credential-institution font-mono">{edu.institution}</div>
                  <div className="credential-period font-mono">{edu.period}</div>
                  <p className="credential-details font-sans">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
