import React, { Component } from "react";

class Lengths extends Component {
  render() {
    return (
      <div className="lengths">
        <div className="lengths__length-switch pomodoro-clock-lengths__break-length">
          <span className="pomodoro-clock-lengths__break-length__title pomodoro-clock-lengths__title">
            Break Length
          </span>
          <div class="lengths__length-switch__adjs">
            <i className="fas fa-arrow-down" />
            <span className="lengths__length-switch__adjs__counter">5</span>
            <i className="fas fa-arrow-up" />
          </div>
        </div>
        {/*  */}
        <div className="lengths__length-switch  pomodoro-clock-lengths__session-length">
          <span className="pomodoro-clock-lengths__session-length__title pomodoro-clock-lengths__title">
            Session Length
          </span>
          <div class="lengths__length-switch__adjs">
            <i className="fas fa-arrow-down" />
            <span className="lengths__length-switch__adjs__counter">5</span>
            <i className="fas fa-arrow-up" />
          </div>
        </div>
      </div>
    );
  }
}

export default Lengths;
