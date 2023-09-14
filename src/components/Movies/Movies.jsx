import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header/>
      <main className='movies'>
        <SearchForm/>
        <MoviesCardList/>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
