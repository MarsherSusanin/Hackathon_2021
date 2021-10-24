import React from 'react';

import HeaderRoute from '../components/Header-Route';
import ListRoute from '../components/List-route';
import StartPoint from '../components/StartPoint';

export default class Route extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderRoute />
        <StartPoint />
        <ListRoute />
      </React.Fragment>
    );
  }
}