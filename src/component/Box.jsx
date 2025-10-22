import React from "react";

const WIN = "WIN 🎉";
const LOSE = "LOSE 😭";
const TIE = "TIE 😘";

const Box = (props) => {
  let result; // props는 read-only로 직접 변경 불가 => 로컬 변수에 담아서 사용해야 함

  if (
    props.title === "computer" &&
    props.result !== TIE &&
    props.result !== ""
  ) {
    // computer가 이기거나, 질 때 props.result와 반대로 출력
    result = props.result === WIN ? LOSE : WIN;
  } else {
    // user는 값 그대로 출력
    result = props.result;
  }

  const resultTrim = result.indexOf(" ");
  const resultToClass = result.toLowerCase().slice(0, resultTrim);

  return (
    <div className={`box ${resultToClass}`}>
      <h2 className="title">{props.title}</h2>
      <h3 className="item-image">{props.item ? props.item.img : "？"}</h3>
      <h3 className="result">{result}</h3>
    </div>
  );
};

export default Box;

// WIN 🎉
// LOSE 😭
// TIE 😘
