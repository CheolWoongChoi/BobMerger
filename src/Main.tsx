import React from 'react';
import User from './User';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/fbConfig';

firebase.initializeApp(firebaseConfig);
 
const Main = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from='/' to='/user' />
      <Route path='/user' component={User} />
    </Switch>
  </BrowserRouter>
);

export default Main;
