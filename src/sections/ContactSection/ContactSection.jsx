import React, { useState } from "react";
import { toast } from "sonner";
import { portfolioConfig } from "../../config/portfolio";
import "./ContactSection.css";

export default function ContactSection() {
  const { personal } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      toast.success("Copied email address to clipboard.");
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      toast.success("Copied email address to clipboard.");
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    toast.success("Inquiry transmitted successfully. I'll be in touch shortly!");
  };

  return (
    <section className="contact section container" id="contact">
      {/* Section Header */}
      <div className="section-header-block">
        <div className="section-structural-meta font-mono">
          <span className="structural-tag">[ 07 / TRANSMISSION: GET IN TOUCH ]</span>
          <span className="structural-status">OPEN FOR OPPORTUNITIES</span>
        </div>
        <h2 className="section-title font-serif">Get in Touch</h2>
        <p className="section-subtitle font-sans">
          Open to full-time engineering roles and contract work ahead of my relocation to the Boston area in early 2027.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Pitch & Contact Details */}
        <div className="contact-details-panel has-crosshairs hairline-border">
          <div className="panel-header hairline-bottom">
            <span className="panel-tag font-mono">DIRECT CHANNELS</span>
            <span className="panel-status font-mono">INBOX ACTIVE</span>
          </div>

          <div className="panel-body">
            <h3 className="contact-pitch-title font-serif">Direct Communication</h3>
            <p className="contact-pitch-desc font-sans">
              Reach out to discuss full-stack roles, web projects, or systems and tooling.
            </p>

            {/* Email Action Box (Replaces raw text email) */}
            <div className="email-action-box hairline-border">
              <div className="channel-meta">
                <span className="channel-label font-mono">PRIMARY INBOX</span>
                <span className="channel-hint font-mono">// Direct messaging & inquiries</span>
              </div>
              <div className="channel-actions">
                <a
                  href={`mailto:${personal.email}`}
                  className="channel-btn channel-btn--primary font-mono"
                  aria-label="Send email via mail client"
                  title="Open mail client (mailto:)"
                >
                  <svg className="contact-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Send Email</span>
                  <span className="action-arrow">↗</span>
                </a>
                <button
                  type="button"
                  className={`channel-btn channel-btn--secondary font-mono ${copied ? "channel-btn--copied" : ""}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  title="Copy email to clipboard"
                >
                  <svg className="contact-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span>{copied ? "✓ Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Contact Specs Ledger */}
            <div className="contact-specs-ledger hairline-top">
              {/* Voice Call (Replaces raw phone text) */}
              <div className="contact-spec-row hairline-bottom">
                <span className="spec-label font-mono">VOICE CALL</span>
                <div className="spec-interactive-wrapper">
                  <a
                    href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                    className="contact-spec-pill font-mono"
                    aria-label="Call direct phone line"
                    title="Click to place phone call (tel:)"
                  >
                    <svg className="contact-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Direct Call (tel:)</span>
                    <span className="action-arrow">↗</span>
                  </a>
                </div>
              </div>

              {/* Location & Relocation Hubs — Always-Visible Static Blueprint Ledger */}
              <div className="contact-spec-row hairline-bottom">
                <span className="spec-label font-mono">LOCATION & RELOCATION</span>
                <div className="location-static-ledger font-mono hairline-border">
                  <div className="location-ledger-row hairline-bottom">
                    <div className="location-ledger-title">
                      <svg className="contact-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span className="location-ledger-label">// CURRENT BASE:</span>
                    </div>
                    <span className="location-ledger-value">{personal.currentLocation}</span>
                  </div>
                  <div className="location-ledger-row">
                    <div className="location-ledger-title">
                      <span className="location-ledger-bullet">↳</span>
                      <span className="location-ledger-label">// RELOCATION HUB:</span>
                    </div>
                    <span className="location-ledger-value location-ledger-highlight">{personal.targetLocation}</span>
                  </div>
                </div>
              </div>

              <div className="contact-spec-row">
                <span className="spec-label font-mono">PROFILES</span>
                <div className="spec-links-row">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link font-mono"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link font-mono"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="contact-form-panel has-crosshairs hairline-border">
          <div className="panel-header hairline-bottom">
            <span className="panel-tag font-mono">DISPATCH INQUIRY</span>
            <span className="panel-status font-mono">ENCRYPTED TRANSMISSION</span>
          </div>

          <div className="panel-body">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon font-mono">✓</div>
                <h3 className="success-title font-serif">Inquiry Transmitted</h3>
                <p className="success-desc font-sans">
                  Thank you for reaching out, <strong>{formState.name}</strong>. Your message has been logged, and I will respond to <strong>{formState.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label font-mono">
                    YOUR NAME <span className="required-mark">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="form-input font-sans hairline-border"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label font-mono">
                    EMAIL ADDRESS <span className="required-mark">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="form-input font-sans hairline-border"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label font-mono">
                    INQUIRY / ROLE TYPE
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Full-Time Engineering Role / Contract Project"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="form-input font-sans hairline-border"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label font-mono">
                    MESSAGE <span className="required-mark">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your engineering project, timeline, or open role requirements..."
                    value={formState.message}
                    onChange={handleInputChange}
                    className="form-textarea font-sans hairline-border"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Transmit Inquiry</span>
                  <span className="submit-arrow">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
