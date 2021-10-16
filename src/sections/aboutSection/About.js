import React, { useContext } from "react";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import {
  SideSectionTitle,
  TagSpan,
  Wrapper,
  P,
} from "../../components/styledComponents";
import SubSectionHeaders from "../../components/SubSectionHeaders";
import "./about.css";

function About() {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <div className="about-section">
        <SideSectionTitle darkTheme={theme}>About.</SideSectionTitle>
        <section>
          <div className="description-card">
            <div className="skill-descr">
              <TagSpan>{"<section>"}</TagSpan>
              <SubSectionHeaders darkTheme={theme} color="#B5F5C5">
                Design
              </SubSectionHeaders>
              <P darkTheme={theme}>
                I’m a multidisciplinary designer with skills in character
                illustration, Brand identity design, User interface and
                Experience design.<br></br>
                <br></br> Whether it’s working with the Engineering or Marketing
                team, I’m committed to creating clean, appealing and pixel
                perfect designs.
              </P>
              <TagSpan>{"</section>"}</TagSpan>
            </div>
            <div className="skill-number">
              <p className="number">01</p>
            </div>
          </div>

          <div className="description-card">
            <div className="skill-number">
              <p className="number">02</p>
            </div>
            <div className="skill-descr">
              <TagSpan>{"<section>"}</TagSpan>
              <SubSectionHeaders darkTheme={theme} color="#F5E1B5">
                Engineering
              </SubSectionHeaders>
              <P darkTheme={theme}>
                With experience in developing pixel perfect web applications
                using modern development tools, I convert designed UI into fast,
                responsive and scalable solutions. <br></br>
                <br></br>With experience in developing pixel perfect web
                applications using modern tools, I convert UI into fast
              </P>
              <TagSpan>{"</section>"}</TagSpan>
            </div>
          </div>

          <div className="description-card">
            <div className="skill-descr">
              <TagSpan>{"<section>"}</TagSpan>
              <SubSectionHeaders darkTheme={theme} color="#B5DCF5">
                When Not Working
              </SubSectionHeaders>
              <P darkTheme={theme}>
                When not working on tech products, I paint.. mostly on denim but
                sometimes on walls and sneakers, I style up-coming music
                artistes and curate fire afro-beat playlists.
              </P>
              <TagSpan>{"</section>"}</TagSpan>
            </div>
            <div className="skill-number">
              <p className="number">03</p>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default About;
