import React from "react";
import "./ServicesSection.css";

export default function ServicesSection() {
    return (
        <section className="services section container" id="services">
            <div className="services-grid">
                {/* Left: Service Cards */}
                <div className="services-list">
                    <div className="service-card">
                        <div className="service-icon bg-green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="service-info">
                            <h3>Website Design</h3>
                            <p>76 Projects</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon bg-yellow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                        </div>
                        <div className="service-info">
                            <h3>Mobile App Design</h3>
                            <p>63 Projects</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon bg-orange">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        </div>
                        <div className="service-info">
                            <h3>Brand Identity</h3>
                            <p>47 Projects</p>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="services-content">
                    <h2 className="section-title">What do I help?</h2>

                    <div className="services-description">
                        <p>
                            I will help you with finding a solution and solve your problems. We use process design to create digital products. Besides that also help their business.
                        </p>
                        <p>
                            We use process design to create digital products. Besides that also help their business.
                        </p>
                    </div>

                    <div className="services-stats">
                        <div className="stat-item">
                            <span className="stat-value">285+</span>
                            <span className="stat-label">Project Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">190+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
