import React from 'react';
import Moment from 'react-moment';
import Temperature from '../../shared/Temperature';
import Percentage from '../../shared/Percentage';
import { MediumIcon } from '../../shared/styles';
import { WeatherTile as StyleWeatherTile } from '../styles';

type Props = {
  utcSeconds: number;
  timeFormat: string;
  temp: number;
  icon: number;
  precip: number;
};

function WeatherTile(props: Props) {
  return (
    <StyleWeatherTile>
      <Moment
        className="time"
        date={new Date(props.utcSeconds * 1000)}
        format={props.timeFormat}
      />
      <Temperature temp={props.temp} />
      <p>
        <MediumIcon className={`wi wi-owm-${props.icon}`}></MediumIcon>
      </p>
      <div>
        <i className={`wi wi-raindrop`}></i>{' '}
        <Percentage percentage={props.precip} />
      </div>
    </StyleWeatherTile>
  );
}

export default WeatherTile;
