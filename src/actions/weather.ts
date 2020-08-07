import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_LOCATION_DATA,
  UPDATE_LOCATION_SUMMARY,
  WeatherActionTypes,
} from '../actiontypes/weather';
import { CurrentWeatherRS } from '../models/rest/weather/CurrentWeatherRS';
import { OneCallRS } from '../models/rest/weather/OneCallRS';

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

export function removeLocation(index: number): WeatherActionTypes {
  return {
    type: REMOVE_LOCATION,
    index,
  };
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

export function updateLocationData(
  id: number,
  data: OneCallRS
): WeatherActionTypes {
  return {
    type: UPDATE_LOCATION_DATA,
    id,
    data,
  };
}
