import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import PointRoute from '../PointRoute';

export default class ListRoute extends React.Component {
  render() {
    return (
      <section className='listRoute'>
        <div className='listRoute__wrapper'>
          <ul className='listRoute__elements'>
            <PointRoute />
            <PointRoute />
          </ul>

          <Link to='/finish' className='listRoute__button'>
            Стартуем
          </Link>
        </div>
      </section>
    );
  }
}
