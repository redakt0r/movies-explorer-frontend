import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navigation.css';
import '../../blocks/link/link.css';

function Navigation({isLoggedIn, routeWithColoredHeader}) {
  const [isMobile, setIsMobile] = useState(true);

  const handleNavigationVersion = () => {
    (window.innerWidth <= 768) ? setIsMobile(true) : setIsMobile(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleNavigationVersion);
    handleNavigationVersion();
  }, [])

  return (
    <>
      {isLoggedIn && (
        isMobile ? <button className='button navigation__burger-button' type='button' aria-label='Меню'></button> :
        <nav className='navigation__links'>
          <Link className='link navigation__link' to='/movies' >Фильмы</Link>
          <Link className='link navigation__link' to='/saved-movies' >Сохранённые фильмы</Link>
          <Link className={`link navigation__profile-link ${routeWithColoredHeader ? 'navigation__profile-link_colored' : ''}`} to='/profile'>Аккаунт</Link>
      </nav>
      )}
      {!isLoggedIn && <nav className='navigation__links'>
        <Link className='link navigation__signup-link' to='/singup' >Регистрация</Link>
        <Link className='link navigation__signin-link' to='/singin'>Войти</Link>
      </nav>}
    </>
  );
}

export default Navigation;
