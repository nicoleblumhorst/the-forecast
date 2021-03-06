import { CurrentWeatherRS } from '../rest/weather/CurrentWeatherRS';
import { OneCallRS } from '../rest/weather/OneCallRS';
import {v4} from 'uuid';

export class LocationWeather {
  private readonly _id: string;
  private readonly _latitude: number;
  private readonly _longitude: number;
  private readonly _displayName: string;
  private _summary: CurrentWeatherRS;
  private _data: OneCallRS;

  constructor(latitude: number, longitude: number, displayName: string) {
    this._id = v4();
    this._latitude = latitude;
    this._longitude = longitude;
    this._displayName = displayName;
  }

  get id(): string {
    return this._id;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }

  get displayName(): string {
    return this._displayName;
  }

  get summary(): CurrentWeatherRS {
    return this._summary;
  }

  set summary(value: CurrentWeatherRS) {
    this._summary = value;
  }

  get data(): OneCallRS {
    return this._data;
  }

  set data(value: OneCallRS) {
    this._data = value;
  }
}
