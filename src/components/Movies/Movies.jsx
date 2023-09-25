import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { useState } from 'react';

function Movies() {
  const [movieslist, setMoviesList] = useState(JSON.parse(localStorage.getItem('moviesList')));
  const [searchedMovies, setSearchedMovies] = useState([])

  const searchMovies = (parapms) => {
    let sortedMovies = [];
    localStorage.setItem('moviesSearchParams', JSON.stringify(parapms));
    sortedMovies = movieslist.filter((movie) => {
      return movie.nameRU.toLowerCase().trim().includes(parapms.movie.toLowerCase())
    })
    localStorage.setItem('searchedMovies', JSON.stringify(sortedMovies));
    setSearchedMovies(sortedMovies)
    console.log(sortedMovies)
  }


  console.log(JSON.parse(localStorage.getItem("moviesList")))
  return (
    <main className='movies'>
      <SearchForm searchMovies={searchMovies}/>
      <MoviesCardList searchedMovies={searchedMovies}/>
    </main>
  );
}

export default Movies;
