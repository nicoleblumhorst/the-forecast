import React from 'react';
import Temperature from '../shared/Temperature';
import { Link } from 'react-router-dom';
import { CurrentWeatherRS } from '../../models/CurrentWeatherRS';
import { Button, CardActionArea } from '@material-ui/core';
import { Divider, GridDiv, StyledCard, StyledCardContent } from './styles';
import { CardActionsOnTheRight, LargeIcon } from '../shared/styles';
import Percentage from '../shared/Percentage';

type Props = {
  locationData: CurrentWeatherRS;
};

function Location({ locationData }: Props) {
  const locationClassName = getLocationClass(locationData.main.temp);

  return (
    <StyledCard className={locationClassName} variant="outlined">
      <StyledCardContent>
        <h2>{locationData.name}</h2>
        <h4>{locationData.sys.country}</h4>
        <LargeIcon
          className={`wi wi-owm-${locationData.weather[0]?.id}`}
        ></LargeIcon>
        <Divider />
        <GridDiv>
          <span className="temp">
            <Temperature temp={locationData.main.temp} />
          </span>
          <p className="feels-like">
            Feels like <Temperature temp={locationData.main.feels_like} />
          </p>
          <p className="high">
            High <Temperature temp={locationData.main.temp_max} />
          </p>
          <p className="low">
            Low <Temperature temp={locationData.main.temp_min} />
          </p>
          <p className="humidity">
            Humidity <Percentage percentage={locationData.main.humidity} />
          </p>
        </GridDiv>
      </StyledCardContent>
      <CardActionArea>
        <CardActionsOnTheRight>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            component={Link}
            to={`/details/${locationData.coord.lat}/${locationData.coord.lon}`}
          >
            Get More Info
          </Button>
        </CardActionsOnTheRight>
      </CardActionArea>
    </StyledCard>
  );
}

function getLocationClass(temp: number) {
  if (temp > 80) {
    return 'hot';
  } else if (temp > 65) {
    return 'warm';
  } else if (temp > 55) {
    return 'cool';
  } else if (temp > 32) {
    return 'cold';
  } else {
    return 'freezing';
  }
}

export default Location;
