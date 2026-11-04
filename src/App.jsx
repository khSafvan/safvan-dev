import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./sections/HeroSection/HeroSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import WorksSection from "./sections/WorksSection/WorksSection";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <WorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
