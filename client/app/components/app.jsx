import React from 'react';
import {Link} from 'react-router';
import Header from './header';

export default class App extends React.Component {

  render() {
      return (
          <div>
              <Header>header</Header>

              {this.props.children}
          </div>
      );
  }
};
