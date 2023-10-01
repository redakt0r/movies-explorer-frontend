import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  const revertBack = () => navigate(-1);
  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <div className="page-not-found__message">
          <h1 className="page-not-found__code">404</h1>
          <p className="page-not-found__text">Страница не найдена</p>
        </div>
        <button onClick={revertBack} className="link page-not-found__link">
          Назад
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
