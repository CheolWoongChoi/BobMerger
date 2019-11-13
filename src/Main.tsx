import React from 'react';
import Home from './Home';
import Today from './Today';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/today' component={Today} />
    </Switch>
  </BrowserRouter>
);

export default Main;
