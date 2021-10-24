import React from 'react';
import './style.css';

export default class StartPoint extends React.Component {
  render() {
    return (
      <section className='startPoint'>
        <div className='startPoint__wrapper'>
          <span className='startPoint__text'>Точка старта</span>
          <form
            className='search-form'
            action='https://echo.htmlacademy.ru'
            method='post'
          >
            <input
              type='search'
              name='search'
              id='search'
              placeholder='Первая точка'
            />
            <label htmlFor='search'></label>
          </form>
          <div className='startPoint__check'>
            <input type='checkbox' id='scales' name='scales' />
            <label for='scales'>Вернуться в точку старта</label>
          </div>
        </div>
      </section>
    );
  }
}
