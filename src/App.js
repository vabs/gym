import React, { Component } from 'react';
import './App.css';

// import Chart from './Chart';
// import Dashboard from './Dashboard';
import Timer from './Timer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        {/* <ul>
            <li>
              <Link to="/gym">Home</Link>
            </li>
            {/* <li>
              <Link to="/chart">Chart</Link>
            </li>
          </ul> 

        <hr /> */}

        <Switch>
          <Route exact path="/gym">
            <Timer />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          {/* <Route path="/chart">
            <Chart />
          </Route> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;