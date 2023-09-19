import "./InputWithLabel.css";

function InputWithLabel({label, type, minLength, maxLength}) {
  return (
    <label className="greeting-form__label">
      {label}
      <input className="greeting-form__input" type={type} placeholder={label} required minLength={minLength} maxLength={maxLength}/>
    </label>
  );
}

export default InputWithLabel;
