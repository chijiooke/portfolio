import React, { useContext, useState } from "react";
import "./portfolio.css";
import {
  PortfolioCard,
  SideSectionTitle,
  Wrapper,
} from "../../components/styledComponents";
import { ThemeContext } from "../../assets/utils/ThemeContext";
import instagram from "../../assets/images/ig.png";
import github from "../../assets/images/github.png";
import dribble from "../../assets/images/dribble.png";
import twitter from "../../assets/images/twitter.png";
import behance from "../../assets/images/be.png";
import data from "../../assets/data/portfolioData";

function Portfolio() {
  const theme = useContext(ThemeContext);
  const [currentTab, setCurrentTab] = useState(data[0].category);
  const [details, setdetails] = useState();

  const tabArray = [];
  const tabs = () => {
    data.forEach((data) => {
      if (tabArray.includes(data.category)) {
        return;
      } else tabArray.push(data.category);
    });
  };
  tabs();

  const portfolioArray = data.filter((data) => data.category === currentTab);

  let handleTabChange = (e, data) => {
    setCurrentTab(e.target.innerText);
  };

  const displayDetails = (e, i) => {
    setdetails(i);
  };

  const modalSetter = theme.toggleModal;
  const modalValue = theme.toggleState;
  const setID = theme.setCurrentUID;

  return (
    <Wrapper>
      <div className="portfolio-section" id="portfolio">
        <div className="socials">
          <a
            href="https://github.com/chijiooke"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github"
              width="25rem"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
              }}
            />
          </a>
          <a
            href="https://dribbble.com/chijiooke"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={dribble}
              alt="dribble"
              width="25rem"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
              }}
            />
          </a>
          <a
            href="https://www.behance.net/michaelsylva"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={behance}
              alt="behance"
              width="25rem"
              style={{
                filter: theme.themeState ? "invert(100%)" : "invert(0%)",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/chijiooke/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              alt="instagram"
              width="25rem"
              style={{
                filter: theme.themeState ? "invert(0%)" : "invert(100%)",
              }}
            />
          </a>
          <a
            href="https://twitter.com/chijiooke_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              alt="twitter"
              width="25rem"
              style={{ filter: theme.themeState ? "" : "invert(100%)" }}
            />
          </a>
        </div>
        <div className="projects">
          {/* <TagSpan>{"<section>"}</TagSpan> */}
          <div className="tab-wrapper">
            {tabArray.map((data, i) => {
              return (
                <h1 key={i}>
                  <button
                    className={currentTab === data ? "active-tab" : "tab"}
                    onClick={(e, data) => handleTabChange(e, data)}
                    style={{
                      color: theme.themeState ? "#fff" : "#000",
                    }}
                  >
                    {data}
                  </button>
                </h1>
              );
            })}
          </div>
          <div className="portfolio-wrapper">
            {portfolioArray.map((data, i) => {
              return (
                <PortfolioCard
                  darkTheme={theme}
                  key={i}
                  onMouseOver={(e, data) => displayDetails(e, i)}
                  onMouseLeave={(e) => setdetails()}
                  onMouseDown={(e, portfolio) => {
                    modalSetter(!modalValue);
                    setID(data.uID);
                  }}
                >
                  {details !== i && window.screen.width > 1318 ? (
                    <div className="image">
                      <img
                        src={data.content.logoIcon}
                        alt=""
                        style={{
                          width: "90px",
                        }}
                      />
                    </div>
                  ) : (
                    <div>
                      <h2>{data.content.title}</h2>
                      <p className="port-desr">{data.content.description}</p>
                      <p>
                        View More{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.062"
                          height="11.756"
                          viewBox="0 0 12.062 11.756"
                        >
                          <path
                            id="Icon_awesome-arrow-right"
                            data-name="Icon awesome-arrow-right"
                            d="M5.128,3.435l.6-.6a.643.643,0,0,1,.913,0l5.233,5.231a.643.643,0,0,1,0,.913L6.638,14.213a.643.643,0,0,1-.913,0l-.6-.6a.647.647,0,0,1,.011-.923L8.383,9.6H.646A.645.645,0,0,1,0,8.956V8.095a.645.645,0,0,1,.646-.646H8.383L5.139,4.358A.642.642,0,0,1,5.128,3.435Z"
                            transform="translate(0 -2.647)"
                          />
                        </svg>
                      </p>
                    </div>
                  )}
                </PortfolioCard>
              );
            })}
          </div>
        </div>
        <div className="title">
          {/* <TagSpan>{"</section>"}</TagSpan> */}
          <SideSectionTitle darkTheme={theme}>Portfolio.</SideSectionTitle>
        </div>
      </div>
    </Wrapper>
  );
}

export default Portfolio;
