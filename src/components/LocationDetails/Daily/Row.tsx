import React from 'react';
import Moment from 'react-moment';
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Temperature from '../../shared/Temperature';
import Percentage from '../../shared/Percentage';
import { DailyForcast } from '../../../models/DailyForcast';
import { CollapsableTableRow } from '../styles';
import { makeStyles } from '@material-ui/core/styles';
import CollapsedRow from './CollapsedRow';

type Props = {
  data: DailyForcast;
};

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row({ data }: Props) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="center">
          <Moment date={new Date(data.dt * 1000)} format="ddd (M/D)" />
        </TableCell>
        <TableCell align="center">
          <Temperature temp={data?.temp.max} /> /{' '}
          <Temperature temp={data?.temp.min} />
        </TableCell>
        <TableCell align="center">
          <p>
            <i className={`wi wi-owm-${data.weather[0]?.id}`}></i>{' '}
            {data.weather[0].description}
          </p>
        </TableCell>
        <TableCell align="center">
          <i className={`wi wi-raindrop`}></i>{' '}
          <Percentage percentage={data.pop} />
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <CollapsableTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <CollapsedRow data={data} />
            </Box>
          </Collapse>
        </TableCell>
      </CollapsableTableRow>
    </React.Fragment>
  );
}

export default Row;
