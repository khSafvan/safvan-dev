import React, { useEffect, useState, useRef } from 'react';
import './StartupAnimation.css';

// Detailed boot logs without hardcoded timestamp
const bootMessages = [
    "Initializing Portfolio Runtime Environment",
    "Kernel 6.8.2-runtime x86_64",
    "Boot parameters: analyze=profile,skills,experience quiet",
    "System integrity check: passed",
    "",
    "CPU topology detected",
    "Multi-core processing available",
    "Scheduler policy: sustained throughput",
    "Observed workload bias: long-running, low-interruption tasks",
    "",
    "Initializing memory subsystem",
    "Memory availability: sufficient",
    "Swap behavior: conservative",
    "Cache utilization: efficient",
    "Complexity tolerance: above baseline",
    "",
    "Mounting profile filesystem",
    "Filesystem status: clean",
    "Directory layout: intentionally structured",
    "Evidence of iterative refactoring detected",
    "",
    "Starting profile analysis service",
    "analyzer.service: active",
    "Parsing experience artifacts",
    "Correlating skill domains",
    "Normalizing confidence scores",
    "",
    "Experience timeline detected",
    "Entry-level ramp-up: rapid",
    "Transition to production systems: confirmed",
    "Ownership scope: increasing over time",
    "",
    "Backend capability assessment",
    "Node.js runtime: stable",
    "Express.js middleware discipline: present",
    "REST API patterns: predictable",
    "Error handling strategy: defensive",
    "",
    "Database competency evaluation",
    "Relational schemas: structured",
    "Query optimization awareness: detected",
    "NoSQL usage: pragmatic",
    "Data integrity prioritized",
    "",
    "Frontend systems analysis",
    "Component-driven architecture: detected",
    "Server-side rendering familiarity: present",
    "Responsive layout practices: consistent",
    "UI noise tolerance: low",
    "",
    "Large-scale application exposure",
    "Concurrent request handling: verified",
    "Performance bottleneck mitigation: applied",
    "Mission-critical workflows: supported",
    "",
    "Advanced system exposure",
    "Multi-modal interface patterns: detected",
    "Variable payload handling: optimized",
    "Frontend performance under load: stable",
    "",
    "Infrastructure & environment signals",
    "Linux-based workflows: confirmed",
    "Containerization familiarity: present",
    "Self-hosted environments: explored",
    "Experimentation behavior: controlled",
    "",
    "Supplementary skill indicators",
    "Physical training discipline: inferred",
    "Combat sports background: reaction control",
    "Consistency under stress: elevated",
    "",
    "Creative input patterns",
    "Serialized narrative consumption detected",
    "Pattern recognition bias: growth-oriented",
    "Visual storytelling influences UI decisions",
    "",
    "Behavioral synthesis",
    "Learning style: hands-on",
    "Documentation usage: selective but effective",
    "Overengineering risk: low",
    "Reliability bias: high",
    "",
    "Risk & trust evaluation",
    "Autonomy level: high",
    "Privilege usage: controlled",
    "Responsibility weighting: strong",
    "",
    "Final assessment",
    "Profile coherence: strong",
    "Signal-to-noise ratio: high",
    "Production readiness: confirmed",
    "",
    "Unlocking portfolio interface",
    "UI compositor: initializing",
    "Animation gate: open",
    "Logging verbosity: tapering",
    "",
    "System ready.",
    "Loading portfolio content..."
];

const StartupAnimation = () => {
    const [complete, setComplete] = useState(false);
    const [logs, setLogs] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        // Force scroll to top on mount
        window.scrollTo(0, 0);

        let currentIndex = 0;
        let timeoutId;
        let currentBootTime = 0;

        const processNextLog = () => {
            if (currentIndex >= bootMessages.length) {
                // Animation complete
                timeoutId = setTimeout(() => {
                    setComplete(true);
                }, 800);
                return;
            }

            const nextMessage = bootMessages[currentIndex];
            const isLog = nextMessage.trim().length > 0;

            // Calculate random delay between 0.009s (9ms) and 0.05s (50ms)
            // Or slightly faster for breaks
            let delayTime = 0;
            if (isLog) {
                // 9ms to 50ms
                delayTime = (Math.random() * (0.05 - 0.009) + 0.009);
            } else {
                // Formatting break, almost instant but keeping logic consistent
                delayTime = 0.002;
            }

            // Update time
            currentBootTime += delayTime;
            const formattedTime = `[    ${currentBootTime.toFixed(6)}]`;

            setLogs(prev => [...prev, {
                timestamp: formattedTime,
                message: nextMessage,
                isBreak: !isLog
            }]);

            currentIndex++;

            // Use the calculated delay for real timing
            timeoutId = setTimeout(processNextLog, delayTime * 1000);
        };

        // Start the process
        timeoutId = setTimeout(processNextLog, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    // Auto-scroll to bottom of logs
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
        }
    }, [logs]);


    return (
        <div className={`startup-animation ${complete ? 'hidden' : ''}`}>
            <div className="boot-log-container">
                {logs.map((log, index) => (
                    <div key={index} className={`log-entry ${log.isBreak ? 'log-break' : ''}`}>
                        {!log.isBreak && <span className="timestamp">{log.timestamp}</span>}
                        <span className="log-text">{log.message}</span>
                    </div>
                ))}
                {!complete && <div className="cursor"></div>}
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
};

export default StartupAnimation;
