import "./App.css";
import { useState } from "react";

import LandingHeader from "./components/LandingHeader/LandingHeader";
import LandingVideo from "./components/LandingVideo/LandingVideo";
import FirstInfo from "./components/FirstInfo/FirstInfo";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import SecondSection from "./components/SecondSection/SecondSection";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="App">
      <LandingHeader setMenuIsOpen={setMenuIsOpen} />
      <WelcomeSection />
      <LandingVideo />
      <FirstInfo />
      <SecondSection />
      <LoginPage menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}

export default App;
