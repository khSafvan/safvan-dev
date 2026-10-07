import React, { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import SkillsMatrixSection from "./sections/SkillsMatrixSection/SkillsMatrixSection";
import WorksSection from "./sections/WorksSection/WorksSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import MethodologySection from "./sections/MethodologySection/MethodologySection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import TerminalDrawer from "./components/common/TerminalDrawer";
import CustomCursor from "./components/common/CustomCursor";
import { Toaster } from "sonner";
import "./styles/global.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Lenis Inertial Smooth Scroll Synchronization with GSAP Ticker
  useEffect(() => {
    // Disable smooth scroll on coarse pointer devices or if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Notify ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis RAF from GSAP's central ticker
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Expose lenis for topbar and link navigation
    window.lenis = lenis;

    // Presentation Deck (Ideology 1): Gentle proximity snap strictly on desktop slides (disabled on mobile/tablet touch)
    let snap = null;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      snap = new Snap(lenis, {
        type: "proximity",
        velocityThreshold: 1.2,
        debounce: 350,
        duration: 0.65,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const sections = gsap.utils.toArray(".section");
      sections.forEach((sec) => {
        snap.addElement(sec, { align: ["start", "end"] });
      });
    }

    return () => {
      if (snap) snap.destroy();
      delete window.lenis;
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main id="main-content">
        <HeroSection />
        <WorksSection />
        <SkillsMatrixSection />
        <AboutSection />
        <ExperienceSection />
        <MethodologySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <TerminalDrawer />
      <CustomCursor />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#141414",
            border: "1px solid rgba(31, 107, 79, 0.25)",
            color: "#F2F0EA",
            fontFamily: "var(--font-family-mono)",
            fontSize: "0.8rem",
            borderRadius: "4px",
          },
        }}
      />
    </div>
  );
}

export default App;
