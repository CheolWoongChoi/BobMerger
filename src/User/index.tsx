import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import Today from './Today';
import LastWeek from './LastWeek';
import Month from './Month';
import Error404 from './Error404';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

const User = ({ match }: RouteComponentProps) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={match.url} component={Home} />
        <Route path={`${match.url}/today`} component={Today} />
        <Route path={`${match.url}/lastWeek`} component={LastWeek} />
        <Route path={`${match.url}/month`} component={Month} />
        <Route component={Error404} />
      </Switch>
    </>
  )
};

export default User;