import React from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "✊🏻",
  },
  paper: {
    name: "Paper",
    img: "🤚🏻",
  },
  scissors: {
    name: "Scissors",
    img: "✌🏻",
  },
};

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
