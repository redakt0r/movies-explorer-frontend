import { Link } from 'react-router-dom';
import "./Profile.css";

function Profile() {
  return (
    <section className="section profile">
      <p className="profile__greeting">Привет, Виталий!</p>
      <form className="profile__form">
        <label className="profile__label">
          Имя
          <input className="profile__input" type="text" required placeholder="Имя"/>
        </label>
        <label className="profile__label">
          E-&nbsp;mail
          <input className="profile__input" type="text" required placeholder="E-mail"/>
        </label>
        <button className="profile__button" type="submit" aria-label="Редактировать">Редактировать</button>
      </form>
      <Link className='link profile__signout-link' to='/signout'>Выйти из аккаунта</Link>
    </section>
  );
}

export default Profile;
