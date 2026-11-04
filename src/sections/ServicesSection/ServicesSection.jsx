import React from "react";
import "./ServicesSection.css";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss,
    SiGreensock, SiFramer, SiSass, SiBootstrap, SiNestjs, SiExpress,
    SiMysql, SiPostgresql, SiMongodb, SiPrisma
} from "react-icons/si";

export default function ServicesSection() {
    const stack = [
        {
            category: "FRONTEND",
            items: [
                { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
                { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
                { name: "React", color: "#61DAFB", icon: <FaReact /> },
                { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
                { name: "Redux", color: "#764ABC", icon: <SiRedux /> },
                { name: "Tailwind CSS", color: "#06B6D4", icon: <SiTailwindcss /> },
                { name: "GSAP", color: "#88CE02", icon: <SiGreensock /> },
                { name: "Framer Motion", color: "#0055FF", icon: <SiFramer /> },
                { name: "Sass", color: "#CC6699", icon: <SiSass /> },
                { name: "Bootstrap", color: "#7952B3", icon: <SiBootstrap /> },
            ]
        },
        {
            category: "BACKEND",
            items: [
                { name: "Node.js", color: "#339933", icon: <FaNodeJs /> },
                { name: "NestJS", color: "#E0234E", icon: <SiNestjs /> },
                { name: "Express.js", color: "#000000", icon: <SiExpress /> },
            ]
        },
        {
            category: "DATABASE",
            items: [
                { name: "MySQL", color: "#4479A1", icon: <SiMysql /> },
                { name: "PostgreSQL", color: "#336791", icon: <SiPostgresql /> },
                { name: "MongoDB", color: "#47A248", icon: <SiMongodb /> },
                { name: "Prisma", color: "#2D3748", icon: <SiPrisma /> },
            ]
        },
        {
            category: "TOOLS",
            items: [
                { name: "Git", color: "#F05032", icon: <FaGitAlt /> },
            ]
        }
    ];

    return (
        <section className="services section container" id="services">
            <div className="section-header">
                <h2 className="section-title">My Stack</h2>
            </div>

            <div className="stack-container">
                {stack.map((group) => (
                    <div key={group.category} className="stack-category">
                        <div className="category-header">
                            <h2 className="category-title">{group.category}</h2>
                        </div>
                        <div className="tech-grid">
                            {group.items.map((tech) => (
                                <div key={tech.name} className="tech-item">
                                    <div className="tech-icon" style={{ color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                    <span className="tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
