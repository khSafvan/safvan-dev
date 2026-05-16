import React from "react";
import { portfolioConfig } from "../../../config/portfolio";
import "./Header.css";

const Header = () => {
  const { name, email } = portfolioConfig.personal;

  return (
    <header className="header">
      <div className="header-container container">
        {/* Logo */}
        <a href="#home" className="logo">
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
          >
            {email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
