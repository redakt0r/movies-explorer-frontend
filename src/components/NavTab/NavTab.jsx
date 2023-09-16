import './NavTab.css';
import { NavLink } from 'react-router-dom';

function NavTab() {
  const closeNavTab = () => {
    const navTab = document.querySelector('.nav-tab');
    navTab.classList.remove('nav-tab_opened');
  }
  const setActive = ({isActive}) => (isActive ? 'link nav-tab__link nav-tab__link_active' : 'link nav-tab__link')
  return (
    <div className='nav-tab'>
      <div className='nav-tab__container'>
        <button className='button nav-tab__close-button' onClick={closeNavTab}></button>
        <nav className='nav-tab__links'>
          <div className='nav-tab__wrapper'>
            <NavLink className={setActive} to='/' onClick={closeNavTab} >Главная</NavLink>
            <NavLink className={setActive} to='/movies' onClick={closeNavTab} >Фильмы</NavLink>
            <NavLink className={setActive} to='/saved-movies' onClick={closeNavTab} >Сохранённые фильмы</NavLink>
          </div>
          <NavLink className='link nav-tab__profile-link' to='/profile' onClick={closeNavTab} >Аккаунт</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavTab;
