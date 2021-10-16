import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) =>
    props.darkTheme.themeState ? "#000" : "#fff"};
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  transition: 1.8s all;
  margin: 0;
  padding: 0;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.darkTheme.themeState ? "#404040" : "#21211D"};
  color: #fff;
  padding: 0.7rem 2rem;
  // margin-left: 3rem;
  font-size: 25px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  position: relative;
  left: 0.5rem;
  // width: 10rem;
  text-align: center;
  display: inline-block;
  border: 0;
  transition: 0.6s all;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    font-size: 26px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 4px solid #f7c386;
    padding: 2.4rem 4.5rem;
    width: 113%;
    left: -0.75rem;
    top: -0.71rem;
  }
`;
export const DownloadResUmeButton = styled.button`
  background: ${(props) =>
    props.darkTheme.themeState ? "#404040" : "#21211D"};
  color: #fff;
  padding: 1rem 2rem;
  font-size: 14px;
  // font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  border: 0;
  transition: 0.8s all;
  white-space: nowrap;
  border-radius: ${(props) => (props.type === "rounded" ? "25px" : "0")};
  position: fixed;
  bottom: 3rem;
  right: 5rem;

  &:hover {
    cursor: pointer;
    font-size: 15px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 4px solid #f7c386;
    padding: 2rem 2rem;
    width: 110%;
    left: -0.6rem;
    top: -0.6rem;
    border-radius: 35px;
  }
`;

export const ToggleButton = styled.button`
  color: #707070;
  background: none;
  border: none;
  width: 40px;
  transition: 0.8s all;

  &:hover {
    background: none;
    border: none;
    fill: #fff;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  box-sizing: border-box;
`;

export const TagSpan = styled.span`
  color: rgba(128, 128, 128, 0.4);
  font-family: Helvetica Neue;
  font-weight: 100;
  font-style: italic;
  // font-size:12px;
`;

export const H1 = styled.h1`
  font-size: 5rem;
  font-family: Helvetica Neue;
  font-weight: 600;
  font-weight: italic;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
`;
export const P = styled.p`
  font-size: 14px;
  font-family: Helvetica Neue;
  // font-weight: 600;
  font-weight: italic;
  line-height: 1.5rem;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  margin: 0;
  padding-bottom: 0.5rem;
`;

export const UnderlinedAnchor = styled.a`
  font-style: italic;
  font-weight: bold;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  text-decoration: 0.1rem underline;
  text-decoration-color: ${(props) => props.color};
  // text-decoration-style: wavy;
  text-underline-offset: 0.3rem;
  text-decoration-skip: edges;
  transition: 0.4s;

  &:hover {
    transform: translateX(2rem);
    cursor: pointer;
    color: ${(props) => props.color};
  }
`;

export const SideSectionTitle = styled.h3`
  writing-mode: sideways-lr;
  // text-orientation: sideways-right;
  font-family: Helvetica Neue;
  font-size: 600;
  font-size: 26px;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
`;

export const Tabs = styled.button``;

export const PortfolioCard = styled.div`
  width: 350px;
  height: 250px;
  color: ${(props) => (props.darkTheme.themeState ? "#999" : "#fff")};
  background-color: ${(props) =>
    props.darkTheme.themeState ? "#21211D" : "#21211D"};
  fill: ${(props) => (props.darkTheme.themeState ? "#9A9A9AB3" : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  padding: 2rem;

  &:hover {
    cursor: pointer;
    transition: 1s all;
  }
`;

export const MyModal = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

export const CloseButton = styled.button`
  background-color: #B5F5C5;
  // color: #fff;
  border: 0px;
  font-size: 1rem;
  font-family;poppins sans-serif;
  width:35px;
  height:35px;
  border-radius:50%;
  margin-top:.8rem;
  margin-left:-1rem;
  
  
  &:hover {
    background-color: #B5EEF5;
    cursor: pointer;
  }
`;

export const CarouselButton = styled.button`
  background: ${(props) => (props.darkTheme.themeState ? "#000" : "#f7f7f7")};
  border: 0;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-family: poppins;

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.darkTheme.themeState ? "#f7f7f7" : "#000")};
    color: ${(props) => (props.darkTheme.themeState ? "#000" : "#fff")};
    transition: 0.8s all;
  }
`;

export const ProjectLinkButton = styled.a`
  padding: 0rem 1rem;
  width: 160px;
  height: 3rem;
  // background: #b5f5c5;
  border: 2px solid ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  outline: none;
  font-size: 1rem;
  border-radius: 50px;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transition: 0.8s all;
    // color: #000;
    background: rgba(255, 255, 255, 0.1);
    // border: 2px solid ${(props) =>
      props.darkTheme.themeState ? "#b5f5c5" : "#000"};
    border: 2px solid #b5f5c5;
  }
`;

export const CtaText = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
`;

export const H2 = styled.h2`
  text-align: center;
  color: ${(props) => (props.darkTheme.themeState ? "#fff" : "#000")};
  margin-top: 2rem;
`;
