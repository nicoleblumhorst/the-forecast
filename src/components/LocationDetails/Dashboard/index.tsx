import React from 'react';
import HourlySummaryCard from './HourlySummaryCard';
import WeeklySummaryCard from './WeeklySummaryCard';

import { OneCallRS } from '../../../models/rest/weather/OneCallRS';
import CurrentWeatherCard from './CurrentWeatherCard';

interface Props {
  data: OneCallRS | undefined;
}

const Dashboard = ({ data }: Props) => {
  return (
    <div className="details-container">
      <CurrentWeatherCard data={data?.current} />
      <HourlySummaryCard data={data?.hourly} />
      <WeeklySummaryCard data={data?.daily} />
    </div>
  );
};

export default Dashboard;
