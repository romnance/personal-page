import React from "react";
import "./Ukraine.css";
import flag from "../../images/flag.svg";

function Ukraine() {
  return (
    <body className="home">
      <img className="bg-img" src={flag} alt="ukranian flag" />
      <div className="hero">
        <h1>Cлава Україні</h1>
      </div>
      <p>
        “Imagine all the people living life in peace. You may say that I'm a dreamer, but
        I'm not the only one. I hope someday you'll join us and the world will be as one.”
        —John Lennon
      </p>
      <h3 className="enter">
        <a href="/about">Enter</a>
      </h3>
    </body>
  );
}

export default Ukraine;
