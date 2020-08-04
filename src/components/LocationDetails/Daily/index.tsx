import React from 'react';
import { DailyForcast } from '../../../models/DailyForcast';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Row from './Row';

type Props = {
  data: DailyForcast[] | undefined;
};

function Daily({ data }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Day</TableCell>
            <TableCell align="center">Temperature</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Precipitation</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((day) => (
            <Row key={day.dt.toString()} data={day} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Daily;
