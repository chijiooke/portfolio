import React, { useContext } from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";
import { ToggleButton } from "./styledComponents";
import moon from "../assets/images/moon.svg";
import sun from "../assets/images/sun.svg";

function ToggleThemeButton() {
  const darkTheme = useContext(ThemeContext);
  const theme = darkTheme.themeState;
  return (
    <ToggleButton onClick={() => darkTheme.themeSetter(!theme)}>
      <img src={theme ? sun : moon} alt="icon" width="30px"/>
    </ToggleButton>
  );
}

export default ToggleThemeButton;
