import React, { Component } from "react";
import "./App.sass";
import Lengths from "./Components/Lengths";
import "./Components/Lengths.sass";
import Display from "./Components/Display";
import "./Components/Display.sass";

class App extends Component {
  render() {
    return (
      <main className="app">
        <div className="pomodoro-clock">
          <div className="pomodoro-clock__top-tab">
            <div className="pomodoro-clock__title">
              <span className="pomodoro-clock__title_text">Pomodoro Clock</span>
            </div>
            <Lengths />
          </div>
          <Display />
          <div className="pomodoro-clock__controls" />
        </div>
      </main>
    );
  }
}

export default App;
