import { NavLink } from 'react-router-dom';
import './Navigation.css';
import '../../blocks/link/link.css';

function Navigation({isLoggedIn, routeWithColoredHeader}) {
  const openNavTab = () => {
    document.querySelector('body').style.overflowY ='hidden';
    const navTab = document.querySelector('.nav-tab');
    navTab.classList.add('nav-tab_opened');
  }
  const setActive = ({isActive}) => (isActive ? 'link navigation__link navigation__link_active' : 'link navigation__link')
  return (
    <>
      {isLoggedIn ?
        <>
          <button className='button navigation__burger-button' type='button' aria-label='Меню' onClick={openNavTab}></button>
          <nav className='navigation__links'>
            <NavLink className={setActive} to='/movies' >Фильмы</NavLink>
            <NavLink className={setActive} to='/saved-movies' >Сохранённые фильмы</NavLink>
            <NavLink className={`link navigation__profile-link ${setActive} ${routeWithColoredHeader ? 'navigation__profile-link_colored' : ''}`} to='/profile'>Аккаунт</NavLink>
          </nav>
        </>
         :
        <nav className='navigation__links'>
          <NavLink className='link navigation__signup-link' to='/singup' >Регистрация</NavLink>
          <NavLink className='link navigation__signin-link' to='/singin'>Войти</NavLink>
        </nav>}
    </>
  );
}

export default Navigation;
