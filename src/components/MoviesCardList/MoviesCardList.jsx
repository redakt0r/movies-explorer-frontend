import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='section movies-list' aria-label='Список фильмов'>
      <ul className='movies-list__list'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <button className='movies-list__button' type='submit' aria-label='Ещё фильмы'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
