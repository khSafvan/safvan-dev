import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer container">
            {/* CTA Section */}
            <div className="footer-cta section">
                <div className="cta-left">
                    <h2 className="cta-title">
                        Let's make something<br />
                        amazing together.
                    </h2>
                    <div className="cta-action">
                        <span className="cta-label">Start by </span>
                        <a href="mailto:banjan10@gmail.com" className="cta-link">saying hi</a>
                    </div>
                </div>

                <div className="cta-right">
                    <div className="footer-info">
                        <h4 className="info-title">Information</h4>
                        <p className="info-address">145 New York, FL 5467, USA</p>

                        <nav className="footer-nav">
                            <a href="#services">Services</a>
                            <a href="#works">Works</a>
                            <a href="#notes">Notes</a>
                            <a href="#experience">Experience</a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="footer-divider"></div>

            {/* Bottom Legal */}
            <div className="footer-bottom">
                <a href="#home" className="footer-logo">Binjan</a>

                <p className="copyright">
                    © 2023. All Rights Reserved
                </p>

                <p className="credit">
                    Design by <span className="credit-link">Chris Creative Agency</span>
                </p>
            </div>
        </footer>
    );
}
