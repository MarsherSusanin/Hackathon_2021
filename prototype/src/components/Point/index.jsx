import React from 'react';
import './style.css';

export default class Point extends React.Component {

  render() {
    return (
      <li className='point'>
        <div className='pointRoute__header'>
          <h2>
            {this.props.point.name}
          </h2>
          +
        </div>

      </li>
    );
  }
}
