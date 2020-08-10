import React from 'react';
import { Link } from 'react-router-dom';
import WeatherTile from './WeatherTile';
import { DailyForcast } from '../../../models/rest/weather/DailyForcast';
import { useRouteMatch } from 'react-router';
import {
  Button,
  CardActionArea,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import Moment from 'react-moment';
import { DashboardCard, WeatherTileContainer } from '../styles';
import { CardActionsOnTheRight } from '../../shared/styles';
import {useTranslation} from "react-i18next";

interface Props {
  data: DailyForcast[] | undefined;
}

function WeeklySummaryCard({ data }: Props) {
  const match = useRouteMatch();
  const { t } = useTranslation();

  const date = data ? new Date((data[0]?.dt || 0) * 1000) : new Date();
  return (
    <DashboardCard variant="outlined">
      <CardHeader
        title={t('location-details.weather-daily')}
        subheader={<Moment className="time" date={date} format="M/D/YY" />}
      />
      <CardContent>
        <WeatherTileContainer>
          {data?.slice(0, 5)?.map((day) => (
            <WeatherTile
              key={day.dt.toString()}
              utcSeconds={day.dt}
              timeFormat="M/D"
              temp={day.temp.max}
              icon={day.weather[0]?.id}
              iconCategory={day.weather[0]?.main}
              precip={day.pop}
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
            to={`${match.url}/by/day`}
          >{t('more-info')} </Button>
        </CardActionsOnTheRight>
      </CardActionArea>
    </DashboardCard>
  );
}

export default WeeklySummaryCard;
