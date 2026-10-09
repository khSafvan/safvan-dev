import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * Magnetic component providing tactile spring micro-interactions towards the cursor.
 * Strictly adheres to accessibility requirements:
 * - Disabled if user prefers reduced motion (prefers-reduced-motion: reduce)
 * - Disabled on touch/stylus devices (pointer: coarse)
 */
export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
  active = true,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const el = elementRef.current;
    if (!el) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (clientX - centerX) * strength;
      const deltaY = (clientY - centerY) * strength;

      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, active]);

  return (
    <div
      ref={elementRef}
      className={`magnetic-wrap ${className}`}
      data-magnetic="true"
      style={{ display: "inline-flex", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
