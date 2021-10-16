import React from "react";

function SubSectionHeaders(props) {
  return (
    <div>
      <p
        style={{
          fontFamily: "poppins",
          fontSize: "24px",
          fontWeight: "500",
          verticalAlign: "center",
          color: props.darkTheme.themeState ? "#fff" : "#000",
          margin:"0",
          padding:"0",
          paddingBottom:'1rem'
        }}
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
      </p>
    </div>
  );
}

export default SubSectionHeaders;
