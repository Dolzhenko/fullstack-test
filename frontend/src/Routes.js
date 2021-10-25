import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import UserDetail from './views/UserDetail';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/details" component={UserDetail} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;
