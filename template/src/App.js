import React, { Component } from "react";
import TaskBar from "./window/taskbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskBar />
        <div className="App-header">
          <h1>
            Welcome to your
            {" "}
            <span className="r-text">Electron</span>
            -
            <span className="b-text">React </span>
            App
          </h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
