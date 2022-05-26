import React from "react";
import StarSmall from "../../images/star-small.svg";
import { ScrollRotate } from "react-scroll-rotate";
import ContactButton from "../Buttons/BlueButton";
import Liza from "../../images/old_mac.png";

function AboutCard() {
  return (
    <div className="card-container">
      <div className="star">
        <ScrollRotate method={"perc"}>
          <img src={StarSmall} alt="Painted yellow star with blue border" />
        </ScrollRotate>
      </div>
      <div className="card card-about">
        <img src={Liza} alt="old macintosh Liza" />
        <div className="card-text">
          <p>
            Hi! I&apos;m a <strong>frontend developer</strong> based in Stockholm. I love
            building (and occasionally designing) things for <strong>web</strong>. I'm
            currently developing at{" "}
            <a href="https://www.linkedin.com/company/zyax/" target="_blank">
              Zyax.
            </a>
          </p>
          <p>I love art, nature, good food, nice music and running. </p>
        </div>
      </div>
      <a href="mailto:anromanova@design@gmail.com">
        <ContactButton text="Contact me" />
      </a>
    </div>
  );
}

export default AboutCard;
