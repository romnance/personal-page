import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";
import Icon from "../../images/lightning-fill.svg";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";
import Envelope from "../../images/envelope.svg";
import Images from "../../images/images.svg";

function MarqueeText() {
  return (
    <div className="marquee-container">
      <Marquee
        style={{
          height: "45px",
          fontWeight: "1.5rem",
        }}
        pauseOnHover={true}
        speed={100}
        gradientColor={[221, 186, 225]}
        gradientWidth={20}
      >
        <p>Find me online</p>
        <p>
          <img src={Icon} alt="lightning" />
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/anastasiia-romanova-0a3289135"
            target="_blank"
          >
            linkedin
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/anastasiia-romanova-0a3289135"
            target="_blank"
          >
            <img src={Linkedin} alt="LinkedIn logo" />
          </a>
        </p>
        <p>
          <a target="_blank" href="mailto:anromanova@design@gmail.com">
            email
          </a>
        </p>
        <p>
          <a target="_blank" href="mailto:anromanova@design@gmail.com">
            <img src={Envelope} alt="Envelope" />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/romnance">
            github
          </a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/romnance">
            <img src={Github} alt="Github logo" />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/romachkarom/">
            instagram
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.instagram.com/romachkarom/">
            <img src={Images} alt="Images" />
          </a>
        </p>
      </Marquee>
    </div>
  );
}

export default MarqueeText;
