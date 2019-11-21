import React from 'react';
import User from './User';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from='/' to='/user' />
      <Route path='/user' component={User} />
    </Switch>
  </BrowserRouter>
);

export default Main;
