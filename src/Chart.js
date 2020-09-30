import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, 
  VerticalRectSeries,
  VerticalBarSeries,
  XAxis, YAxis, 
  VerticalGridLines,
  HorizontalGridLines,
  Hint, DiscreteColorLegend} from 'react-vis';

class Chart extends Component {

  render() {

    const ITEMS = [
      'Warmup',
      'Surya Namaskar',
      'Break',
      'Yoga',
    ];

    return (
      <div className="App">
        <XYPlot height={900} width={2000} xType="ordinal" stackBy="y">
          <DiscreteColorLegend 
            style={{position: 'absolute', left: '950px', top: '10px'}}
            orientation="horizontal"
            height={200} width={300} items={ITEMS} 
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Date" tickLabelAngle={-25} />
          <YAxis title="Total Time" />
          <VerticalBarSeries
            data={[
              {x: 'July 21', y: 2.37},
              {x: 'July 22', y: 2.43},
              {x: 'July 23', y: 2.58},
              {x: 'July 24', y: 2.42},
              {x: 'July 25', y: 2.50},
              {x: 'July 26', y: 2.29},
              {x: 'July 27', y: 2.41},
              {x: 'July 28', y: 2.35},
              {x: 'July 29', y: 2.38},
              {x: 'July 30', y: 2.40},
              {x: 'August 1', y: 2.35},
              {x: 'August 2', y: 2.40},
              {x: 'August 3', y: 2.25},
              {x: 'August 4', y: 2.28},
              {x: 'August 5', y: 2.33},
              {x: 'August 6', y: 2.49},
              {x: 'August 7', y: 2.44},
              {x: 'August 8', y: 2.21},
              {x: 'August 9', y: 2.33},
              {x: 'August 10', y: 2.45},
              {x: 'August 11', y: 2.33},
              {x: 'August 12', y: 2.34},
              {x: 'August 13', y: 2.27},
              {x: 'August 14', y: 2.30},
              {x: 'August 15', y: 2.34},
              {x: 'August 16', y: 2.37},
              {x: 'August 17', y: 2.08},
              {x: 'August 18', y: 2.15},
              {x: 'August 19', y: 2.20},
              {x: 'August 20', y: 2.18},
              {x: 'August 21', y: 2.44},
              {x: 'August 22', y: 0},
              {x: 'August 23', y: 0},
              {x: 'August 24', y: 2.24},
              {x: 'August 25', y: 2.52},
              {x: 'August 26', y: 2.26},
              {x: 'August 27', y: 2.28},
              {x: 'August 28', y: 2.35},
              {x: 'August 29', y: 2.36},
              {x: 'August 30', y: 0},
              {x: 'August 31', y: 2.31},
              {x: 'September 1', y: 2.26},
              {x: 'September 2', y: 2.28},
              {x: 'September 3', y: 2.35},
              {x: 'September 4', y: 2.36},
              {x: 'September 5', y: 2.30},
              {x: 'September 6', y: 0},
              {x: 'September 7', y: 2.21},
              {x: 'September 8', y: 2.21},
              {x: 'September 8', y: 2.18},
            ]}
          />
          <VerticalBarSeries
            data={[
              {x: 'July 21', y: 2.37},
              {x: 'July 22', y: 2.43},
              {x: 'July 23', y: 2.58},
              {x: 'July 24', y: 2.42},
              {x: 'July 25', y: 2.50},
              {x: 'July 26', y: 2.29},
              {x: 'July 27', y: 2.41},
              {x: 'July 28', y: 2.35},
              {x: 'July 29', y: 2.38},
              {x: 'July 30', y: 2.40},
              {x: 'August 1', y: 2.35},
              {x: 'August 2', y: 2.40},
              {x: 'August 3', y: 2.25},
              {x: 'August 4', y: 2.28},
              {x: 'August 5', y: 2.33},
              {x: 'August 6', y: 2.49},
              {x: 'August 7', y: 2.44},
              {x: 'August 8', y: 2.21},
              {x: 'August 9', y: 2.33},
              {x: 'August 10', y: 2.45},
              {x: 'August 11', y: 2.33},
              {x: 'August 12', y: 2.34},
              {x: 'August 13', y: 2.27},
              {x: 'August 14', y: 2.30},
              {x: 'August 15', y: 2.34},
              {x: 'August 16', y: 2.37},
              {x: 'August 17', y: 2.08},
              {x: 'August 18', y: 2.15},
              {x: 'August 19', y: 2.20},
              {x: 'August 20', y: 2.18},
              {x: 'August 21', y: 2.44},
              {x: 'August 22', y: 0},
              {x: 'August 23', y: 0},
              {x: 'August 24', y: 2.24},
              {x: 'August 25', y: 2.52},
              {x: 'August 26', y: 2.26},
              {x: 'August 27', y: 2.28},
              {x: 'August 28', y: 2.35},
              {x: 'August 29', y: 2.36},
              {x: 'August 30', y: 0},
              {x: 'August 31', y: 14.25},
              {x: 'September 1', y: 15.04},
              {x: 'September 2', y: 12.53},
              {x: 'September 3', y: 13.34},
              {x: 'September 4', y: 11.59},
              {x: 'September 5', y: 13.26},
              {x: 'September 6', y: 0},
              {x: 'September 7', y: 14.25},
              {x: 'September 8', y: 17.32},
              {x: 'September 9', y: 16.59},
            ]}/>
          <VerticalBarSeries
            data={[
              {x: 'July 21', y: 2.37},
              {x: 'July 22', y: 2.43},
              {x: 'July 23', y: 2.58},
              {x: 'July 24', y: 2.42},
              {x: 'July 25', y: 2.50},
              {x: 'July 26', y: 2.29},
              {x: 'July 27', y: 2.41},
              {x: 'July 28', y: 2.35},
              {x: 'July 29', y: 2.38},
              {x: 'July 30', y: 2.40},
              {x: 'August 1', y: 2.35},
              {x: 'August 2', y: 2.40},
              {x: 'August 3', y: 2.25},
              {x: 'August 4', y: 2.28},
              {x: 'August 5', y: 2.33},
              {x: 'August 6', y: 2.49},
              {x: 'August 7', y: 2.44},
              {x: 'August 8', y: 2.21},
              {x: 'August 9', y: 2.33},
              {x: 'August 10', y: 2.45},
              {x: 'August 11', y: 2.33},
              {x: 'August 12', y: 2.34},
              {x: 'August 13', y: 2.27},
              {x: 'August 14', y: 2.30},
              {x: 'August 15', y: 2.34},
              {x: 'August 16', y: 2.37},
              {x: 'August 17', y: 2.08},
              {x: 'August 18', y: 2.15},
              {x: 'August 19', y: 2.20},
              {x: 'August 20', y: 2.18},
              {x: 'August 21', y: 2.44},
              {x: 'August 22', y: 0},
              {x: 'August 23', y: 0},
              {x: 'August 24', y: 2.24},
              {x: 'August 25', y: 2.52},
              {x: 'August 26', y: 2.26},
              {x: 'August 27', y: 2.28},
              {x: 'August 28', y: 2.35},
              {x: 'August 29', y: 2.36},
              {x: 'August 30', y: 0},
              {x: 'August 31', y: 2.31},
              {x: 'September 1', y: 2.26},
              {x: 'September 2', y: 2.28},
              {x: 'September 3', y: 2.35},
              {x: 'September 4', y: 2.36},
              {x: 'September 5', y: 2.30},
              {x: 'September 6', y: 0},
              {x: 'September 7', y: 2.21},
              {x: 'September 8', y: 2.18},
            ]}/>
          <VerticalBarSeries
            data={[
              {x: 'July 21', y: 8.59},
              {x: 'July 22', y: 9.57},
              {x: 'July 23', y: 2.58},
              {x: 'July 24', y: 2.42},
              {x: 'July 25', y: 2.50},
              {x: 'July 26', y: 2.29},
              {x: 'July 27', y: 2.41},
              {x: 'July 28', y: 2.35},
              {x: 'July 29', y: 2.38},
              {x: 'July 30', y: 2.40},
              {x: 'August 1', y: 2.35},
              {x: 'August 2', y: 2.40},
              {x: 'August 3', y: 2.25},
              {x: 'August 4', y: 2.28},
              {x: 'August 5', y: 2.33},
              {x: 'August 6', y: 2.49},
              {x: 'August 7', y: 2.44},
              {x: 'August 8', y: 2.21},
              {x: 'August 9', y: 2.33},
              {x: 'August 10', y: 2.45},
              {x: 'August 11', y: 2.33},
              {x: 'August 12', y: 2.34},
              {x: 'August 13', y: 2.27},
              {x: 'August 14', y: 2.30},
              {x: 'August 15', y: 2.34},
              {x: 'August 16', y: 2.37},
              {x: 'August 17', y: 2.08},
              {x: 'August 18', y: 2.15},
              {x: 'August 19', y: 2.20},
              {x: 'August 20', y: 2.18},
              {x: 'August 21', y: 2.44},
              {x: 'August 22', y: 0},
              {x: 'August 23', y: 0},
              {x: 'August 24', y: 2.24},
              {x: 'August 25', y: 2.52},
              {x: 'August 26', y: 2.26},
              {x: 'August 27', y: 2.28},
              {x: 'August 28', y: 2.35},
              {x: 'August 29', y: 2.36},
              {x: 'August 30', y: 0},
              {x: 'August 31', y: 2.31},
              {x: 'September 1', y: 2.26},
              {x: 'September 2', y: 2.28},
              {x: 'September 3', y: 2.35},
              {x: 'September 4', y: 2.36},
              {x: 'September 5', y: 2.30},
              {x: 'September 6', y: 0},
              {x: 'September 7', y: 2.21},
              {x: 'September 8', y: 2.18},
              
            ]}/>
        </XYPlot>
        
      </div>
    );
  }
}

export default Chart;