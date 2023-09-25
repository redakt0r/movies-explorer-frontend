import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

function MoviesCardList({}) {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const routeWithMoreButton = location.pathname === "/movies";
  const allMovies = JSON.parse(localStorage.getItem("moviesList"));
  const moviesSample = [
    allMovies[0],
    allMovies[1],
    allMovies[2],
    allMovies[3],
    allMovies[4],
    allMovies[5],
    allMovies[5],
  ];
  console.log(typeof allMovies);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className="section movies-list" aria-label="Список фильмов">
          <ul className="movies-list__list">
            {moviesSample.map((movie) => {
              return <MoviesCard movie={movie} />
            })}
          </ul>
          {routeWithMoreButton && (
            <button
              className="button movies-list__button"
              type="button"
              aria-label="Ещё фильмы"
            >
              Ещё
            </button>
          )}
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
