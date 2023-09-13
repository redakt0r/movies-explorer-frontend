import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="section page-not-found">
      <p className="page-not-found__code">404</p>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link to="/" className="link page-not-found__link">Назад</Link>
    </section>
  )
}

export default PageNotFound;
