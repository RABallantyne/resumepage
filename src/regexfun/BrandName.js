import React, { Component } from "react";

export default class BrandName extends Component {
  state = {
    input: "",
    output: []
  };

  hip = input => {
    let capped = input.toUpperCase().replace(/[AEIOU]/gi, "");
    let cappedDashed = capped.replace(/\s/g, " - ");
    this.setState({
      output: cappedDashed
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.hip(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            type="text"
            name="input"
            onChange={this.handleChange}
          ></input>
          <button>hip it!</button>
        </form>
        <h1>{this.state.output}</h1>
      </div>
    );
  }
}
