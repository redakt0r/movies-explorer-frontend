import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import '../../blocks/link/link.css';

const isLoggedIn = true;

function Header() {
  const location = useLocation();
  const routeWithColoredHeader = location.pathname === '/'

  const [isMobile, setIsMobile] = useState(true);

  const handleHeaderVersion = () => {
    (window.innerWidth <= 768) ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(() => {
    window.addEventListener('version', handleHeaderVersion);
    handleHeaderVersion();
    console.log(window.innerWidth)
  })

  return (
    <header className={`header ${routeWithColoredHeader ? 'header_colored' : ''}`}>
      <Link className='link header__home-link' to='/'/>
      {isLoggedIn && (
        isMobile ? <button className='header__burger-button' type='button' aria-label='Меню'></button> :
        <nav className='header__navigation'>
        <Link className='link header__nav-link' to='/movies' >Фильмы</Link>
        <Link className='link header__nav-link' to='/saved-movies' >Сохранённые фильмы</Link>
        <Link className={`link header__profile-link ${routeWithColoredHeader ? 'header__profile-link_colored' : ''}`} to='/profile'>Аккаунт</Link>
      </nav>
      )}
      {!isLoggedIn && <nav className='header__navigation'>
        <Link className='link header__signup-link' to='/singup' >Регистрация</Link>
        <Link className='link header__signin-link' to='/singin'>Войти</Link>
      </nav>}
    </header>
  );
}

export default Header;
