import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import '../../blocks/link/link.css';
import Navigation from '../Navigation/Navigation';

function Header(isLoggedIn) {
  const [isApprovedRoute, setIsApprovedRoute] = useState(true)
  const location = useLocation();
  const routeWithColoredHeader = location.pathname === '/'

  const approvedRoutes = ['/', '/movies', '/saved-movies', '/profile', '/signin', '/signout']

  useEffect(() => {
    approvedRoutes.includes(location.pathname) ? setIsApprovedRoute(true) : setIsApprovedRoute(false);
  }, [location.pathname])

  return (
    <>
      {isApprovedRoute &&
        <header className={`header ${routeWithColoredHeader ? 'header_colored' : ''}`}>
        <Link className='link header__home-link' to='/'/>
        <Navigation isLoggedIn={isLoggedIn} routeWithColoredHeader={routeWithColoredHeader}/>
      </header>}
    </>
  );
}

export default Header;
