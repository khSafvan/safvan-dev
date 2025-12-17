import React, { useContext } from "react";
import { CursorContext } from "../../../contexts/cursorState";
import "./Header.css";

const Header = () => {
  const { setButtonHovered } = useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <a href="#home" className="logo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Binjan
        </a>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {["Services", "Works", "Notes", "Experience"].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${item === "Services" ? "nav-link-pill" : ""}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="contact-info">
          <span className="phone-number">+001 (313) 345 678</span>
          <button
            className="call-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Call"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
