import React from 'react';
import './style.css';

export default class PointAdd extends React.Component {
  render() {
    return (
      <li className='pointAdd'>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='8' cy='8' r='8' fill='#D92128' />
        </svg>

        <h2>
          достопримечательность 1<br />
          Metro
        </h2>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.5286 5.00001L0.993071 8.53553L1.46447 9.00694L5 5.47141L8.53553 9.00694L9.00693 8.53553L5.47141 5.00001L9.00695 1.46447L8.53554 0.993062L5 4.5286L1.46446 0.99306L0.993055 1.46446L4.5286 5.00001Z'
            fill='#131D29'
          />
        </svg>
      </li>
    );
  }
}
