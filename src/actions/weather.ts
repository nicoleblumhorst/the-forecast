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

export function addLocation(
  lat: number,
  lon: number,
  name: string
): WeatherActionTypes {
  return {
    type: ADD_LOCATION,
    lat,
    lon,
    name,
  };
}

interface RemoveLocationAction {
  type: typeof REMOVE_LOCATION;
  id: string;
}

export function removeLocation(id: string): WeatherActionTypes {
  return {
    type: REMOVE_LOCATION,
    id,
  };
}

interface UpdateLocationSummaryAction {
  type: typeof UPDATE_LOCATION_SUMMARY;
  index: number;
  summary: CurrentWeatherRS;
}

export function updateLocationSummary(
  index: number,
  summary: CurrentWeatherRS
): WeatherActionTypes {
  return {
    type: UPDATE_LOCATION_SUMMARY,
    index,
    summary,
  };
}

interface UpdateLocationDataAction {
  type: typeof UPDATE_LOCATION_DATA;
  id: string;
  data: OneCallRS;
}

export function updateLocationData(
  id: string,
  data: OneCallRS
): WeatherActionTypes {
  return {
    type: UPDATE_LOCATION_DATA,
    id,
    data,
  };
}

export type WeatherActionTypes =
    | AddLocationAction
    | RemoveLocationAction
    | UpdateLocationSummaryAction
    | UpdateLocationDataAction;
