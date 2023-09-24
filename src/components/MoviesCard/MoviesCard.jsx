import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const saveMovie = () => {
    setIsSaved(true);
  };

  const routeWithSavedList = location.pathname === "/saved-movies";

  const movieDuration = (duration) => {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  };

  const fullCoverUrl = (url) => {
    return "https://api.nomoreparties.co/." + url;
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
            src={fullCoverUrl(movie.image.url)}
            alt={`Обложка фильма '${movie.nameRU}'`}
          />
        </a>
        {routeWithSavedList ? (
          <button
            className="button movies-card__button movies-card__button_in-list"
            type="button"
            aria-label="Удалить"
          ></button>
        ) : (
          <button
            className={`button movies-card__button ${
              isSaved ? "movies-card__button_saved" : ""
            }`}
            type="button"
            aria-label={isSaved ? "Фильм сохранен" : "Сохранить"}
            onClick={saveMovie}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        )}
      </article>
    </li>
  );
}

export default MoviesCard;
