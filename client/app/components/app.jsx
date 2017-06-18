import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {

  render() {
      return (
          <div>
              <Link to="/login">Oh, N-na</Link>
              {this.props.children}
          </div>
      );
  }
};
