import React from "react";
import "./Buttons.css";

function BlueButton(props) {
  let cb;
  if (props.cb) cb = props.cb;
  return (
    <div>
      <button type="button" onClick={cb}>
        {props.text}
      </button>
    </div>
  );
}

export default BlueButton;
