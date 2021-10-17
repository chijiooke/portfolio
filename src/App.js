import { useState } from "react";
import { ThemeContext } from "./assets/utils/ThemeContext";
import { AppWrapper, DownloadResUmeButton} from "./components/styledComponents";
import Modal from "./components/modal/Modal";
import About from "./sections/aboutSection/About";
import LandingSection from "./sections/landingSection/LandingSection";
import Navbar from "./sections/navbar/Navbar";
import Portfolio from "./sections/portfolioSection/Portfolio";
import CareerSection from "./sections/careerSection/CareerSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [toggleModal, settoggleModal] = useState(false);
  const [currentUID, setCurrentUID] = useState("design1");

  const controller = {
    themeState: isDarkTheme,
    themeSetter: setIsDarkTheme,
    toggleState:toggleModal,
    toggleModal:settoggleModal,
    currentUID:currentUID,
    setCurrentUID:setCurrentUID
  };

  return (
    <ThemeContext.Provider value={controller}>
      <AppWrapper darkTheme={controller} >
        <Modal/>
        <Navbar />
        <DownloadResUmeButton type="rounded" darkTheme={controller} as="a" href="./assets/images/cv.pdf" rel="noopener noreferrer" target="_blank" >Download Resume</DownloadResUmeButton>
        <LandingSection />
        <About/>
        <Portfolio/>
        <CareerSection/>
      </AppWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
