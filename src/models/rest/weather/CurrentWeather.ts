import { WeatherOverview } from './WeatherOverview';

export type CurrentWeather = {
  dt: number;
  temp: number;
  feels_like: number;
  pop: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherOverview[];
};
