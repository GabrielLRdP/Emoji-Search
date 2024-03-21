import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Search.css";
import "./components/Line.css";
import Search from "./components/Search";
import Line from "./components/Line";
import emojiData from "./assets/emojiList_mar8cs.json";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleChildState = (childData) => {
    setUserInput(childData);
  };
  let lineTab = [];

  const regEx = new RegExp(userInput, "i");

  lineTab = emojiData.map((element, index) => {
    if (regEx.test(element.keywords)) {
      return <Line title={element.title} symbol={element.symbol} key={index} />;
    }
  });
  return (
    <>
      <Search onDataChange={handleChildState} />
      <div className="results">{lineTab}</div>
    </>
  );
}

export default App;
