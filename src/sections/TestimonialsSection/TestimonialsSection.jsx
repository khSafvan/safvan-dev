import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./TestimonialsSection.css";

export default function TestimonialsSection() {
    const { testimonials } = portfolioConfig;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const colors = ["#e57373", "#81c784", "#64b5f6", "#ffb74d", "#ba68c8"];
    const borderColors = ["#b3e5fc", "#f8bbd0", "#fff9c4", "#e1bee7", "#c8e6c9"]; // Pastel complements
    const getRandomColor = (id) => colors[id % colors.length];
    const getBorderColor = (id) => borderColors[id % borderColors.length];

    const [isPaused, setIsPaused] = React.useState(false);

    // Auto-cycle logic
    React.useEffect(() => {
        if (isPaused) return; // Stop cycling if paused

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonials.length, isPaused]);

    const activeItem = testimonials[activeIndex];

    return (
        <section
            className="testimonials section container"
            id="testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonials-header-main text-center">
                <h2 className="section-title">References of colleagues <br />and clients</h2>
            </div>

            {/* Avatar Grid */}
            <div className="avatar-grid-wrapper">
                <div className="avatar-grid">
                    {testimonials.map((item, index) => (
                        <div key={item.id} className="avatar-container">
                            <button
                                className={`avatar-btn ${index === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View testimonial from ${item.name}`}
                                style={{ "--active-border-color": getBorderColor(item.id) }}
                            >
                                {item.image ? (
                                    <div
                                        className="avatar-img"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                ) : (
                                    <div
                                        className="avatar-img avatar-initials"
                                        style={{ backgroundColor: getRandomColor(item.id) }}
                                    >
                                        {item.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .substring(0, 2)
                                            .toUpperCase()}
                                    </div>
                                )}
                            </button>

                            {/* Active Ring (handled via CSS) */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Spotlight Content */}
            <div className="spotlight-content">
                <div key={activeItem.id} className="fade-wrapper">
                    <div className="spotlight-info">
                        <span className="spotlight-name">{activeItem.name}</span>
                        <span className="spotlight-divider">|</span>
                        <span className="spotlight-relationship">{activeItem.relationship}</span>
                    </div>

                    <div className="spotlight-quote-wrapper">
                        <p className="spotlight-quote">
                            “{activeItem.quote}”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
