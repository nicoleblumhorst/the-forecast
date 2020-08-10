import React from 'react';
import Temperature from '../shared/Temperature';
import { Link } from 'react-router-dom';
import { CurrentWeatherRS } from '../../models/rest/weather/CurrentWeatherRS';
import { Button, CardActionArea } from '@material-ui/core';
import { Divider, GridDiv, StyledCard, StyledCardContent } from './styles';
import {CardActionsOnTheRight, LargeWeatherIcon, WeatherIcon} from '../shared/styles';
import Percentage from '../shared/Percentage';
import {useTranslation} from "react-i18next";

type Props = {
  locationData: CurrentWeatherRS | undefined;
};

function Location({ locationData }: Props) {
  const { t } = useTranslation();

  if (!locationData) {
    return <StyledCard variant="outlined">Loading...</StyledCard>;
  }

  return (
    <StyledCard variant="outlined">
      <StyledCardContent>
        <h3>{locationData.name}</h3>
        <h4>{locationData.sys.country}</h4>
        <LargeWeatherIcon
          className={`wi wi-owm-${locationData.weather[0]?.id} ${locationData.weather[0]?.main.toLowerCase()}`}
        ></LargeWeatherIcon>
        <Divider />
        <GridDiv>
          <span className="temp">
            <Temperature temp={locationData.main.temp} />
          </span>
          <p className="feels-like">
            {t('common.feels-like')}<Temperature temp={locationData.main.feels_like} />
          </p>
          <p className="high">
            {t('landing.high')}<Temperature temp={locationData.main.temp_max} />
          </p>
          <p className="low">
            {t('landing.low')}<Temperature temp={locationData.main.temp_min} />
          </p>
          <p className="humidity">
            {t('common.humidity')} <Percentage percentage={locationData.main.humidity} />
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
          >{t('more-info')}</Button>
        </CardActionsOnTheRight>
      </CardActionArea>
    </StyledCard>
  );
}

export default Location;
