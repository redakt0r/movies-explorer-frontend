import { Link } from 'react-router-dom';
import "./Profile.css";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Profile({ handleEditUser, errorMessage, onSignOut, inputError }) {
  const { currentUser } = useContext(CurrentUserContext);

  const { values, handleChange, errors } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [ isEditMode, setEditMode] = useState(false)

  let isChanged = values.name !== currentUser.name || values.email !== currentUser.email

  async function onSubmit(e) {
    e.preventDefault();
    if (await handleEditUser(values)) {
      setEditMode(false);
    } else return;
  }

  return (
      <main className="profile">
        <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__form" onSubmit={onSubmit}>
          <div className='profile__inputs'>
            <label className="profile__label">
              Имя
              <input pattern='^[A-Za-zА-Яа-я\sё\-]*$' name='name' value={values.name} onChange={handleChange} disabled={!isEditMode} className="profile__input" type="text" required placeholder="Имя" minLength={2} maxLength={30}/>
            </label>
            <span className={`profile__input-error ${inputError ? 'profile__input-error_active' : ''}`}>{errors.name}</span>
            <label className="profile__label">
              E-&nbsp;mail
              <input pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$' name='email' value={values.email} onChange={handleChange} disabled={!isEditMode} className="profile__input" type="email" required placeholder="E-mail"/>
            </label>
            <span className={`profile__input-error ${inputError ? 'profile__input-error_active' : ''}`}>{errors.email}</span>
          </div>
          {!isEditMode ?
            <button className="link profile__edit-button" type="button" aria-label="Редактировать" onClick={() => setEditMode(true)}>Редактировать</button>
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
