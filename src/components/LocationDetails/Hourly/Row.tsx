import React from 'react';
import Moment from 'react-moment';
import { TableCell, TableRow } from '@material-ui/core';
import Temperature from '../../shared/Temperature';
import Percentage from '../../shared/Percentage';
import { CurrentWeather } from '../../../models/rest/weather/CurrentWeather';
import {MediumWeatherIcon, SmallWeatherIcon, WeatherIcon} from "../../shared/styles";

type Props = {
  data: CurrentWeather;
};

function Row({ data }: Props) {
  return (
    <TableRow>
      <TableCell align="center">
        <Moment date={new Date(data.dt * 1000)} format="h A" />
      </TableCell>
      <TableCell align="center">
        <Temperature temp={data?.temp} />
        (<Temperature temp={data?.feels_like} />)
      </TableCell>
      <TableCell align="center">
        <p>
          <SmallWeatherIcon className={`wi wi-owm-${data.weather[0]?.id} ${data.weather[0]?.main.toLowerCase()}`}/>
          {' '}
          {data.weather[0].description}
        </p>
      </TableCell>
      <TableCell align="center">
        <Percentage percentage={data.pop} />
      </TableCell>
      <TableCell align="center">
        <Percentage percentage={data.humidity} />
      </TableCell>
    </TableRow>
  );
}

export default Row;
