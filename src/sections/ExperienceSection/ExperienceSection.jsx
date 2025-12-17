import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import ExperienceNode from "./ExperienceNode";
import "./ExperienceSection.css";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const { experience } = portfolioConfig;
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        // Safety check to ensure refs are available
        if (!section || !trigger) return;

        // Clean up any existing ScrollTriggers to prevent duplicates on hot reload
        ScrollTrigger.getAll().forEach(t => t.kill());

        const ctx = gsap.context(() => {
            const totalWidth = section.scrollWidth;
            const viewportWidth = window.innerWidth;

            // Calculate total scroll distance: content width - viewport width + buffer
            const scrollDistance = totalWidth - viewportWidth + 100;

            gsap.to(section, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    // The scroll duration is proportional to viewport height (300% of viewport height)
                    end: "+=" + (window.innerHeight * 3),
                    scrub: 1, // Smooth scrubbing
                    pin: true, // Pin the section while scrolling horizontally
                    invalidateOnRefresh: true, // Recalculate on window resize
                }
            });
        }, trigger);

        return () => ctx.revert(); // Cleanup GSAP matchMedia/context on unmount
    }, []);

    return (
        <section className="experience-wrapper" ref={triggerRef} id="experience">
            <div className="pinned-content">
                <h2 className="section-title sticky-title">My Work Experience</h2>

                <div className="horizontal-container">
                    <div className="experience-track card-track" ref={sectionRef}>
                        {/* Horizontal Dashed Line Background */}
                        <div className="track-line"></div>

                        {experience.map((exp) => (
                            <ExperienceNode
                                key={exp.id}
                                company={exp.company}
                                period={exp.period}
                                role={exp.role}
                                description={exp.description}
                                color={exp.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
