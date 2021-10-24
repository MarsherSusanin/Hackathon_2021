import React from 'react';
import './style.css';

export default class PointRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openCard: false };
  }

  handlerClick = (prevState) => {
    prevState = this.state.openCard;
    this.setState({ openCard: !prevState });
  };

  render() {
    return (
      <li className='pointRoute'>
        <div className='pointRoute__header'>
          <span className='pointRoute__number'>1</span>
          <h2>
            Достопримечательность 1<br />
            <span className='pointRoute__info'>22 мин.</span>{' '}
            <span className='pointRoute__info'>без пересадок</span>
          </h2>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
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
        </div>

        {!this.state.openCard ? (
          <button onClick={this.handlerClick} className='pointRoute__button'>
            Подробнее
          </button>
        ) : (
          <div className='pointRoute__wrapper'>
            <span className='pointRoute__info'>начало пути</span>
            <div className='pointRoute__station'>
              <span className='pointRoute__number--station'>5</span>Стартовая
              станция
            </div>
            <span className='pointRoute__info'>пересадка</span>
            <div className='pointRoute__station'>
              <span className='pointRoute__number--station'>5</span>станция
              пересадки 1
            </div>
            <div className='pointRoute__station'>
              <span className='pointRoute__number--station'>5</span>станция
              пересадки 1
            </div>
            <span className='pointRoute__info'>выйти на станции</span>
            <div className='pointRoute__station'>
              <span className='pointRoute__number--station'>5</span>станция
              выхода
            </div>
            <button onClick={this.handlerClick} className='pointRoute__button'>
              Скрыть
            </button>
          </div>
        )}
      </li>
    );
  }
}
