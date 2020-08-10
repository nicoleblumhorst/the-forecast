import React from 'react';
import { Link } from 'react-router-dom';
import WeatherTile from './WeatherTile';
import { CurrentWeather } from '../../../models/rest/weather/CurrentWeather';
import { useRouteMatch } from 'react-router';
import {
  Button,
  CardActionArea,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import { DashboardCard, WeatherTileContainer } from '../styles';
import { CardActionsOnTheRight } from '../../shared/styles';
import {useTranslation} from "react-i18next";

interface Props {
  data: CurrentWeather[] | undefined;
}

function HourlySummaryCard({ data }: Props) {
  const match = useRouteMatch();
  const { t } = useTranslation();

  return (
    <DashboardCard variant="outlined">
      <CardHeader title={t('location-details.weather-hour')} />
      <CardContent className="weather-tile-container">
        <WeatherTileContainer>
          {data?.slice(0, 5)?.map((hour) => (
            <WeatherTile
              key={hour.dt.toString()}
              utcSeconds={hour.dt}
              timeFormat="hA"
              temp={hour.temp}
              icon={hour.weather[0]?.id}
              precip={hour.pop}
            />
          ))}
        </WeatherTileContainer>
      </CardContent>
      <CardActionArea>
        <CardActionsOnTheRight>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={`${match.url}/by/hour`}
          >{t('more-info')}</Button>
        </CardActionsOnTheRight>
      </CardActionArea>
    </DashboardCard>
  );
}

export default HourlySummaryCard;
