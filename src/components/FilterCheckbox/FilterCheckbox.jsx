import "./FilterCheckbox.css";

function FilterCheckbox({onChange}) {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__checkbox" type="checkbox" id="switch" onChange={onChange} name="isShort"/>
      <label className="filter-checkbox__switch" htmlFor="switch"></label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
