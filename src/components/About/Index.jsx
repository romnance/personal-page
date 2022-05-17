import React from "react";
import "./Index.css";
import theme from "../../images/theme.svg";

function About() {
  return (
    <body className="about">
      <img src={theme} className="bg-image" alt="theme" />
    </body>
  );
}

export default About;
