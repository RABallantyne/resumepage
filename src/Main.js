import React, { Component } from "react";
import HangmanMain from "./hangman/HangmanMain";
import TriviaMain from "./trivia/TriviaMain";
import BrandName from "./regexfun/BrandName";
import Resume from "./resume/Resume";
import "./Main.css";

export default class Main extends Component {
  state = {
    selection: "resume"
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      selection: event.target.value
    });
  };

  render() {
    return (
      <>
        <header className="nav-container nav-container-s">
          <h2 className="title">Rob Ballantyne</h2>
          <nav className="nav">
            <button value="trivia" onClick={this.handleSubmit}>
              TRIVIA
            </button>
            <button value="brand" onClick={this.handleSubmit}>
              BRAND
            </button>
            <button value="hangman" onClick={this.handleSubmit}>
              HANGMAN
            </button>
            <button value="resume" onClick={this.handleSubmit}>
              HOME
            </button>
          </nav>
        </header>
        <div className="game-container">
          {this.state.selection === "brand" ? <BrandName /> : null}
          {this.state.selection === "trivia" ? <TriviaMain /> : null}
          {this.state.selection === "hangman" ? <HangmanMain /> : null}
          {this.state.selection === "resume" ? <Resume /> : null}
        </div>
      </>
    );
  }
}
