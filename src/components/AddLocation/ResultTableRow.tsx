import React from 'react';
import { Location } from '../../models/rest/location/Location';
import { Button, TableCell, TableRow } from '@material-ui/core';
import {useTranslation} from "react-i18next";

type Props = {
  location: Location;
  onSelect: (location: Location) => void;
};

const ResultTableRow = (props: Props) => {
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell>{props.location.label}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={() => props.onSelect(props.location)}
        >{t('add-location.this-one')}</Button>
      </TableCell>
    </TableRow>
  );
};

export default ResultTableRow;
