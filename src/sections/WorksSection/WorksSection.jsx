import React, { useState, useEffect, useRef } from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./WorksSection.css";

export default function WorksSection() {
    const { works } = portfolioConfig;
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % works.length;

                // Scroll to the next item
                if (scrollContainerRef.current) {
                    const cardHeight = scrollContainerRef.current.children[0].offsetHeight;
                    // Usually we might want smooth scroll, or instant snap. 
                    // For "auto scrolling" we usually want smooth.
                    // If looping back to 0, we might want to reset scroll instantly or scroll top.

                    if (nextIndex === 0) {
                        scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                        scrollContainerRef.current.scrollTo({
                            top: nextIndex * cardHeight,
                            behavior: "smooth"
                        });
                    }
                }
                return nextIndex;
            });
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [activeIndex, works.length]);

    // Handle manual scroll (optional, if user scrolls we might want to update active index)
    // For now, let's keep it simple: Auto-scroll drives the state. 
    // If we want manual scroll to update state, we'd need an IntersectionObserver or onScroll handler.
    // Given the request "auto scrolling the carosal", strict sync is easier if we drive scroll from state.

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % works.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + works.length) % works.length);
    };

    const activeWork = works[activeIndex];

    return (
        <section className="works section container" id="works">
            <div className="section-header">
                <div className="header-left">
                    <h2 className="section-title">My Latest Works</h2>
                    <p className="section-subtitle">Perfect solution for digital experience</p>
                </div>
            </div>

            <div className="works-split-layout">
                {/* LEFT PANEL: INFO */}
                <div
                    className="works-info-panel"
                    style={{
                        backgroundColor: activeWork.color,
                        color: activeWork.textColor
                    }}
                >
                    <div className="info-content">
                        <span key={`sub-${activeWork.id}`} className="cursive-subtitle fade-in-text" style={{ color: activeWork.textColor, opacity: 0.9 }}>Selected Works</span>
                        <h2 key={`title-${activeWork.id}`} className="info-title fade-in-text" style={{ color: activeWork.textColor }}>{activeWork.title}</h2>
                        <h3 key={`cat-${activeWork.id}`} className="info-category fade-in-text" style={{ color: activeWork.textColor, opacity: 0.8 }}>{activeWork.category}</h3>

                        <p key={`desc-${activeWork.id}`} className="info-description fade-in-text" style={{ color: activeWork.textColor, opacity: 0.9 }}>
                            {activeWork.description || "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
                        </p>

                        <button
                            className="explore-btn"
                            style={{
                                backgroundColor: activeWork.buttonColor,
                                color: activeWork.textColor === '#000000' && activeWork.buttonColor === '#000000' ? '#fff' : (activeWork.buttonColor === '#f1c40f' ? '#000' : '#fff')
                                /* Simple logic: if button is black, text white. If button yellow, text black. Else default white text */
                            }}
                        >
                            Explore More
                        </button>
                    </div>

                    <div className="info-footer" style={{ color: activeWork.textColor }}>
                        <div className="location-pin">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Great Britain, London</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL: CAROUSEL */}
                <div className="works-carousel-panel" ref={scrollContainerRef}>
                    {works.map((work, index) => (
                        <div
                            key={work.id}
                            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                        >
                            <img
                                src={work.image}
                                alt={work.title}
                                className="work-image"
                            />
                        </div>
                    ))}

                    {/* Controls Overlay */}
                    <div className="carousel-controls">
                        <button className="nav-arrow up" onClick={handlePrev}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
                        </button>

                        <div className="control-dots">
                            {works.map((_, dotIndex) => (
                                <span
                                    key={dotIndex}
                                    className={`dot ${dotIndex === activeIndex ? "active" : ""}`}
                                    onClick={() => setActiveIndex(dotIndex)}
                                ></span>
                            ))}
                        </div>

                        <button className="nav-arrow down" onClick={handleNext}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
