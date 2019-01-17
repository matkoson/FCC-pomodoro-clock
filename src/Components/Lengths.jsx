import React, { Component } from "react";

class Lengths extends Component {
  render() {
    return (
      <div className="lengths">
        <div className="lengths__length-switch pomodoro-clock-lengths__break-length">
          <span className="pomodoro-clock-lengths__break-length__title  pomodoro-clock-lengths__title">
            Break Length
          </span>
        </div>
        {/*  */}
        <div className="lengths__length-switch  pomodoro-clock-lengths__session-length">
          <span className="pomodoro-clock-lengths__session-length__title pomodoro-clock-lengths__title">
            Session Length
          </span>
        </div>
      </div>
    );
  }
}

export default Lengths;
