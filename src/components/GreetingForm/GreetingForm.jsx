import { Link } from 'react-router-dom';
import "./GreetingForm.css";

function GreetingForm({greeting, question, button, link, children, onSubmit, isValid}) {

  return (
    <>
      <form className="greeting-form__form" onSubmit={onSubmit}>
        <h1 className="greeting-form__greeting">{greeting}</h1>
        <div className='greeting-form__inputs'>
          {children}
        </div>
        <button disabled={!isValid} className={`button greeting-form__button ${isValid ? 'greeting-form__button_active' : ''}`} type="submit" aria-label={button}>{button}</button>
      </form>
      <p className="greeting-form__question">{question} <Link className='link greeting-form__link' to={link.route}>{link.text}</Link></p>
    </>
  );
}

export default GreetingForm;
