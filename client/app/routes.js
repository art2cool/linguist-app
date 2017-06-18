import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import AppContainer from './containers/app-container';
import App from './components/app';
import SingIn from './components/sign-in';

const routes = (
    <Route path='/' component={App}>
      <Route path='/login' component={SingIn} />

    </Route>
);

export default routes;
