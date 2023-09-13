import { Link } from 'react-router-dom';
import "./Register.css";

function Register() {
  return (
    <section className="section register">
      <Link className='link register__home-link' to='/'/>
      <p className="register__greeting">Добро пожаловать!</p>
      <form className="register__form">
        <label className="register__label">
          Имя
          <input className="register__input" type="text" required placeholder="Имя"/>
        </label>
        <label className="register__label">
          E-&nbsp;mail
          <input className="register__input" type="text" required placeholder="E-mail"/>
        </label>
        <label className="register__label">
          Пароль
          <input className="register__input" type="password" required placeholder="Пароль"/>
        </label>
        <button className="register__button" type="submit" aria-label="Зарегистрироваться">Зарегистрироваться</button>
      </form>
      <p className="register__question">Уже зарегистрированы? <Link className='link register__signin-link' to='/signin'>Войти</Link></p>
    </section>
  );
}

export default Register;
