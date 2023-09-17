import { Link } from 'react-router-dom';
import "./Profile.css";

function Profile() {
  return (
      <main className="profile">
        <h1 className="profile__greeting">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className='profile__inputs'>
            <label className="profile__label">
              Имя
              <input className="profile__input" type="text" required placeholder="Имя" minLength={2} maxLength={20}/>
            </label>
            <label className="profile__label">
              E-&nbsp;mail
              <input className="profile__input" type="text" required placeholder="E-mail"/>
            </label>
          </div>
          <button className="link profile__button" type="submit" aria-label="Редактировать">Редактировать</button>
        </form>
        <Link className='link profile__signout-link' to='/signout'>Выйти из аккаунта</Link>
      </main>
  );
}

export default Profile;
