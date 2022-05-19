import React from "react";
import profile from "../../images/profile.png";
import StarSmall from "../../images/star-small.svg";
import { ScrollRotate } from "react-scroll-rotate";

function AboutCard() {
  return (
    <div className="card-container">
      <div className="star">
        <ScrollRotate method={"perc"}>
          <img src={StarSmall} alt="Painted yellow star with blue border" />
        </ScrollRotate>
      </div>
      <div className="card card-about">
        <img src={profile} alt="author profile picture" />
        <div>
          <p>
            Hi! I&apos;m a <strong>frontend developer</strong> from Stockholm. I love
            building things for <strong>web</strong>. Art and design are what inspire me
            every day.
          </p>
          <p>I love nature, good food, nice music and running.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
