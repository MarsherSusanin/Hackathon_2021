import React from 'react';

import HeaderRoute from '../components/Header-Route';

import Point from '../components/Point';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderRoute />

        <Point />
      </React.Fragment>
    );
  }
}


