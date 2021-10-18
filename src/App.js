import { useState } from "react";
import { ThemeContext } from "./assets/utils/ThemeContext";
import {
  AppWrapper,
  DownloadResUmeButton,
} from "./components/styledComponents";
import Modal from "./components/modal/Modal";
import About from "./sections/aboutSection/About";
import LandingSection from "./sections/landingSection/LandingSection";
import Navbar from "./sections/navbar/Navbar";
import Portfolio from "./sections/portfolioSection/Portfolio";
import CareerSection from "./sections/careerSection/CareerSection";
import cv from "./assets/images/cv.pdf";
import ContactSection from "./sections/contactSection/ContactSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [toggleModal, settoggleModal] = useState(false);
  const [currentUID, setCurrentUID] = useState("design1");
  const [navState, setnavState] = useState(false);

  const controller = {
    themeState: isDarkTheme,
    themeSetter: setIsDarkTheme,
    toggleState: toggleModal,
    toggleModal: settoggleModal,
    currentUID: currentUID,
    setCurrentUID: setCurrentUID,
    navToggleState: navState,
    setnavState: setnavState,
  };

  return (
    <ThemeContext.Provider value={controller}>
      <AppWrapper darkTheme={controller}>
        <Modal />
        <Navbar />
        <DownloadResUmeButton
          type="rounded"
          darkTheme={controller}
          as="a"
          href={cv}
          rel="noopener noreferrer"
          target="_blank"
          download
        >
          {window.screen.width > 1320 ? "Download Résumé " : "Résumé "}
        </DownloadResUmeButton>
        <LandingSection />
        <About />
        <Portfolio />
        <CareerSection />
        <ContactSection />
      </AppWrapper>
    </ThemeContext.Provider>
  );
}

export default App;
