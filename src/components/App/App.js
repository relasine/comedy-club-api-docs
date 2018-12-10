import React, { Component } from "react";
import "../../styles/App.css";
import Intro from "../Intro";
import Instructions from "../Instructions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Instructions />
        <div />
      </div>
    );
  }
}

export default App;
