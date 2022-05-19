import React from "react";
import "./Index.css";
import theme from "../../images/theme.svg";
import themeSmall from "../../images/theme-small.svg";
import AboutCard from "./aboutcard";

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
        </header>
        <AboutCard />
      </div>
    </body>
  );
}

export default About;
