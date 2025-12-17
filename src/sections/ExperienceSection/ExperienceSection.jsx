import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioConfig } from "../../config/portfolio";
import "./ExperienceSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const { experience } = portfolioConfig;
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        // Kill any previous ScrollTriggers to avoid duplicates on hmr
        ScrollTrigger.getAll().forEach(t => t.kill());

        let ctx = gsap.context(() => {
            const totalWidth = section.scrollWidth;
            const viewportWidth = window.innerWidth;
            // Scroll enough to show the end, plus some padding
            const scrollWidth = totalWidth - viewportWidth + 100;

            gsap.to(section, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: "+=" + (window.innerHeight * 3), // Ensure enough scroll distance for "pressure"
                    scrub: 1,
                    pin: true,
                    invalidateOnRefresh: true,
                }
            });
        }, trigger);

        return () => ctx.revert();
    }, []);

    return (
        <section className="experience-wrapper" ref={triggerRef} id="experience">
            <div className="pinned-content">
                <h2 className="section-title sticky-title">My Work Experience</h2>

                <div className="horizontal-container">
                    <div className="experience-track card-track" ref={sectionRef}>
                        {/* Horizontal Dashed Line */}
                        <div className="track-line"></div>

                        {experience.map((exp) => (
                            <div className="experience-node" key={exp.id}>
                                <div className="node-top">
                                    <h3 className="node-company" style={{ color: exp.color }}>{exp.company}</h3>
                                    <span className="node-period">{exp.period}</span>
                                </div>

                                <div className="node-center">
                                    <div className="node-dot" style={{ borderColor: exp.color, backgroundColor: exp.color + '20' }}>
                                        <div className="node-dot-inner" style={{ backgroundColor: exp.color }}></div>
                                    </div>
                                </div>

                                <div className="node-bottom">
                                    <h4 className="node-role">{exp.role}</h4>
                                    <p className="node-desc">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
