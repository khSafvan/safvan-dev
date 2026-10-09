import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

/**
 * Tactile Precision Reticle Cursor (Ideology 3)
 * Non-intrusive architectural reticle that complements (never hides) the OS pointer.
 * Strictly gated behind fine pointer and reduced motion checks.
 */
export default function CustomCursor() {
  const wrapRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // A11y & Device validation: fine pointer only, no reduced motion
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let isHovered = false;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible && wrapRef.current) {
        isVisible = true;
        wrapRef.current.classList.add("custom-cursor-wrap--visible");
      }

      // Instantly position the center precision dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Detect interactive targets without triggering React re-renders
      const target = e.target;
      const interactive = target && Boolean(target.closest(
        "a, button, input, textarea, [role='tab'], [data-magnetic], .project-card, .avatar-blueprint-card, .metric-panel"
      ));

      if (interactive !== isHovered && wrapRef.current) {
        isHovered = interactive;
        wrapRef.current.classList.toggle("custom-cursor-wrap--hovered", isHovered);
      }
    };

    const handleMouseLeave = () => {
      if (isVisible && wrapRef.current) {
        isVisible = false;
        wrapRef.current.classList.remove("custom-cursor-wrap--visible");
      }
    };

    // Smooth lerp loop for the outer architectural reticle
    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <div ref={wrapRef} className="custom-cursor-wrap" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor-ring">
        <span className="reticle-tick reticle-tick--top" />
        <span className="reticle-tick reticle-tick--bottom" />
        <span className="reticle-tick reticle-tick--left" />
        <span className="reticle-tick reticle-tick--right" />
      </div>
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
