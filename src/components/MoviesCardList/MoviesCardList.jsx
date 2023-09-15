import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  const location = useLocation();
  const routeWithMoreButton = location.pathname === '/movies'
  return (
    <section className='section movies-list' aria-label='Список фильмов'>
      <ul className='movies-list__list'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      {routeWithMoreButton && <button className='button movies-list__button' type='button' aria-label='Ещё фильмы'>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
