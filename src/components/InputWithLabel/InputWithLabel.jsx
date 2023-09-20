import "./InputWithLabel.css";

function InputWithLabel({label, type, minLength, maxLength, handleChange, inputName}) {
  return (
    <label className="greeting-form__label">
      {label}
      <input className="greeting-form__input" name={inputName} onChange={handleChange} type={type} placeholder={label} required minLength={minLength} maxLength={maxLength}/>
    </label>
  );
}

export default InputWithLabel;
