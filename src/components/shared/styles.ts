import styled from 'styled-components';
import { CardActions } from '@material-ui/core';

export const WeatherIcon = styled.i`
  &.thunderstorm {
    color: #498292;
  }
  &.drizzle {
    color: #498292;
  }
  &.rain {
    color: #498292;
  }
  &.snow {
    color: #6d6587;
  }
  &.clear {
    color: #ffb30e;
  }
  &.clouds {
    color: gray;
  }
`;

export const LargeWeatherIcon = styled(WeatherIcon)`
  font-size: 100px;
  padding: 10px;
`;

export const MediumWeatherIcon = styled(WeatherIcon)`
  font-size: 40px;
`;

export const SmallWeatherIcon = styled(WeatherIcon)`
  font-size: 30px;
`;

export const CardActionsOnTheRight = styled(CardActions)`
  justify-content: flex-end;
`;
