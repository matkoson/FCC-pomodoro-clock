import React, { Component } from "react";

class Display extends Component {
  render() {
    let mins, secs;
    if (this.props.curMod === "Session") {
      mins = this.props.sMins;
      secs = this.props.sSecs;
    } else {
      mins = this.props.bMins;
      secs = this.props.bSecs;
    }
    if (Number(mins) < 10) mins = `0${mins}`;
    if (Number(secs) < 10) secs = `0${secs}`;

    return (
      <div style={this.props.styleColor} className="display">
        <div className="display__mode">
          <span className="display__mode__title">{this.props.curMod}</span>
        </div>
        <div className="display__counter">
          <span className="display__counter__counter">{`${mins}:${secs}`}</span>
        </div>
      </div>
    );
  }
}

export default Display;
