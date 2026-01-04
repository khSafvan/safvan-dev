import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            const scrollableDistance = documentHeight - windowHeight;
            const activeProgress = (scrollTop / scrollableDistance) * 100;

            setScrollProgress(Math.min(Math.max(activeProgress, 0), 100));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-fill"
                style={{ height: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
