import React, {Component} from "react";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {workouts} from './config/config.json';
import Workout from './Workout';
import TimeElapsed from './components/shared/TimeElapsed';
import Timing from './components/shared/Timing';


class Timer extends Component {

  intervalId = 0;
  jsonString = 'data:text/json;charset=utf-8,';
  constructor() {
    super();
    this.state = { timeElapsed: 0, isRunning: false, timings: [], current: '', href: this.jsonString };
    this.handleWorkoutClick = this.handleWorkoutClick.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.exportClick = this.exportClick.bind(this);
    this.isCurrentlyActive = this.isCurrentlyActive.bind(this);
  }

  updateTimer() {
    const delta = Date.now() - this.startTime;
    this.setState({timeElapsed: this.state.timeElapsed + delta, isRunning: true});
    this.startTime = Date.now();
  }

  startTimer() {
    if(!this.state.isRunning) {
      this.startTime = Date.now();
      this.intervalId = setInterval(this.updateTimer, 10);
    }
  }

  isCurrentlyActive(e) {
    console.log('ELE', e)
  }

  pauseClick() {
    this.handleTiming();
    clearInterval(this.intervalId);
    this.setState({'current': '', isRunning: false});
  }

  resetClick() {
    clearInterval(this.intervalId);
        this.setState({'current': '', isRunning: false, timings: [], timeElapsed: 0, href: this.jsonString});
  }

  handleTiming() {
    const {timings, timeElapsed, current}  = this.state;
    let interval = timeElapsed;
    let exerciseIndex = timings.length;
    if(timings.length > 0) {
      interval = timeElapsed - timings.slice(-1)[0].time
    }
    this.setState({timings: timings.concat({
      time: timeElapsed, interval, 
      title: current,
      exerciseIndex: exerciseIndex+1})});
  }

  handleWorkoutClick = (e) => {
    this.setState({'current': e.props.title});
    const {current, isRunning} = this.state;
    
    if(e.props.title === 'Pause') {
      if(this.intervalId > 0) {
        this.pauseClick();
      }
    } else if(e.props.title === 'Reset') {
      if(this.intervalId > 0) {
        this.resetClick();
      }
    } else if(current !== '' && e.props.title !== current && isRunning) {
      this.handleTiming();
    } else {
      this.startTimer();
    }
  }

  exportClick = () => {
    let dataStr = this.jsonString + encodeURIComponent(JSON.stringify(this.state.timings));
    this.setState({href: dataStr});
  }

  render() {
    return(
      <React.Fragment>
        <Box color="text.primary">
          <Container maxWidth="lg">
            <TimeElapsed id="timer" timeElapsed={this.state.timeElapsed} />
          </Container>
          <Container maxWidth="lg">
            <Grid container>
              
              {workouts.map((workout, index) =>
                <Box mr={2} key={index}>
                  <Grid item>
                    <Workout 
                      title={workout.title}
                      workoutClick={this.handleWorkoutClick}
                      color={workout.color}
                      index="5"
                      active={this.state.current === workout.title} 
                    >  
                    </Workout>
                  </Grid>
                </Box>
              )}
              <Box mr={2}>
                <Grid item>
                  <Workout 
                    title="Pause" 
                    workoutClick={this.handleWorkoutClick}
                    index="4"
                    default={true}
                    active={false}
                  >  
                  </Workout>
                </Grid>
              </Box>
              <Box mr={2}>
                <Grid item>
                  <Workout 
                    title="Reset" 
                    workoutClick={this.handleWorkoutClick}
                    index="4"
                    default={true}
                    active={false} 
                  >  
                  </Workout>
                </Grid>
              </Box>
            </Grid>
          </Container>
          <Container maxWidth="lg">
            <Timing timings={this.state.timings} 
                    exportClick={this.exportClick}
                    href={this.state.href} />
          </Container>
        </Box>
      </React.Fragment>
    )
  }
}

export default Timer;