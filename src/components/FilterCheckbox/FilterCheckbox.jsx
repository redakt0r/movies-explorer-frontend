import "./FilterCheckbox.css";

function FilterCheckbox({onChange, isShort}) {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" type="checkbox" id="switch" onChange={onChange} checked={isShort} name="isShort"/>
      <label className="filter-checkbox__switch" htmlFor="switch"></label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
