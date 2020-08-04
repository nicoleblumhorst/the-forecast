import React from 'react';
import { Link } from 'react-router-dom';
import WeatherTile from './WeatherTile';
import { DailyForcast } from '../../../models/DailyForcast';
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

interface Props {
  data: DailyForcast[] | undefined;
}

function WeeklySummaryCard({ data }: Props) {
  const match = useRouteMatch();

  const date = data ? new Date((data[0]?.dt || 0) * 1000) : new Date();
  return (
    <DashboardCard variant="outlined">
      <CardHeader
        title="Weather for the Rest of the Week"
        subheader={<Moment className="time" date={date} format="M/D/YY" />}
      />
      <CardContent>
        <WeatherTileContainer>
          {data?.slice(0, 5)?.map((hour) => (
            <WeatherTile
              key={hour.dt.toString()}
              utcSeconds={hour.dt}
              timeFormat="M/D"
              temp={hour.temp.max}
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
            to={`${match.url}/by/day`}
          >
            Get More Info
          </Button>
        </CardActionsOnTheRight>
      </CardActionArea>
    </DashboardCard>
  );
}

export default WeeklySummaryCard;
