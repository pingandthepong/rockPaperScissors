import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Box from "./component/Box";
import Button from "./component/Button";
import { choice, rules, WIN, LOSE, TIE } from "./data/gameData";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 컴퓨터 아이템 랜덤 선택됨
// 5. 3,4의 결과에 따라 승패 따짐
// 6. 승패에 따라 테두리 색 변경됨 (win-초록, lose-빨강, 비기면-검은색)

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    const computerChoice = randomChoice(choice);

    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));

    // 리렌더 될때마다 애니메이션 (리액트는 다른 방법 있는걸로 알고있는데 아직 몰라서 다음에 적용해보겠습니다)
    const itemImages = document.querySelectorAll(".item-image");
    const results = document.querySelectorAll(".result");

    itemImages.forEach((itemImage) => {
      itemImage.classList.add("swing");

      setTimeout(() => {
        itemImage.classList.remove("swing");
      }, 1000);
    });

    results.forEach((result) => {
      result.classList.add("fadeInUp");

      setTimeout(() => {
        result.classList.remove("fadeInUp");
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

  const handleReset = () => {
    location.reload();
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <Box title="you" item={userSelect} result={result} />
        <p className="vs">VS</p>
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="wrapper button-wrapper">
        <Button play={play} title="rock"></Button>
        <Button play={play} title="paper"></Button>
        <Button play={play} title="scissors"></Button>
      </div>
      <button className="btn-reset" onClick={handleReset}>
        reset
      </button>
    </>
  );
}

export default App;
