import "./App.css";

import LandingHeader from "./components/LandingHeader/LandingHeader";
import LandingVideo from "./components/LandingVideo/LandingVideo";
import FirstInfo from "./components/FirstInfo/FirstInfo";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import SecondSection from "./components/SecondSection/SecondSection";

function App() {
  return (
    <div className="App">
      <LandingHeader />
      <WelcomeSection />
      <LandingVideo />
      <FirstInfo />
      <SecondSection />
    </div>
  );
}

export default App;
