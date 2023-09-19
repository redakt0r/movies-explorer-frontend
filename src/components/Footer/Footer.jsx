import './Footer.css';
import '../../blocks/link/link.css';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__wrapper'>
        <p className='footer__current-year'>&copy; {currentYear}</p>
        <ul className='footer__links'>
          <li className='footer__links-item'>
            <a className='link footer__link' target='blank' href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          </li>
          <li className='footer__links-item'>
            <a className='link footer__link' target='blank' href="https://github.com/redakt0r">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
