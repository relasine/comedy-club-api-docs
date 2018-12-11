import React, { Component } from "react";
import "../../styles/App.css";
import Intro from "../Intro";
import Instructions from "../Instructions";
import PaneContainer from "../PaneContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Instructions />
        <PaneContainer />
        <div />
      </div>
    );
  }
}

export default App;
