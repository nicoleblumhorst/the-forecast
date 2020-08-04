import axios from 'axios';
import { CurrentWeatherRS } from '../models/CurrentWeatherRS';
import { OneCallRS } from '../models/OneCallRS';

import fakeData from '../data/onecall.json';
import christchurchFakeData from '../data/weather/2193732.json';
import londonFakeData from '../data/weather/2643743.json';
import stPetersFakeData from '../data/weather/4407237.json';

export class WeatherService {
  private BASE_URL = 'http://api.openweathermap.org/data/2.5';
  private API_KEY = 'a0ae98e5d2f38ac65a1d29b6a24706cf';
  private useService = false;

  public getOneCall(lat: string, lon: string): Promise<OneCallRS> {
    if (!this.useService) {
      return new Promise<OneCallRS>((resolve) =>
        resolve((fakeData as any) as OneCallRS)
      );
    } else {
      return axios(
        `${this.BASE_URL}/onecall` +
          `?lat=${lat}&lon=${lon}&APPID=${this.API_KEY}&units=imperial`
      ).then((response) => response.data as OneCallRS);
    }
  }

  public getWeather(locationId: string): Promise<CurrentWeatherRS> {
    if (!this.useService) {
      let fakeData = {};
      switch (locationId) {
        case '2193732':
          fakeData = christchurchFakeData;
          break;
        case '2643743':
          fakeData = londonFakeData;
          break;
        case '4407237':
          fakeData = stPetersFakeData;
          break;
        default:
          fakeData = stPetersFakeData;
      }
      return new Promise<CurrentWeatherRS>((resolve) =>
        resolve((fakeData as any) as CurrentWeatherRS)
      );
    } else {
      return axios(
        `${this.BASE_URL}/weather` +
          `?id=${locationId}&APPID=${this.API_KEY}&units=imperial`
      ).then((response) => response.data as CurrentWeatherRS);
    }
  }
}
