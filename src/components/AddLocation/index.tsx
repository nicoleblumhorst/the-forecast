import React from 'react';
import AddLocationForm from "./AddLocationForm";
import {useSelector} from "react-redux";
import {WeatherState} from "../../models/state/WeatherState";
import RemoveLocationForm from "./RemoveLocationForm";
import {LocationWeather} from "../../models/state/LocationWeather";

const AddLocation = () => {
  const MAX_LOCATIONS = 3;

  const locations = useSelector<WeatherState, LocationWeather[]>(
      (state) => state.locations
  );

  return (
      <>
        {
          (locations.length >= MAX_LOCATIONS) ? <RemoveLocationForm locations={locations}/> : <AddLocationForm/>
        }
      </>
  );
};

export default AddLocation;
