import React, { useState, useContext } from "react";
import "./modal.css";
import {
  CarouselButton,
  CloseButton,
  H1,
  MyModal,
  P,
  Wrapper,
  ProjectLinkButton,
} from "../styledComponents";
// import instagram from "../../assets/images/ig.png";
import github from "../../assets/images/github.png";
import dribble from "../../assets/images/dribble.png";
import IG from "../../assets/images/ig.png";
import data from "../../assets/data/portfolioData";
import { ThemeContext } from "../../assets/utils/ThemeContext";

function Modal() {
  const isVisible = useContext(ThemeContext);
  const modalState = isVisible.toggleState;
  const modalToggle = isVisible.toggleModal;
  const uID = isVisible.currentUID;
  const selected = data.filter((data) => data.uID === uID);
  const portfolioItem = selected[0];
  const [currentImg, setcurrentImg] = useState(0);

  const nextImg = () => {
    if (portfolioItem.content.images.length - 1 > currentImg) {
      setcurrentImg(currentImg + 1);
    } else if (portfolioItem.content.images.length - 1 <= currentImg) {
      setcurrentImg(0);
    }
  };

  const prevImg = () => {
    if (currentImg > 0) {
      setcurrentImg(currentImg - 1);
    } else {
      setcurrentImg(portfolioItem.content.images.length - 1);
    }
  };

  return (
    <MyModal style={{ display: modalState ? "flex" : "none" }}>
      <Wrapper>
        <div
          className="modal-wrapper"
          style={{
            backgroundColor: isVisible.themeState ? "#333" : "#fff",
          }}
        >
          <div className="cancel-btn-wrapper">
            <CloseButton
              onClick={() => {
                modalToggle(!modalState);
                setcurrentImg(0);
              }}
            >
              X
            </CloseButton>
          </div>
          <div>
            <H1 darkTheme={isVisible}>{portfolioItem.content.title}</H1>
            <div className="content-wrapper">
              <P darkTheme={isVisible}>{portfolioItem.content.description}</P>
              <div className="portfolio-detail-footer">
                <div className="tool-wrapper">
                  <h3 className="dzn-with" style={{ color: isVisible.themeState ? "#fff" : "#000" }}>
                    {portfolioItem.category === "Design"
                      ? "Designed With:"
                      : "Made With:"}
                  </h3>
                  {portfolioItem.content.tools.map((tool, i) => {
                    return (
                      <img src={tool} alt="" className="tool-used" key={i} />
                    );
                  })}
                </div>
                {portfolioItem.content.link && (
                  <ProjectLinkButton
                    target="_blank"
                    rel="noreferrer"
                    href={portfolioItem.content.link}
                    darkTheme={isVisible}
                  >
                    {portfolioItem.category === "Design" && (
                      <img
                        src={dribble}
                        alt=""
                        height="20px"
                        style={{
                          filter: isVisible.themeState
                            ? "invert(0%)"
                            : "invert(100%)",
                        }}
                      />
                    )}
                    {portfolioItem.category === "Engineering" && (
                      <img
                        src={github}
                        alt=""
                        height="20px"
                        style={{
                          filter: isVisible.themeState
                            ? "invert(0%)"
                            : "invert(100%)",
                        }}
                      />
                    )}
                    {portfolioItem.category === "Graffiti" && (
                        <img
                          src={IG}
                          alt=""
                          height="20px"
                          style={{
                            filter: isVisible.themeState
                              ? "invert(0%)"
                              : "invert(100%)",
                          }}
                        />
                      )}
                    {"  "}
                    View Project
                  </ProjectLinkButton>
                )}
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img
              src={portfolioItem.content.images[currentImg]}
              alt="ok"
              // height="80%"
            />
            {portfolioItem.content.images.length > 1 && (
              <div className="carousel-ctrl">
                {" "}
                <CarouselButton onClick={prevImg} darkTheme={isVisible}>
                  Prev
                </CarouselButton>
                <P darkTheme={isVisible}>
                  {currentImg + 1}/{portfolioItem.content.images.length}
                </P>
                <CarouselButton onClick={nextImg} darkTheme={isVisible}>
                  Next
                </CarouselButton>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </MyModal>
  );
}

export default Modal;
