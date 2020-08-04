import React, { useEffect, useState } from 'react';
import Location from './Location';
import { CurrentWeatherRS } from '../../models/CurrentWeatherRS';
import { FlexDiv } from './styles';
import { WeatherService } from '../../ultilities/WeatherService';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const LOCATION_IDS = [
  '4407237', // Saint Peters, MO
  '2643743', // London, UK
  '2193732', // Christchurch, NZ
];

function Landing() {
  const weatherService = new WeatherService();
  const [locationData, setLocationData] = useState<CurrentWeatherRS[]>([]);

  useEffect(() => {
    LOCATION_IDS.forEach((id, index) => {
      weatherService
        .getWeather(id)
        .then((response) => {
          setLocationData((prevLocationData) => [
            ...prevLocationData,
            response,
          ]);
        })
        .catch((error) =>
          console.log('Error fetching and parsing data', error)
        );
    });
  }, []);

  return (
    <>
      <FlexDiv>
        {locationData.map((location) => (
          <Location locationData={location} key={location.id} />
        ))}
      </FlexDiv>
      <Fab
        style={{ position: 'absolute', bottom: '20px', right: '20px' }}
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
