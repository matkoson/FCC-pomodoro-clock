import React, { Component } from "react";
import "./App.sass";
import Lengths from "./Components/Lengths";
import "./Components/Lengths.sass";
import Display from "./Components/Display";
import "./Components/Display.sass";
import "./assets/Righteous/Righteous-Regular.woff";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionMinutes: "25",
      sessionSeconds: "0",
      sessionLength: "25",
      breakMinutes: "5",
      breakSeconds: "0",
      breakLength: "5",
      modeName: "Session",
      paused: true
    };
    this.resetState = Object.assign({}, this.state);
    this.interval = null;
    this.turnedRed = false;
    this.handlePlayPauseClick = this.handlePlayPauseClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
  }

  handlePlayPauseClick() {
    let mode = this.state.modeName === "Session" ? "session" : "break",
      newMode,
      audio = false;
    //
    if (audio) {
      this.audioFile.pause();
      this.audioFile.currentTime = 0;
    }
    if (this.state.paused) {
      this.setState({ paused: false });

      this.interval = setInterval(() => {
        const curS = this.state;
        if (Number(curS[`${mode}Minutes`]) < 1) this.turnedRed = true;
        //
        if (curS[`${mode}Minutes`] === "0" && curS[`${mode}Seconds`] === "0") {
          console.log(mode);
          this.audioFile.play();
          this.turnedRed = false;
          newMode = mode === "session" ? "Break" : "Session";
          this.setState({
            modeName: newMode,
            [`${mode}Minutes`]: this.resetState[`${mode}Minutes`],
            [`${mode}Seconds`]: this.resetState[`${mode}Seconds`]
          });
          mode = mode === "Session" ? "session" : "break";
          console.log(mode);
          //
        } else if (curS[`${mode}Seconds`] === "0") {
          console.log(mode);
          this.setState(pState => {
            return {
              [`${mode}Seconds`]: 59,
              [`${mode}Minutes`]: String(Number(pState[`${mode}Minutes`]) - 1)
            };
          });
        } else {
          this.setState(pState => {
            return {
              [`${mode}Seconds`]: String(Number(pState[`${mode}Seconds`]) - 1)
            };
          });
        }
      }, 1000);
      //
    } else {
      //
      clearInterval(this.interval);
      this.setState({ paused: true });
      //
    }
    //
  }
  handleArrowPress(event) {
    let id = event.target.id;
    let currS = this.state;
    if (id === "session-up") {
      if (Number(currS.sessionLength < 60)) {
        if (currS.paused || currS.modeName === "Break") {
          this.setState(prevState => {
            return {
              sessionLength: String(Number(prevState.sessionLength) + 1),
              sessionMinutes: String(Number(prevState.sessionLength) + 1)
            };
          });
        } else {
          this.setState(prevState => {
            return {
              sessionLength: String(Number(prevState.sessionLength) + 1)
            };
          });
        }
      }
      //
    } else if (id === "session-down") {
      if (Number(currS.sessionLength > 0)) {
        if (currS.paused || currS.modeName === "Break") {
          this.setState(prevState => {
            return {
              sessionLength: String(Number(prevState.sessionLength) - 1),
              sessionMinutes: String(Number(prevState.sessionLength) - 1)
            };
          });
        } else {
          this.setState(prevState => {
            return {
              sessionLength: String(Number(prevState.sessionLength) - 1)
            };
          });
        }
      }
      //
    } else if (id === "break-up") {
      if (Number(currS.breakLength) < 30) {
        if (currS.paused || currS.modeName === "Session") {
          this.setState(prevState => {
            return {
              breakLength: String(Number(prevState.breakLength) + 1),
              breakMinutes: String(Number(prevState.breakLength) + 1)
            };
          });
        } else {
          this.setState(prevState => {
            return {
              breakLength: String(Number(prevState.breakLength) + 1)
            };
          });
        }
      }
      //
    } else if (id === "break-down") {
      if (Number(currS.breakLength) > 0) {
        if (currS.paused || currS.modeName === "Session") {
          this.setState(prevState => {
            return {
              breakLength: String(Number(prevState.breakLength) - 1),
              breakMinutes: String(Number(prevState.breakLength) - 1)
            };
          });
        } else {
          this.setState(prevState => {
            return { breakLength: String(Number(prevState.breakLength) - 1) };
          });
        }
      }
    }
    //
  }

  handleResetClick() {
    if (this.interval) clearInterval(this.interval);
    this.setState(this.resetState);
  }

  render() {
    let red = this.turnedRed ? { color: "red" } : { color: "white" };
    return (
      <main className="app">
        <div className="pomodoro-clock">
          <div className="pomodoro-clock__top-tab">
            <div className="pomodoro-clock__title">
              <span className="pomodoro-clock__title_text">Pomodoro Clock</span>
            </div>
            <Lengths
              arrowHandler={this.handleArrowPress}
              bLength={this.state.breakLength}
              sLength={this.state.sessionLength}
            />
          </div>
          <div className="pomodoro-clock__bottom-tab">
            <Display
              styleColor={red}
              sMins={this.state.sessionMinutes}
              sSecs={this.state.sessionSeconds}
              bMins={this.state.breakMinutes}
              bSecs={this.state.breakSeconds}
              curMod={this.state.modeName}
            />
            <div className="pomodoro-clock__controls">
              <div
                className="pomodoro-clock__controls__play-pause btn-pointer"
                onClick={this.handlePlayPauseClick}
              >
                <i className="fas fa-play" />
                <i className="fas fa-pause" />
              </div>
              <i
                className="fas fa-redo btn-pointer"
                onClick={this.handleResetClick}
              />
            </div>
          </div>
        </div>
        <audio
          src="https://goo.gl/65cBl1"
          preload="auto"
          ref={audio => {
            this.audioFile = audio;
          }}
        />
      </main>
    );
  }
}

export default App;
