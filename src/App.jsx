import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 컴퓨터 아이템 랜덤 선택됨
// 5. 3,4의 결과에 따라 승패 따짐
// 6. 승패에 따라 테두리 색 변경됨 (win-초록, lose-빨강, 비기면-검은색)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    const computerChoice = randomChoice(choice);

    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));

    // 리렌더 될때마다 .item-image에 .swing 클래스 붙였다 떼기 (리액트는 다른 방법 있는걸로 알고있는데 아직 몰라서 다음에 적용해보겠습니다)
    const itemImages = document.querySelectorAll(".item-image");
    itemImages.forEach((itemImage) => {
      itemImage.classList.add("swing");

      setTimeout(() => {
        itemImage.classList.remove("swing");
      }, 1000);
    });
  };

  // 재사용을 위해 매개변수 사용
  const randomChoice = (obj) => {
    let keys = Object.keys(obj); // (3) ['rock', 'paper', 'scissors']
    let randomIdx = Math.floor(Math.random() * keys.length); // 0, 1, 2
    let final = keys[randomIdx]; // "rock", "paper", "scissors"
    return obj[final]; // {name: "~~", img: "~~"}
  };

  const judgement = (user, computer) => {
    const WIN = "WIN 🎉";
    const LOSE = "LOSE 😭";
    const TIE = "Tie 😘";

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

    if (user.name === computer.name) {
      return TIE;
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? WIN : LOSE;
    else if (user.name === "Paper")
      return computer.name === "Rock" ? WIN : LOSE;
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? WIN : LOSE;
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <Box title="you" item={userSelect} result={result} />
        <p className="vs">VS</p>
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="wrapper">
        <button onClick={() => play("rock")}>rock</button>
        <button onClick={() => play("paper")}>paper</button>
        <button onClick={() => play("scissors")}>scissors</button>
      </div>
    </>
  );
}

export default App;
