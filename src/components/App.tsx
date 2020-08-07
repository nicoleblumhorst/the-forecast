import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../css/weather-icons.css';
import Header from './Header';
import Landing from './Landing';
import LocationDetails from './LocationDetails';
import NotFound from './NotFound';
import AddLocation from './AddLocation';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/details/:lat/:lon" component={LocationDetails} />
            <Route path="/add" component={AddLocation} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
