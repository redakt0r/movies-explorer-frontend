import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard({ movie, onDeleteMovie, onSaveMovie }) {
  const [isSaved, setIsSaved] = useState(movie.saved)
  const location = useLocation();

  async function handleClick() {
    if (isSaved) {
      await onDeleteMovie(movie);
      setIsSaved(!isSaved)
    } else {
      await onSaveMovie(movie);
      setIsSaved(!isSaved)
    }
  }

  const routeWithSavedList = location.pathname === "/saved-movies";

  const movieDuration = (duration) => {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  };

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">
            {movieDuration(movie.duration)}
          </p>
        </div>
        <a href={movie.trailerLink} target="blank">
          <img
            className="movies-card__cover"
            src={movie.image}
            alt={`Обложка фильма '${movie.nameRU}'`}
          />
        </a>
        {routeWithSavedList ? (
          <button
            className="button movies-card__button movies-card__button_in-list"
            type="button"
            aria-label="Удалить"
            onClick={onDeleteMovie}
          ></button>
        ) : (
          <button
            className={`button movies-card__button ${
              isSaved ? "movies-card__button_saved" : ""
            }`}
            type="button"
            aria-label={isSaved ? "Фильм сохранен" : "Сохранить"}
            onClick={handleClick}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        )}
      </article>
    </li>
  );
}

export default MoviesCard;
