import { Coordinates } from './Coordinates';
import { WeatherOverview } from './WeatherOverview';
import { CurrentWeatherOverview } from './CurrentWeatherOverview';
import { SystemInfo } from './SystemInfo';

export class CurrentWeatherRS {
  name: string;
  id: number;
  coord: Coordinates;
  weather: WeatherOverview[];
  main: CurrentWeatherOverview;
  sys: SystemInfo;

  constructor(
    name: string,
    id: number,
    coord: Coordinates,
    weather: WeatherOverview[],
    main: CurrentWeatherOverview,
    sys: SystemInfo
  ) {
    this.name = name;
    this.id = id;
    this.coord = coord;
    this.weather = weather;
    this.main = main;
    this.sys = sys;
  }
}
