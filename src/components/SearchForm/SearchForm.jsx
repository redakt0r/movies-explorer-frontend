import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="section search-form" aria-label="Поиск фильмов">
      <form className="search-form__form" name="search">
        <input
          className="search-form__input"
          type="text"
          name="movie"
          placeholder="Фильм"
          required
        />
        <button className="button search-form__button" type="submit" aria-label="Поиск">Поиск</button>
        <FilterCheckbox/>
      </form>
    </section>
  );
}

export default SearchForm;
