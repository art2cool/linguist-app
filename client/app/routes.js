import React from 'react';
import { Route, IndexRoute } from 'react-router';
import signInContainer  from './containers/sign-in-container';
import studentsContainer  from './containers/students-container';
import App from './components/app';
import SingIn from './components/sign-in';
import Students from './components/students';

const routes = (
    <Route path='/' component={App}>
      <Route path='/login' component={signInContainer(SingIn)} />
      <Route path='/students' component={studentsContainer(Students)} />

    </Route>
);

export default routes;
