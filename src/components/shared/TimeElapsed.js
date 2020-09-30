import React from "react";

import '../../styles/timer.css';

const leftPad = (width, n) => {
  if ((n + '').length > width) {
	  return n;
  }
  const padding = new Array(width).join('0');
  return (padding + n).slice(-width);
};

class TimeElapsed extends React.Component {
  getUnits() {
    const seconds = this.props.timeElapsed / 1000;
    return {
      hour: Math.floor(seconds/60/60).toString(),
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const units = this.getUnits();
    return (
      <div id={this.props.id}>
        <span className={`clock ${this.props.data}`}>{leftPad(2, units.hour)}:</span>
        <span className={`clock ${this.props.data}`}>{leftPad(2, units.min)}:</span>
        <span className={`clock ${this.props.data}`}>{leftPad(2, units.sec)}.</span>
        <span className={`clock ${this.props.data}`}>{units.msec}</span>
      </div>
    );
  }
}

export default TimeElapsed;