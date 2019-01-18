import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display__mode">
          <span className="display__mode__title">Session</span>
        </div>
        <div className="display__counter">
          <span className="display__counter__counter">25:00</span>
        </div>
      </div>
    );
  }
}

export default Display;
