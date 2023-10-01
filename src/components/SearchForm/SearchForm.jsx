import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ searchMovies, handleCheckbox, namesFilteredMovies, searchText, setSearchText, isShort, setIsShort }) {
  const [searchError, setSearchError] = useState("");

  const handleSearchText = (e) => {
    setSearchText(e.target.value.trim());
    setSearchError("");
  }
  const handleIsShort = (e) => {
    setIsShort(e.target.checked);
    handleCheckbox(namesFilteredMovies, e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setSearchError("Введите ключевое слово.");
    } else {
      searchMovies(searchText, isShort);
      setSearchError("");
    }
  };

  return (
    <section className="section search-form" aria-label="Поиск фильмов">
      <form className="search-form__form" name="search" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          name="movie"
          placeholder="Фильм"
          onChange={handleSearchText}
          value={searchText}
        />
        <button
          className="button search-form__button"
          type="submit"
          aria-label="Поиск"
        >
          Поиск
        </button>
        <span className="search-form__error">{searchError}</span>
        <FilterCheckbox onChange={handleIsShort} isShort={isShort}/>
      </form>
    </section>
  );
}

export default SearchForm;
