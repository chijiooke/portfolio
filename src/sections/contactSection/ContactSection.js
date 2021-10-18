import React, { useContext } from "react";
import instagram from "../../assets/images/ig.png";
import github from "../../assets/images/github.png";
import dribble from "../../assets/images/dribble.png";
import behance from "../../assets/images/be.png";
import twitter from "../../assets/images/twitter.png";
import { Button, H1, Wrapper } from "../../components/styledComponents";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import "./contactSection.css";

function ContactSection() {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <div className="contact-wrapper" id="contact">
        <div className="button-wrapper">
          <H1 darkTheme={theme} style={{ marginBottom: "3rem" }}>
            GET IN TOUCH
          </H1>
          <Button as="a" href="#" darkTheme={theme}>
            Let’s Work
          </Button>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/chijiooke/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={instagram}
              alt="instagram"
              height="35rem"
              width="auto"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
                padding: "0 .3rem",
              }}
            />
          </a>

          <a
            href="https://github.com/chijiooke"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              height="35rem"
              width="auto"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
                padding: "0 .3rem",
              }}
            />
          </a>

          <a
            href="https://dribbble.com/chijiooke"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={dribble}
              alt="dribble"
              height="35rem"
              width="auto"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
                padding: "0 .3rem",
              }}
            />{" "}
          </a>
          <a
            href="https://www.behance.net/michaelsylva"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={behance}
              alt="behance"
              height="35rem"
              width="auto"
              style={{
                filter: theme.themeState ? "invert(100%)" : "invert(0%)",
                padding: "0 .3rem",
              }}
            />{" "}
          </a>

          <a
            href="https://twitter.com/chijiooke_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              height="35rem"
              width="auto"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
                padding: "0 .3rem",
              }}
            />
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactSection;
