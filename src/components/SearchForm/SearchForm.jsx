import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ searchMovies, setSearchText }) {
  const [searchParams, setSearchParams] = useState({
    movie: "",
    isShort: false,
  });
  const [searchError, setSearchError] = useState("");
  const [text, setText] = useState('');

  const handleSearchText = (e) => {
    setText(e.target.value.trim())
  }
  const handleSearchParams = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setSearchParams({ ...searchParams, [name]: value });
    setSearchError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setSearchError("Введите ключевое слово.");
    } else {
      searchMovies(text);
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
        />
        <button
          className="button search-form__button"
          type="submit"
          aria-label="Поиск"
        >
          Поиск
        </button>
        <span className="search-form__error">{searchError}</span>
        <FilterCheckbox onChange={handleSearchParams} />
      </form>
    </section>
  );
}

export default SearchForm;
