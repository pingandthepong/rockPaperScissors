import { rules, WIN, LOSE, TIE } from "../data/gameData";

// 재사용을 위해 매개변수 사용
export const randomChoice = (obj) => {
  let keys = Object.keys(obj); // (3) ['rock', 'paper', 'scissors']
  let randomIdx = Math.floor(Math.random() * keys.length); // 0, 1, 2
  let final = keys[randomIdx]; // "rock", "paper", "scissors"
  return obj[final]; // {name: "~~", img: "~~"}
};

export const judgement = (user, computer) => {
  if (user.name === computer.name) return TIE;
  return rules[user.name] === computer.name ? WIN : LOSE;

  // 하드코딩1
  // if (
  //   (user.name === "Rock" && computer.name === "Scissors") ||
  //   (user.name === "Paper" && computer.name === "Rock") ||
  //   (user.name === "Scissors" && computer.name === "Paper")
  // ) {
  //   return WIN;
  // } else if (
  //   (user.name === "Rock" && computer.name === "Paper") ||
  //   (user.name === "Paper" && computer.name === "Scissors") ||
  //   (user.name === "Scissors" && computer.name === "Rock")
  // ) {
  //   return LOSE;
  // } else {
  //   return TIE;
  // }

  // 하드코딩2
  // if (user.name === computer.name) {
  //   return TIE;
  // } else if (user.name === "Rock")
  //   return computer.name === "Scissors" ? WIN : LOSE;
  // else if (user.name === "Paper")
  //   return computer.name === "Rock" ? WIN : LOSE;
  // else if (user.name === "Scissors")
  //   return computer.name === "Paper" ? WIN : LOSE;
};