import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonsPage from './pages/persons/PersonsPage';
import PersonPage from './pages/persons/PersonPage';
import PersonAddPage from './pages/persons/PersonAddPage';
import PersonEditPage from './pages/persons/PersonEditPage';
import NotFound from './pages/NotFound';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/persons/add" component={PersonAddPage} />
      <Route path="/persons/edit/:id" component={PersonEditPage} />
      <Route path="/persons/:id" component={PersonPage} />
      <Route path="/persons" component={PersonsPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
)