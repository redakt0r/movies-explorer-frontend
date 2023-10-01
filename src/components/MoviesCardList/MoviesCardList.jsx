import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  movies,
  onSaveMovie,
  onDeleteMovie,
  isLoading,
  notFoundError,
}) {
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="section movies-list" aria-label="Список фильмов">
          {!notFoundError ? (
            <ul className="movies-list__list">
              {movies.map((movie) => {
                return (
                  <MoviesCard
                    key={movie.id || movie._id}
                    movie={movie}
                    onSaveMovie={onSaveMovie}
                    onDeleteMovie={onDeleteMovie}
                  />
                );
              })}
            </ul>
          ) : (
            <p className="movies-list__error">{notFoundError}</p>
          )}
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
