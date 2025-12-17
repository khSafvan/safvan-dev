import React from "react";
import "./ExperienceSection.css"; // Reusing styles for now

const ExperienceNode = ({ company, period, role, description, color }) => {
    return (
        <div className="experience-node">
            <div className="node-top">
                <h3 className="node-company" style={{ color }}>
                    {company}
                </h3>
                <span className="node-period">{period}</span>
            </div>

            <div className="node-center">
                <div
                    className="node-dot"
                    style={{ borderColor: color, backgroundColor: color + "20" }}
                >
                    <div className="node-dot-inner" style={{ backgroundColor: color }}></div>
                </div>
            </div>

            <div className="node-bottom">
                <h4 className="node-role">{role}</h4>
                <p className="node-desc">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceNode;
