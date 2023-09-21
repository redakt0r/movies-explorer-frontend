import { Link } from 'react-router-dom';
import "./Profile.css";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';
import useForm from '../../hooks/useForm';

function Profile({ handleEditUser, errorMessage, onSignOut }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { values, handleChange } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [ isEditMode, setEditMode] = useState(false)

  let isChanged = values.name !== currentUser.name || values.email !== currentUser.email

  const onSubmit = (e) => {
    e.preventDefault();
    handleEditUser(values);
    setEditMode(false);
  }

  return (
      <main className="profile">
        <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form" onSubmit={onSubmit}>
          <div className='profile__inputs'>
            <label className="profile__label">
              Имя
              <input name='name' value={values.name} onChange={handleChange} disabled={!isEditMode} className="profile__input" type="text" required placeholder="Имя" minLength={2} maxLength={20}/>
            </label>
            <label className="profile__label">
              E-&nbsp;mail
              <input name='email' value={values.email} onChange={handleChange} disabled={!isEditMode} className="profile__input" type="email" required placeholder="E-mail"/>
            </label>
          </div>
          {!isEditMode ?
            <button className="link profile__edit-button" type="button" aria-label="Редактировать" onClick={()=>setEditMode(true)}>Редактировать</button>
          :
          <>
            <p className='profile__error-message'>{errorMessage}</p>
            <button disabled={!isChanged} className={`button profile__save-button ${isChanged ? 'profile__save-button_active' : ''}`} type="submit" aria-label="Сохранить">Сохранить</button>
          </>}
        </form>
        {!isEditMode && <Link className='link profile__signout-link' to='/' onClick={onSignOut}>Выйти из аккаунта</Link>}
      </main>
  );
}

export default Profile;
