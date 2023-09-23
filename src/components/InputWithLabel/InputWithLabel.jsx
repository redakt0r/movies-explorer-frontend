import "./InputWithLabel.css";

function InputWithLabel({label, type, minLength, maxLength, handleChange, inputName, errorMessage}) {
  return (
    <label className="greeting-form__label">
      {label}
      <input className="greeting-form__input" name={inputName} onChange={handleChange} type={type} placeholder={label} required minLength={minLength} maxLength={maxLength}/>
      <span className={`greeting-form__input-error ${errorMessage ? 'greeting-form__input-error_active' : ''}`}>{errorMessage}</span>
    </label>
  );
}

export default InputWithLabel;
