import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./WorksSection.css";

export default function WorksSection() {
    const { works } = portfolioConfig;

    return (
        <section className="works section container" id="works">
            <div className="section-header">
                <div className="header-left">
                    <h2 className="section-title">My Latest Works</h2>
                    <p className="section-subtitle">Perfect solution for digital experience</p>
                </div>
                <a href="#works" className="explore-link">Explore More Works</a>
            </div>

            <div className="works-grid">
                {works.map((work) => (
                    <div
                        className="work-card"
                        key={work.id}
                        style={{ backgroundColor: work.color, color: work.textColor }}
                    >
                        <div className="work-info">
                            <h3 className="work-category">{work.category}</h3>
                            <p className="work-title text-opacity">{work.title}</p>
                        </div>
                        <div className="work-image-container">
                            <div className="mockup-placeholder">
                                {/* Placeholder for image */}
                                <div className="mockup-inner"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
