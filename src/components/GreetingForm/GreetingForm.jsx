import { Link } from 'react-router-dom';
import "./GreetingForm.css";

function GreetingForm({greeting, question, button, link, children}) {
  return (
    <>
      <form className="greeting-form__form">
        <h1 className="greeting-form__greeting">{greeting}</h1>
        <div className='greeting-form__inputs'>
          {children}
        </div>
        <button className="button greeting-form__button" type="submit" aria-label={button}>{button}</button>
      </form>
      <p className="greeting-form__question">{question} <Link className='link greeting-form__link' to={link.route}>{link.text}</Link></p>
    </>
  );
}

export default GreetingForm;
