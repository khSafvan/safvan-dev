import IntroScreen from "./components/layout/IntroScreen/IntroScreen";
import HeroSection from "./sections/HeroSection/HeroSection";
import "./styles/global.css";

function App() {
  return (
    <>
      <IntroScreen>
        <HeroSection />
      </IntroScreen>
    </>
  );
}

export default App;
