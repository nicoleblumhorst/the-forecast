import React from 'react';
import { DailyForcast } from '../../../models/rest/weather/DailyForcast';
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
import {useTranslation} from "react-i18next";

type Props = {
  data: DailyForcast[] | undefined;
};

function Daily({ data }: Props) {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{t('location-details.day')}</TableCell>
            <TableCell align="center">{t('location-details.temperature')}</TableCell>
            <TableCell align="center">{t('location-details.description')}</TableCell>
            <TableCell align="center">{t('location-details.precipitation')}</TableCell>
            <TableCell align="center">{t('common.humidity')}</TableCell>
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
