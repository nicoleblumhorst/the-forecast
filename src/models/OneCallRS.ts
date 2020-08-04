import { CurrentWeather } from './CurrentWeather';
import { DailyForcast } from './DailyForcast';

export type OneCallRS = {
  lat: number;
  long: number;
  current: CurrentWeather;
  hourly: CurrentWeather[];
  daily: DailyForcast[];
};
