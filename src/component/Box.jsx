import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h2 className="title">{props.title}</h2>
      <h3 className="item-image">{props.item ? props.item.img : "？"}</h3>
      <h3 className="result">{props.result}</h3>
    </div>
  );
};

export default Box;

// WIN 🎉
// LOSE 😭
// Tie 😘
