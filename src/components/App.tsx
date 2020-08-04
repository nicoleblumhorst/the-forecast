import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../css/weather-icons.css';
import Header from './Header';
import Landing from './Landing';
import LocationDetails from './LocationDetails';
import NotFound from './NotFound';
import AddLocation from './AddLocation';

function App() {
  return (
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
  );
}

export default App;
