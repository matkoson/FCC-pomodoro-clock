import React, { Component } from "react";
import "./App.sass";
import Lengths from "./Components/Lengths";
import "./Components/Lengths.sass";
import Display from "./Components/Display";
import "./Components/Display.sass";
import "./assets/Righteous/Righteous-Regular.woff";

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
          <div className="pomodoro-clock__bottom-tab">
            <Display />
            <div className="pomodoro-clock__controls">
              <div class="pomodoro-clock__controls__play-pause">
                <i className="fas fa-play" />
                <i className="fas fa-pause" />
              </div>
              <i className="fas fa-redo" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
