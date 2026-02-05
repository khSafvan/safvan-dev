// Native scroll is used.
import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import WorksSection from "./sections/WorksSection/WorksSection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import ScrollProgress from "./components/ui/ScrollProgress/ScrollProgress";
import StartupAnimation from "./components/ui/StartupAnimation/StartupAnimation";
import "./styles/global.css";

function App() {
  // Lenis removed so native scroll is used.
  // GSAP ScrollTrigger works with native scroll automatically.

  return (
    <div className="app-container">
      <StartupAnimation />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <WorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
}

export default App;
