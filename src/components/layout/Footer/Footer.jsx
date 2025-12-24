import React from "react";
import "./Footer.css";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer container">
            {/* Top Bar: Copyright and Back to Top */}
            <div className="footer-top">
                <p className="footer-copyright">© {new Date().getFullYear()}</p>

                <button className="back-to-top" onClick={scrollToTop}>
                    <span>BACK TO TOP</span>
                    <div className="arrow-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Center: Massive CTA */}
            <div className="footer-center">
                <p className="cta-label">HAVE A PROJECT IN MIND?</p>
                <div className="cta-heading-wrapper">
                    <h1 className="cta-heading">LET'S TALK</h1>
                </div>
            </div>

            {/* Bottom Bar: Social Pills and Credits */}
            <div className="footer-bottom">
                <div className="social-pills">
                    <a href="https://github.com/banjan10" target="_blank" rel="noopener noreferrer" className="social-pill">GITHUB</a>
                    <a href="https://linkedin.com/in/banjan10" target="_blank" rel="noopener noreferrer" className="social-pill">LINKEDIN</a>
                    <a href="https://twitter.com/banjan10" target="_blank" rel="noopener noreferrer" className="social-pill">TWITTER</a>
                </div>

                <div className="footer-credits">
                    <p>Design by <span className="credit-name">The Avgxy Design Studio</span></p>
                    <p>Development by <span className="credit-name">Safvan</span></p>
                </div>
            </div>
        </footer>
    );
}
