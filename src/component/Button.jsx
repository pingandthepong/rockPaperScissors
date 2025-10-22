import React from "react";
import { choice } from "../data/gameData";

const Button = (props) => {
  return (
    <button className={props.title} onClick={() => props.play(props.title)}>
      <span className="btn-icon">{choice[props.title]["img"]}</span>
      <span className="children">{props.title}</span>
      <span className="effect"></span>
    </button>
  );
};

export default Button;
