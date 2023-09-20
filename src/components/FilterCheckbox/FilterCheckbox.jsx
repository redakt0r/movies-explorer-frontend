import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" type="checkbox" id="switch"/>
      <label className="filter-checkbox__switch" htmlFor="switch"></label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
