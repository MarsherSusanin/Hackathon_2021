import React from 'react';
import './style.css';

export default class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <div className='modal__wrapper'>
          <h1 className='modal__title'>Привет, квантовый путешественник!</h1>
          <p className='modal__text'>
            Скажи нам, куда ты хочешь отправиться сегодня? Выбери, интересующие
            тебя достопримечательности, а квантовая сила проложит для тебя самый
            быстрый маршрут.
          </p>

          <span className='modal__start'>С чего начать?</span>
        </div>
      </section>
    );
  }
}
