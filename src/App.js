import React from "react";
import HangmanMain from "./hangman/HangmanMain";
import TriviaMain from "./trivia/TriviaMain";
import BrandName from "./regexfun/BrandName";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <HangmanMain />
      <TriviaMain /> */}
      <BrandName />
    </div>
  );
}

export default App;
