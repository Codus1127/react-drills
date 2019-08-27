import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: ["spaghetti", "ice cream", "pizza", "bread", "milk", "eggs"]
    };
  }
  render() {
    let foodsToDisplay = this.state.foods.map((el, i) => {
      return <h2 key={i}>{el}</h2>;
    });
    return <div className="App">{foodsToDisplay}</div>
  }
}

export default App;
