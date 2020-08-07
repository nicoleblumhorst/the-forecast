import React from 'react';
import { CurrentWeather } from '../../../models/rest/weather/CurrentWeather';
import Paper from '@material-ui/core/Paper';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Row from './Row';

type Props = {
  data: CurrentWeather[] | undefined;
};

function Hourly({ data }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Temperature (Feels Like)</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Precipitation</TableCell>
            <TableCell align="center">Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((day) => (
            <Row data={day} key={day.dt.toString()} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Hourly;
