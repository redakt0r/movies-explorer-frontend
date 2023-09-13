import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {
  return (
    <section className="section login">
      <Link className='link login__home-link' to='/'/>
      <p className="login__greeting">Рады видеть!</p>
      <form className="login__form">
        <label className="login__label">
          E-&nbsp;mail
          <input className="login__input" type="text" required placeholder="E-mail"/>
        </label>
        <label className="login__label">
          Пароль
          <input className="login__input" type="password" required placeholder="Пароль"/>
        </label>
        <button className="login__button" type="submit" aria-label="Войти">Войти</button>
      </form>
      <p className="login__question">Ещё не зарегистрированы? <Link className='link login__signin-link' to='/signin'>Регистрация</Link></p>
    </section>
  );
}

export default Login;
