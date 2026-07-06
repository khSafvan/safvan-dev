// cursorContext.js
import { createContext, useState, useEffect } from "react";

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, input[type="submit"], input[type="button"], .clickable, [role="button"], .explore-btn, .nav-arrow, .dot, .discover-more');
      setButtonHovered(!!isClickable);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <CursorContext.Provider
      value={{ isClicking, buttonHovered, setIsClicking, setButtonHovered }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export { CursorProvider, CursorContext };
