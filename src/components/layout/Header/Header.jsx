import React, { useContext } from "react";
import { CursorContext } from "../../../contexts/cursorState";
import { portfolioConfig } from "../../../config/portfolio";
import "./Header.css";

const Header = () => {
  const { setButtonHovered } = useContext(CursorContext);
  const handleMouseEnter = () => setButtonHovered(true);
  const handleMouseLeave = () => setButtonHovered(false);

  const { name, email } = portfolioConfig.personal;

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <a href="#home" className="logo" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {name}.
        </a>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {["Works", "Experience", "Services", "Testimonials"].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
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
          <a
            href={`mailto:${email}`}
            className="header-email"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
