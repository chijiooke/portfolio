import React, { useContext } from "react";
import "./landingSection.css";
import me from "../../assets/images/me.png";
import {
  H1,
  TagSpan,
  Wrapper,
  P,
  UnderlinedAnchor,
  Button,
} from "../../components/styledComponents";
import { ThemeContext } from "../../assets/utils/ThemeContext";

function LandingSection() {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <div className="landing-section" id="home">
        <div className="intro-section">
          <TagSpan>{"<h1 ClassName=‘Greeting’>"}</TagSpan>
          <H1 darkTheme={theme}>HELLO,</H1>
          <H1 darkTheme={theme}>I’M CHIJIOKE</H1>
          <TagSpan>{"</h1>"}</TagSpan>

          <section className="desription">
            <TagSpan>{"<p className=“Short Description”>"}</TagSpan>
            <P darkTheme={theme}>
              a{" "}
              <UnderlinedAnchor as="a" href="#" color="#B5F5C5" darkTheme={theme}>
                multidisciplinary designer,
              </UnderlinedAnchor>{" "}
              <UnderlinedAnchor as="a" href="#" color="#B5EEF5" darkTheme={theme}>
                {" "}
                front-end developer,{" "}
              </UnderlinedAnchor>{" "}
              <br></br>fashion stylist and Graffiti artist.
            </P>
            <TagSpan>{"</p>"}</TagSpan>
          </section>

          <Button as="a" href="mailto:michaelsylva36@gmail.com" darkTheme={theme}>Let’s Work</Button>
        </div>
        <div className="image-section">
          <div className="me">
            <img className="me-img" src={me} alt="me" width="75%"/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default LandingSection;
