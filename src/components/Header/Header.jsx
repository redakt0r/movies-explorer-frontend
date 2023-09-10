import { Link } from 'react-router-dom';
import './Header.css';
import '../../blocks/link/link.css';

const isLoggedIn = true;

function Header() {
  return (
    <header className='header'>
      <Link className='header__home-link' />
      {isLoggedIn ? <nav className='header__navigation'>
        <Link className='link header__signup-link' to='/singup' >Регистрация</Link>
        <Link className='link header__signin-link' to='/singin'>Войти</Link>
      </nav> :
      <nav className='header__navigation'>
        <Link className='link header__movies-link' to='/movies' >Фильмы</Link>
        <Link className='link header__saved-link' to='/saved-movies' >Сохранённые фильмы</Link>
        <Link className='link header__profile-link' to='/profile'>Аккаунт</Link>
      </nav>}
    </header>
  );
}

export default Header;
