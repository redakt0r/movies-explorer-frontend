import './MoviesCard.css';
import cardImage from '../../images/card_image_sample1.jpg'

function MoviesCard() {
  return (
    <li className='movies-card'>
      <article className='movies-card__item'>
        <div className='movies-card__info'>
          <h2 className='movies-card__title'>В погоне за Бенкси</h2>
          <p className='movies-card__duration'>0ч 42м</p>
        </div>
        <img className='movies-card__cover' src={cardImage} alt="Обложка" />
        <button className='movies-card__button movies-card__button_active' type='submit' aria-label='Сохранить'>{/* Сохранить */}</button>
      </article>
    </li>

  );
}

export default MoviesCard;
