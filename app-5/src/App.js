import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import Water from './water.png'

class App extends Component {
  constructor(){
    super();
    // this.state =
  }

  render() {
    return (
      <div className="App">
        <Image myImage={"https://http.cat/409"} />
        <img src={Water} />
      </div>

    );
  }
}

export default App;