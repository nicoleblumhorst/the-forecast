import React, { useEffect } from 'react';
import Location from './Location';
import { CurrentWeatherRS } from '../../models/rest/weather/CurrentWeatherRS';
import { FlexDiv } from './styles';
import { WeatherService } from '../../ultilities/WeatherService';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { updateLocationSummary } from '../../actions/weather';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherState } from '../../models/state/WeatherState';

function Landing() {
  const weatherService = new WeatherService();
  const locations = useSelector<WeatherState, WeatherState['locations']>(
    (state) => state.locations
  );
  const dispatch = useDispatch();

  const updateSummary = (id: number, summary: CurrentWeatherRS) => {
    dispatch(updateLocationSummary(id, summary));
  };

  useEffect(() => {
    locations.forEach((location, index) => {
      weatherService
        .getWeather(location.latitude, location.longitude)
        .then((response) => {
          updateSummary(index, response);
        })
        .catch((error) =>
          console.log('Error fetching and parsing data', error)
        );
    });
  }, []);

  return (
    <>
      <FlexDiv>
        {locations.map((location) => (
          <Location
            id={location.id}
            locationData={location.summary}
            key={location.id}
          />
        ))}
      </FlexDiv>
      <Fab
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        color="secondary"
        component={Link}
        to={`/add`}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default Landing;
