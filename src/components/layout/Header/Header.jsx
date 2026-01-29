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
          Mike.
        </a>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {["About", "Projects", "Experience", "Services"].map((item) => (
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
            href="mailto:hellomikejack@gmail.com"
            className="header-email"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            hellomikejack@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
