import React, {Component} from "react";

import './styles/timer.css';

class Workout extends Component {

  constructor() {
    super();
    this.workoutClick = this.workoutClick.bind(this);
  }

  workoutClick() {
    this.props.workoutClick(this);
  }

  render() {
    return(
      <React.Fragment>
        <div 
          className={`slot color${this.props.index} 
                      ${this.props.default ? 'default': ''}
                      ${this.props.active ? 'active': ''}`}
          onClick={() => this.workoutClick()}>
          {this.props.title}
        </div>
      </React.Fragment>
    )
  }
}

export default Workout;