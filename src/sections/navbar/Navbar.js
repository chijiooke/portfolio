import React, { useContext } from "react";
import "./navbar.css";
import lightThemeLogo from "../../assets/images/lighttheme-logo.png";
import darkThemeLogo from "../../assets/images/dark-theme-logo.png";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import BurgerMenu from "./BurgerMenu";
import Navcontent from "./Navcontent";

function Navbar() {
  const theme = useContext(ThemeContext);
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <img
          src={theme.themeState ? darkThemeLogo : lightThemeLogo}
          alt="logo"
          width="100px"
        />
      </div>

      <div className="controls">
        <BurgerMenu />
        <ToggleThemeButton />
        <Navcontent/>
      </div>
    </div>
  );
}

export default Navbar;
