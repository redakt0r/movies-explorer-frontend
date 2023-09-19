import "./Portfolio.css";
import linkArrow from "../../images/link_arrow.svg";

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="section__title section__title_faded">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="link portfolio__link"
            target="blank"
            href="https://github.com/redakt0r/how-to-learn"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-arrow"
              src={linkArrow}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <li className="portfolio__item">
        <a
            className="link portfolio__link"
            target="blank"
            href="https://github.com/redakt0r/russian-travel"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-arrow"
              src={linkArrow}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <li className="portfolio__item">
        <a
            className="link portfolio__link"
            target="blank"
            href="https://github.com/redakt0r/react-mesto-api-full-gha"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-arrow"
              src={linkArrow}
              alt="Иконка ссылки"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
