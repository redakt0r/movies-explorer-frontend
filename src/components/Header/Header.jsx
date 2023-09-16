import { useLocation } from 'react-router-dom';
import './Header.css';
import '../../blocks/link/link.css';
import Navigation from '../Navigation/Navigation';
import LogoLink from '../LogoLink/LogoLink';
import NavTab from '../NavTab/NavTab';

function Header({isLoggedIn}) {
  const location = useLocation();
  const routeWithColoredHeader = location.pathname === '/';

  return (
    <header className={`header ${routeWithColoredHeader ? 'header_colored' : ''}`}>
      <LogoLink/>
      <Navigation isLoggedIn={isLoggedIn} routeWithColoredHeader={routeWithColoredHeader}/>
      <NavTab/>
    </header>
  );
}

export default Header;
