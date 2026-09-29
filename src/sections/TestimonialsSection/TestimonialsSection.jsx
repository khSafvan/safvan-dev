import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
  const { testimonials } = portfolioConfig;

  return (
    <section className="testimonials section container" id="testimonials">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 06 / RECOMMENDATIONS: MANAGERS & PEERS ]</span>
          <span className="structural-status">VERIFIED ATTESTATIONS</span>
        </div>
        <h2 className="section-title font-serif">Endorsements from Managers & Engineering Peers</h2>
        <p className="section-subtitle font-sans">
          Direct, verified feedback from colleagues and managers who collaborated closely with me at La Net Team Software Solution.
        </p>
      </div>

      {/* Recommendations Architectural Grid */}
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card has-crosshairs hairline-border">
            {/* Card Header with Avatar & Details */}
            <div className="testimonial-card-header hairline-bottom">
              <div className="testimonial-profile">
                <div className="avatar-frame hairline-border">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-avatar-img"
                    loading="lazy"
                  />
                </div>
                <div className="profile-info">
                  <h3 className="testimonial-name font-serif">{item.name}</h3>
                  <div className="testimonial-role font-mono">{item.role}</div>
                  <span className="relationship-tag font-mono">{item.relationship}</span>
                </div>
              </div>

              {item.linkedin && (
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link-btn font-mono"
                  aria-label={`View ${item.name}'s verified LinkedIn profile`}
                >
                  <span>in</span>
                  <span className="link-icon">↗</span>
                </a>
              )}
            </div>

            {/* Card Quote Body */}
            <div className="testimonial-card-body">
              <p className="testimonial-quote font-sans">
                “{item.quote}”
              </p>
            </div>

            {/* Card Footer Stamp */}
            <div className="testimonial-card-footer hairline-top">
              <span className="testimonial-stamp font-mono">ENDORSEMENT // LA NET TEAM</span>
              <span className="testimonial-verified font-mono">VERIFIED PEER</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
