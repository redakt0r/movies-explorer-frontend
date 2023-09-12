import { Link } from 'react-router-dom';
import './Promo.css';
import promoImage from '../../images/promo_image.svg'

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <Link className='link promo__link'>Узнать больше</Link>
      <img className='promo__image' src={promoImage} alt="земной шар с океанами из слова web" />
    </section>
  );
}

export default Promo;
