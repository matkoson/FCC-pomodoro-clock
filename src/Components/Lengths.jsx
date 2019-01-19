import React, { Component } from "react";

class Lengths extends Component {
  render() {
    return (
      <div className="lengths">
        <div className="lengths__length-switch pomodoro-clock-lengths__break-length">
          <span className="pomodoro-clock-lengths__break-length__title pomodoro-clock-lengths__title">
            Break Length
          </span>
          <div className="lengths__length-switch__adjs">
            <i
              onClick={this.props.arrowHandler}
              id="break-down"
              className="fas fa-arrow-down"
            />
            <span className="lengths__length-switch__adjs__counter">
              {this.props.bLength}
            </span>
            <i
              onClick={this.props.arrowHandler}
              id="break-up"
              className="fas fa-arrow-up"
            />
          </div>
        </div>
        {/*  */}
        <div className="lengths__length-switch  pomodoro-clock-lengths__session-length lengths__length-switch-session">
          <span className="pomodoro-clock-lengths__session-length__title pomodoro-clock-lengths__title">
            Session Length
          </span>
          <div className="lengths__length-switch__adjs">
            <i
              onClick={this.props.arrowHandler}
              id="session-down"
              className="fas fa-arrow-down"
            />
            <span className="lengths__length-switch__adjs__counter">
              {this.props.sLength}
            </span>
            <i
              onClick={this.props.arrowHandler}
              id="session-up"
              className="fas fa-arrow-up"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Lengths;
