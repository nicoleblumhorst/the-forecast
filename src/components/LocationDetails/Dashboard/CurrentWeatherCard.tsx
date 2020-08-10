import React from 'react';
import { CardHeader } from '@material-ui/core';
import moment from 'moment';
import Temperature from '../../shared/Temperature';
import { CurrentWeather } from '../../../models/rest/weather/CurrentWeather';
import { DashboardCard, CurrentWeatherCardContent } from '../styles';
import { LargeWeatherIcon } from '../../shared/styles';
import Percentage from '../../shared/Percentage';
import Moment from 'react-moment';
import {useTranslation} from "react-i18next";

interface Props {
  name?: string;
  data?: CurrentWeather;
}

const CurrentWeatherCard = ({ data, name }: Props) => {
  const { t } = useTranslation();
  const asOf = moment((data?.dt || 0) * 1000).format('M/D h:mmA');

  return (
    <DashboardCard variant="outlined">
      <CardHeader title={name ? t('location-details.current-weather-in', {location: name}) : t('location-details.current-weather')} subheader={t('location-details.as-of', {time: asOf})} />
      <CurrentWeatherCardContent className="weather-tile-container">
        <div style={{ textAlign: "center" }}>
          <LargeWeatherIcon
            className={`wi wi-owm-${data?.weather[0]?.id} ${data?.weather[0]?.main.toLowerCase()}`}
          ></LargeWeatherIcon>
          <p style={{ textTransform: "uppercase" }}>{data?.weather[0]?.description}</p>
        </div>
        <div>
          <Temperature temp={data?.temp} />
          <p>
            {t('common.feels-like')} <Temperature temp={data?.feels_like} />
          </p>
          <p>
            {t('common.humidity')} <Percentage percentage={data?.humidity} />
          </p>
        </div>
        <div>
          <p>{t('location-details.wind-direction')} {data?.wind_deg}</p>
          <p>{t('location-details.wind-speed')} {data?.wind_speed} mph</p>
        </div>
        <div>
          <p>
            {t('location-details.sunrise')}
            <Moment
              className="time"
              date={new Date((data?.sunrise || 0) * 1000)}
              format={'h:m A'}
            />
          </p>
          <p>
            {t('location-details.sunset')}
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
