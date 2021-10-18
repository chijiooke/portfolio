import React ,{useContext}from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";
import { SubsectionHeaders } from "./styledComponents";

function SubSectionHeaders(props) {
  const theme =useContext(ThemeContext)
  return (
    <div>
      <SubsectionHeaders darkTheme={theme}
      >
        <span
          style={{
            color: props.color,
            fontWeight: "900",
            padding: "0",
            margin:'0'
          }}
        >
          –
        </span>{" "}
        {props.children}
      </SubsectionHeaders>
    </div>
  );
}

export default SubSectionHeaders;
