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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    setComputerSelect(randomChoice(choice));
  };

  // 재사용을 위해 매개변수 사용
  const randomChoice = (obj) => {
    let keys = Object.keys(obj); // (3) ['rock', 'paper', 'scissors']
    let randomIdx = Math.floor(Math.random() * keys.length); // 0, 1, 2
    let final = keys[randomIdx];
    return obj[final];
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <Box title="you" item={userSelect} />
        <p className="vs">VS</p>
        <Box title="computer" item={computerSelect} />
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
