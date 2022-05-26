import React from "react";
import "./Index.css";
import theme from "../../images/theme.svg";
import themeSmall from "../../images/theme-small.svg";
import AboutCard from "./aboutcard";
import ResumeButton from "../Buttons/BlueButton";
import StarMedium from "../../images/star-medium.svg";
import { ScrollRotate } from "react-scroll-rotate";
import MarqueeText from "../Marquee/MarqueeText";

function About() {
  return (
    <body className="about">
      <img src={theme} className="bg-img hide-on-small" alt="theme" />
      <img src={themeSmall} className="bg-img show-on-small" alt="theme-small" />
      <div className="site">
        <header className="site-header">
          <div className="site-branding">
            <a href="/about">
              <h1>Anastasia Romanova</h1>
            </a>
          </div>
          <a href="/resume.pdf">
            <ResumeButton text="Resume" />
          </a>
        </header>
        <AboutCard />
        <div className="star-medium">
          <ScrollRotate method={"perc"}>
            <img src={StarMedium} alt="painted yellow star" />
          </ScrollRotate>
        </div>
        <MarqueeText />
      </div>
    </body>
  );
}

export default About;
