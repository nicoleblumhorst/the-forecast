import React from 'react';
import { CardHeader } from '@material-ui/core';
import moment from 'moment';
import Temperature from '../../shared/Temperature';
import { CurrentWeather } from '../../../models/rest/weather/CurrentWeather';
import { DashboardCard, CurrentWeatherCardContent } from '../styles';
import { LargeIcon } from '../../shared/styles';
import Percentage from '../../shared/Percentage';
import Moment from 'react-moment';

interface Props {
  name?: string;
  data?: CurrentWeather;
}

const CurrentWeatherCard = ({ data, name }: Props) => {
  const asOf = `As of ${moment((data?.dt || 0) * 1000).format('M/D h:mmA')}`;

  return (
    <DashboardCard variant="outlined">
      <CardHeader title={name ? `Current Weather in ${name}` : `Current Weather`} subheader={asOf} />
      <CurrentWeatherCardContent className="weather-tile-container">
        <div>
          <LargeIcon
            className={`wi wi-owm-${data?.weather[0]?.id}`}
          ></LargeIcon>
          <p>{data?.weather[0]?.description}</p>
        </div>
        <div>
          <Temperature temp={data?.temp} />
          <p>
            Feels Like <Temperature temp={data?.feels_like} />
          </p>
          <p>
            Humidity <Percentage percentage={data?.humidity} />
          </p>
        </div>
        <div>
          <p>Wind Direction: {data?.wind_deg}</p>
          <p>Wind Speed: {data?.wind_speed} mph</p>
        </div>
        <div>
          <p>
            Sunrise:{' '}
            <Moment
              className="time"
              date={new Date((data?.sunrise || 0) * 1000)}
              format={'h:m A'}
            />
          </p>
          <p>
            Sunset:{' '}
            <Moment
              className="time"
              date={new Date((data?.sunset || 0) * 1000)}
              format={'h:m A'}
            />
          </p>
        </div>
      </CurrentWeatherCardContent>
    </DashboardCard>
  );
};

export default CurrentWeatherCard;
