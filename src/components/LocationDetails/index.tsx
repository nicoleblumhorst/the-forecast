import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

import { OneCallRS } from '../../models/OneCallRS';
import Hourly from './Hourly';
import Dashboard from './Dashboard';
import Daily from './Daily';
import { WeatherService } from '../../ultilities/WeatherService';
import NotFound from '../NotFound';

interface MatchProps {
  lat: string;
  lon: string;
}

const LocationDetails = ({ match }: RouteComponentProps<MatchProps>) => {
  const weatherService = new WeatherService();
  const [locationData, setLocationData] = useState<OneCallRS | undefined>(
    undefined
  );

  useEffect(() => {
    weatherService
      .getOneCall(match.params.lat, match.params.lon)
      .then((response: OneCallRS) => {
        setLocationData(response);
      })
      .catch((error) => console.log('Error fetching and parsing data', error));
  }, [match]);

  return (
    <div className="details-container">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Dashboard data={locationData} />}
          />
          <Route
            path={`${match.path}/by/hour`}
            render={() => <Hourly data={locationData?.hourly} />}
          />
          <Route
            path={`${match.path}/by/day`}
            render={() => <Daily data={locationData?.daily} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default LocationDetails;
