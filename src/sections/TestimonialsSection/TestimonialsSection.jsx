import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
    const { testimonials } = portfolioConfig;
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 382; // Card (350px) + Gap (32px from 2rem)
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                {/* Header Section */}
                <div className="testimonials-header-main text-center">
                    <h2 className="section-title">Reviews from <strong>real people</strong></h2>
                    <div className="trustpilot-badge">
                        <span className="rating-score">4.5/5</span>
                        <span className="trustpilot-star">★</span>
                        <span className="trustpilot-text"><strong>Trustpilot</strong> Based on 3,987 reviews</span>
                    </div>
                </div>

                <div className="testimonials-split-layout">
                    {/* Left Column: Fixed Info */}
                    <div className="testimonials-left">
                        <div className="quote-icon-large">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                            </svg>
                        </div>
                        <h3 className="left-title">What our <br />customers are <br />saying</h3>

                        <div className="testimonial-controls">
                            <button className="control-btn prev" onClick={() => scroll('left')} aria-label="Previous">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            </button>
                            <span className="control-line"></span>
                            <button className="control-btn next" onClick={() => scroll('right')} aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Carousel */}
                    <div className="testimonials-right">
                        <div className="testimonials-scroller" ref={scrollRef}>
                            {testimonials.map((item) => (
                                <div className="testimonial-card-group" key={item.id}>
                                    {/* Speech Bubble */}
                                    <div className="speech-bubble">
                                        <p className="bubble-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            {/* Ideally use item.quote here if it was longer, but design implies tailored text */}
                                        </p>
                                        <div className="star-rating">
                                            ★★★★★
                                        </div>
                                    </div>

                                    {/* User Profile */}
                                    <div className="user-profile">
                                        <div
                                            className="user-avatar-bg"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        ></div>
                                        <div className="user-info">
                                            <h4 className="user-name">{item.name}</h4>
                                            <span className="user-meta">1 day ago</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
