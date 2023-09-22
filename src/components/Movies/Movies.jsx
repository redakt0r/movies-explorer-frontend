import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {
  console.log(JSON.parse(localStorage.getItem("moviesList")))
  return (
    <main className='movies'>
      <SearchForm/>
      <MoviesCardList/>
    </main>
  );
}

export default Movies;
