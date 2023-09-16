import "./InputWithLabel.css";

function InputWithLabel({label, type}) {
  return (
    <label className="greeting-form__label">
      {label}
      <input className="greeting-form__input" type={type} required/>
    </label>
  );
}

export default InputWithLabel;
