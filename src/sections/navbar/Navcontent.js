import React, { useContext } from "react";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import { NavLink, NavWrapper, SocialLink } from "../../components/styledComponents";

function Navcontent() {
  const theme = useContext(ThemeContext);
  return (
    <NavWrapper darkTheme={theme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "2rem",
        }}
      >
        <NavLink href="#home" darkTheme={theme}>
          Home
        </NavLink>
        <NavLink href="#about" darkTheme={theme}>
          About Me
        </NavLink>
        <NavLink href="#portfolio" darkTheme={theme}>
          Portfolio
        </NavLink>
        <NavLink href="#contact" darkTheme={theme}>
          Contact
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: theme.themeState ? ".1rem solid #fff" : ".1rem solid #000",
          paddingTop: ".3rem",
        }}
      >
        <NavLink href="tel:+2348083612288" darkTheme={theme}>
          + (234) 8083612288
        </NavLink>
        <NavLink href="#home" darkTheme={theme}>
          michaelsylva36@gmail.com
        </NavLink>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" , paddingTop:"1rem"}}>
        <SocialLink href="#home" darkTheme={theme}>
          IG
        </SocialLink>
        <SocialLink href="#home" darkTheme={theme}>
          LK
        </SocialLink>
        <SocialLink href="#home" darkTheme={theme}>
          GH
        </SocialLink>
        <SocialLink href="#home" darkTheme={theme}>
          DR
        </SocialLink>
      </div>
    </NavWrapper>
  );
}

export default Navcontent;
