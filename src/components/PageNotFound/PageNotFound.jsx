import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__message">
          <p className="page-not-found__code">404</p>
          <p className="page-not-found__text">Страница не найдена</p>
        </div>
        <Link to="/" className="link page-not-found__link">Назад</Link>
      </div>
    </section>
  )
}

export default PageNotFound;
