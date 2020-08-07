import { WeatherOverview } from './WeatherOverview';
import { TemperatureDetails } from './TemperatureDetails';

export type DailyForcast = {
  dt: number;
  pop: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  temp: TemperatureDetails;
  feels_like: TemperatureDetails;
  weather: WeatherOverview[];
};
