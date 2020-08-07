import axios from 'axios';
import {CurrentWeatherRS} from '../models/rest/weather/CurrentWeatherRS';
import {OneCallRS} from '../models/rest/weather/OneCallRS';

import fakeData from '../data/onecall.json';
import christchurchFakeData from '../data/weather/2193732.json';
import londonFakeData from '../data/weather/2643743.json';
import stPetersFakeData from '../data/weather/4407237.json';

export class WeatherService {
  private BASE_URL = 'http://api.openweathermap.org/data/2.5';
  private API_KEY = 'a0ae98e5d2f38ac65a1d29b6a24706cf';
  private useService = false;

  public getOneCall(lat: string, lon: string): Promise<OneCallRS> {
    console.log('getting data for lat/long ' + lat + '/' + lon);
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

  public getWeather(lat: number, lon: number): Promise<CurrentWeatherRS> {
    console.log('getting summary for lat/long ' + lat + '/' + lon);
    if (!this.useService) {
      let fakeData = {};
      if (lat < 0) {
        fakeData = christchurchFakeData;
      } else if (lat >= 0 && lat < 40) {
        fakeData = stPetersFakeData;
      } else {
        fakeData = londonFakeData;
      }
      return new Promise<CurrentWeatherRS>((resolve) =>
          resolve((fakeData as any) as CurrentWeatherRS)
      );
    } else {
      return axios(
          `${this.BASE_URL}/weather` +
          `?lat=${lat}&lon=${lon}&APPID=${this.API_KEY}&units=imperial`
      ).then((response) => response.data as CurrentWeatherRS);
    }
  }
}
