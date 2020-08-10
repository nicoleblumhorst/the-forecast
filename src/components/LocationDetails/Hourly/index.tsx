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
import {useTranslation} from "react-i18next";

type Props = {
  data: CurrentWeather[] | undefined;
};

function Hourly({ data }: Props) {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{t('location-details.time')}</TableCell>
            <TableCell align="center">{t('location-details.temperature')} ({t('common.feels-like')})</TableCell>
            <TableCell align="center">{t('location-details.description')}</TableCell>
            <TableCell align="center">{t('location-details.precipitation')}</TableCell>
            <TableCell align="center">{t('common.humidity')}</TableCell>
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
