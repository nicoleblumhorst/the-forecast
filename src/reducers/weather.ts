import { LocationWeather } from '../models/state/LocationWeather';
import { WeatherState } from '../models/state/WeatherState';
import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_LOCATION_DATA,
  UPDATE_LOCATION_SUMMARY,
  WeatherActionTypes,
} from '../actiontypes/weather';
import { act } from 'react-dom/test-utils';

const initialState = {
  locations: [
    new LocationWeather(38.8, -90.63, 'City of Saint Peters'),
    new LocationWeather(51.51, -0.13, 'London'),
    new LocationWeather(-36.86, 174.74, 'Auckland')
  ],
};

export function WeatherReducer(
  state: WeatherState = initialState,
  action: WeatherActionTypes
) {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        locations: [
          ...state.locations,
          new LocationWeather(action.lat, action.lon, action.name),
        ],
      };

    case REMOVE_LOCATION:
      return {
        locations: [
          ...state.locations.splice(0, action.index),
          ...state.locations.slice(action.index + 1),
        ],
      };

    case UPDATE_LOCATION_SUMMARY:
      return {
        locations: state.locations.map((location, index) => {
          if (index === action.index) {
            location.summary = action.summary;
          }
          return location;
        }),
      };

    case UPDATE_LOCATION_DATA:
      return {
        locations: state.locations.map((location) => {
          if (location.id === action.id) {
            location.data = action.data;
          }
          return location;
        }),
      };

    default:
      return state;
  }
}
