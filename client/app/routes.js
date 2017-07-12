import React from 'react';
import { Route, IndexRoute } from 'react-router';
import signInContainer  from './containers/sign-in-container';
import App from './components/app';
import SingIn from './components/sign-in';

const routes = (
    <Route path='/' component={App}>
      <Route path='/login' component={signInContainer(SingIn)} />

    </Route>
);

export default routes;
