import { CurrentWeatherRS } from '../models/rest/weather/CurrentWeatherRS';
import { OneCallRS } from '../models/rest/weather/OneCallRS';

export const ADD_LOCATION = 'weather/ADD_LOCATION';
export const REMOVE_LOCATION = 'weather/REMOVE_LOCATION';
export const UPDATE_LOCATION_SUMMARY = 'weather/UPDATE_LOCATION_SUMMARY';
export const UPDATE_LOCATION_DATA = 'weather/UPDATE_LOCATION_DATA';

interface AddLocationAction {
  type: typeof ADD_LOCATION;
  lat: number;
  lon: number;
  name: string;
}

interface RemoveLocationAction {
  type: typeof REMOVE_LOCATION;
  index: number;
}

interface UpdateLocationSummaryAction {
  type: typeof UPDATE_LOCATION_SUMMARY;
  index: number;
  summary: CurrentWeatherRS;
}

interface UpdateLocationDataAction {
  type: typeof UPDATE_LOCATION_DATA;
  id: number;
  data: OneCallRS;
}

export type WeatherActionTypes =
  | AddLocationAction
  | RemoveLocationAction
  | UpdateLocationSummaryAction
  | UpdateLocationDataAction;
