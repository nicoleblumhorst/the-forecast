import React from 'react';
import { Location } from '../../models/rest/location/Location';
import { Button, TableCell, TableRow } from '@material-ui/core';

type Props = {
  location: Location;
  onSelect: (location: Location) => void;
};

const ResultTableRow = (props: Props) => {
  return (
    <TableRow>
      <TableCell>{props.location.label}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={() => props.onSelect(props.location)}
        >
          This one!
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ResultTableRow;
