import React, { useContext } from "react";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import {
  Button,
  CtaText,
  H2,
  P,
  TagSpan,
  Wrapper,
} from "../../components/styledComponents";
import SubSectionHeaders from "../../components/SubSectionHeaders";
import "./careerSection.css";

import js from "../../assets/images/js.png";
import figma from "../../assets/images/figma4.png";
import ae from "../../assets/images/ae.png";
import html from "../../assets/images/html5.png";
import github from "../../assets/images/github-gray.png";
import xd from "../../assets/images/xd.png";
import react from "../../assets/images/react.png";
import ai from "../../assets/images/ai.png";
import css from "../../assets/images/css3.png";
import cv from "../../assets/images/cv.pdf";

function CareerSection() {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <div className="cta-wrapper">
        <div className="cta">
          <CtaText darkTheme={theme}>Download My Résumé </CtaText>
          <Button as="a"
          href={cv}
          rel="noopener noreferrer"
          target="_blank"
          download darkTheme={theme}>
            Download
          </Button>
        </div>
        <div className="career-obj-section">
          <TagSpan>{"<section>"}</TagSpan>
          <SubSectionHeaders darkTheme={theme} color="#F9BDA7">
            Career Objective
          </SubSectionHeaders>
          <P darkTheme={theme}>
            Having worked as both a team member and sole engineer on various
            projects, my career objective is to work as an asset, a valuable
            member of whatever team or project I work on, delivering clean
            optimizable products while building valuable symbiotic work and
            post-work relationships.{" "}
          </P>
          <P darkTheme={theme}>
            My aim is to build a network of clients, friends and team-mates
            turned buddies on different levels of my career while
            building/designing cutting edge products.
          </P>
          <TagSpan>{"</section>"}</TagSpan>

          <H2 darkTheme={theme}>Some Of My Favorite Tools</H2>

          <div className="tools">
            <img className="tool" src={github} alt="Github" />
            <img className="tool" src={react} alt="React Js" />
            <img className="tool" src={js} alt="Javascript" />
            <img className="tool" src={css} alt="CSS 3" />
            <img className="tool" src={html} alt="Html5" />
            <img className="tool" src={figma} alt="Figma" />
            <img className="tool" src={xd} alt="Adobe XD" />
            <img className="tool" src={ai} alt="Adobe Illustrator" />
            <img className="tool" src={ae} alt="After Effects" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CareerSection;
