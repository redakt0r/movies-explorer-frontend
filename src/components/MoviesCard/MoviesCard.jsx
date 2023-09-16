import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './MoviesCard.css';
import cardImage from '../../images/card_image_sample1.jpg'

function MoviesCard() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const saveMovie = () => {
    setIsSaved(true);
  }

  const routeWithSavedList = location.pathname === '/saved-movies'

  return (
    <li className='movies-card'>
      <article className='movies-card__item'>
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>В погоне за Бенкси</h2>
          <p className='movies-card__duration'>0ч 42м</p>
        </div>
        <img className='movies-card__cover' src={cardImage} alt="Обложка фильма" />
        {routeWithSavedList ?
        <button className='button movies-card__button movies-card__button_in-list' type='button' aria-label='Удалить' ></button> :
        <button className={`button movies-card__button ${isSaved ? 'movies-card__button_saved' : ''}`} type='button' aria-label={isSaved ? 'Фильм сохранен' : 'Сохранить'} onClick={saveMovie}>{isSaved ? '' : 'Сохранить'}</button>}
      </article>
    </li>
  );
}

export default MoviesCard;
