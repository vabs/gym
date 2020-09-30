import React from "react";

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import TimeElapsed from './TimeElapsed';

class Timing extends React.Component {
  render() {

    const rows = this.props.timings.map((row) =>
      <TableRow key={row.exerciseIndex}>
        <TableCell component="th" scope="row" size="small">
          {row.exerciseIndex}
        </TableCell>
        <TableCell align="right">{row.title}</TableCell>
        <TableCell align="right">
          <TimeElapsed timeElapsed={row.interval} data="clock-data" />
        </TableCell>
        <TableCell align="right">
          <TimeElapsed timeElapsed={row.time} data="clock-data" />
        </TableCell>
      </TableRow>
    );

    return (
      <React.Fragment>
        <div>
          <Box mt={3}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell size="small">Exercise #</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Interval</TableCell>
                    <TableCell align="right">Total Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
        {this.props.timings.length > 0 && 
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowDownwardIcon />}
              onClick={this.props.exportClick}
              href={this.props.href}
              download="data.json"
            >
              Export
            </Button>
          </Box>
        }
      </React.Fragment>
    );
  }
}

export default Timing;