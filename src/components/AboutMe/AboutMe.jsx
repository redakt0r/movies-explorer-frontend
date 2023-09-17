import './AboutMe.css';
import photo from '../../images/photo.jpg'

function AboutMe() {
  return (
    <section className='section about-me'>
      <h2 className='section__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__wrapper'>
          <p className='about-me__name'>Виталий</p>
          <p className='about-me__general'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className='link about-me__link' target='blank' href='https://github.com/redakt0r'>Github</a>
        </div>
        <img className='about-me__photo' src={photo} alt="Фотография автора проекта" />
      </div>
    </section>
  )
}

export default AboutMe;
