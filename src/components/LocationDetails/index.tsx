import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';

import { OneCallRS } from '../../models/rest/weather/OneCallRS';
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
  const [location, setLocation] = useState<OneCallRS>();

  useEffect(() => {
    weatherService
      .getOneCall(match.params.lat, match.params.lon)
      .then((response: OneCallRS) => {
        setLocation(response);
      })
      .catch((error) =>
        console.error('Error fetching and parsing data', error)
      );
  }, []);

  return (
    <div className="details-container">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <Dashboard data={location} />}
          />
          <Route
            path={`${match.path}/by/hour`}
            render={() => <Hourly data={location?.hourly} />}
          />
          <Route
            path={`${match.path}/by/day`}
            render={() => <Daily data={location?.daily} />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default LocationDetails;
