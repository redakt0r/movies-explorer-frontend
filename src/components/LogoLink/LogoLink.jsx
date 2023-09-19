import { Link } from 'react-router-dom';
import './LogoLink.css';
import '../../blocks/link/link.css';

function LogoLink() {
  return (
    <>
      <Link className='link logo-link' to='/'/>
    </>
  );
}

export default LogoLink;
