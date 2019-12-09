import React, { Component } from "react";
import "./BrandName.css";
import HipDisplay from "./HipDisplay";
export default class BrandName extends Component {
  state = {
    input: "",
    output: []
  };

  hip = input => {
    let formatted = input
      .toUpperCase()
      .replace(/[AEIOU]/gi, "")
      .split(/[ ,]+/);
    let allBoxes = formatted.map(group => group.split(""));
    this.setState({
      output: allBoxes
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
      <div className="brand-main">
        <h1>
          Create your brand! Enter your name (or whatever text you like) and
          I'll make it hip for you...
        </h1>
        <div className="input-form">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              type="text"
              name="input"
              onChange={this.handleChange}
            ></input>
            <button onClick={this.handleSubmit}>HIP IT!</button>
          </form>
        </div>

        {this.state.output.length > 0 ? (
          <HipDisplay input={this.state.output} />
        ) : null}
      </div>
    );
  }
}
