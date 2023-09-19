import './Promo.css';
import promoImage from '../../images/promo_image.svg'

function Promo() {
  return (
    <section className='section promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a className='link promo__link' href='#about-project'>Узнать больше</a>
      <img className='promo__image' src={promoImage} alt="земной шар с океанами из слова web" />
    </section>
  );
}

export default Promo;
