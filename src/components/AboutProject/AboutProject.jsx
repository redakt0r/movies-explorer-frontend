import './AboutProject.css';

function AboutProject() {
  return (
    <section className='section about-project'>
      <h2 className='section__title'>О проекте</h2>
      <div className='about-project__wrapper'>
        <div className='about-project__article-wrapper'>
          <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__info'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__article-wrapper'>
          <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__info'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__diagram-wrapper'>
        <figure className='about-project__diagram-highlighted'>
          <p className='about-project__diagram-data-highlighted'>1 неделя</p>
          <figcaption className='about-project__diagram-caption'>Back-end</figcaption>
        </figure>
        <figure className='about-project__diagram'>
          <p className='about-project__diagram-data'>4 недели</p>
          <figcaption className='about-project__diagram-caption'>Front-end</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default AboutProject;
