import React from "react";
import profile from "../../images/profile.png";
import StarSmall from "../../images/star-small.svg";

function AboutCard() {
  return (
    <div className="card-container">
      <img src={StarSmall} className="star" alt="Painted yellow star with blue border" />
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
