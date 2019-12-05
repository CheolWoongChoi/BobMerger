import React from 'react';
import Home from './Home';
import LastWeek from './LastWeek';
import Today from './Today';
import Error404 from './Error404';
import Header from '../components/Header';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

const User = ({ match }: RouteComponentProps) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={match.url} component={Home} />
        <Route path={`${match.url}/today`} component={Today} />
        <Route path={`${match.url}/lastWeek`} component={LastWeek} />
        <Route component={Error404} />
      </Switch>
    </>
  )
};

export default User;