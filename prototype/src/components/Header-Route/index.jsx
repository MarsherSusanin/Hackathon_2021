import React from 'react';
import './style.css';

export default class HeaderRoute extends React.Component {
  render() {
    return (
      <section className='headerRoute'>
        <div className='headerRoute__wrapper'>
          <svg
            width='23'
            height='16'
            viewBox='0 0 23 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 7.99992L7.66667 1.33325M1 7.99992L7.66667 14.6666M1 7.99992H21.8333'
              stroke='#131D29'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>

          <h1 className='headerRoute__title'>Маршрут</h1>

          <svg
            width='18'
            height='13'
            viewBox='0 0 18 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.125 8.59351V10.4685H0.25V5.09352H4.25V2.21854H0.25V0.468506H12.75L16.125 8.59351ZM0.25 11.5935H17.25V12.4686H0.25V11.5935ZM5.125 5.09352H9.625V2.21854H5.125V5.09352ZM12.375 2.21854H10.625V6.71851H14.25L12.375 2.21854Z'
              fill='#9B9B9B'
            />
          </svg>

          <span className='headerRoute__time'>1ч. 52 мин. </span>
        </div>
      </section>
    );
  }
}
