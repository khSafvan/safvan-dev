import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
    const { testimonials } = portfolioConfig;

    return (
        <section className="testimonials section container" id="testimonials">
            <div className="section-header text-center">
                <h2 className="section-title">People talk about us</h2>
                <p className="section-subtitle mw-600">
                    I got a job that was in accordance with the salary and field of work. The process of submitting an application was quite cosy.
                </p>
            </div>

            <div className="testimonials-grid">
                {testimonials.map((item) => (
                    <div className="testimonial-card" key={item.id}>
                        <div className="testimonial-avatar-wrapper">
                            <div
                                className="testimonial-avatar-bg"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <img src={item.image} alt={item.name} className="testimonial-avatar" />
                        </div>

                        <div className="testimonial-content">
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <h4 className="author-name">{item.name}</h4>
                                <span className="author-role">{item.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="testimonial-controls">
                <button className="control-btn prev" aria-label="Previous">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button className="control-btn next bg-primary text-white" aria-label="Next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </section>
    );
}
