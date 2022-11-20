import "./App.css";
import { useState } from "react";

import LandingHeader from "./components/LandingHeader/LandingHeader";
import LandingVideo from "./components/LandingVideo/LandingVideo";
import FirstInfo from "./components/FirstInfo/FirstInfo";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import SecondSection from "./components/SecondSection/SecondSection";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);

  return (
    <div className="App">
      <LandingHeader
        setMenuIsOpen={setMenuIsOpen}
        setRegisterIsOpen={setRegisterIsOpen}
      />
      <WelcomeSection />
      <RegistrationPage
        setRegisterIsOpen={setRegisterIsOpen}
        registerIsOpen={registerIsOpen}
      />
      <LandingVideo />
      <FirstInfo />
      <SecondSection />
      <LoginPage menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}

export default App;
