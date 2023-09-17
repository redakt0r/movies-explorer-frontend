import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const location = useLocation();
  const routeWithMoreButton = location.pathname === '/movies'
  const moviesSample = [
    {nameRU: 'Хороший фильм'},
    {nameRU: 'Средний фильм'},
    {nameRU: 'Плохой фильм'},
    {nameRU: 'Ёлки 5'}
  ]
  console.log(moviesSample[0])
  return (
    <section className='section movies-list' aria-label='Список фильмов'>
      <ul className='movies-list__list'>
        <MoviesCard movie={moviesSample[0]}/>
        <MoviesCard movie={moviesSample[1]}/>
        <MoviesCard movie={moviesSample[2]}/>
        <MoviesCard movie={moviesSample[3]}/>
      </ul>
      {routeWithMoreButton && <button className='button movies-list__button' type='button' aria-label='Ещё фильмы'>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
