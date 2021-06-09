import './Profile.css'

import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useForm';

export default function Profile({ user = {}, onSignOut = false, onEditProfile = false, isDataLoad = false }) {

  const { values, errors, isValid, handleChange, setValues, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [disableInput, setDisableInput] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues({
        name: currentUser.name,
        email: currentUser.email
      });
    }
  }, [resetForm, currentUser, setValues]);

  //* Кнопка редактирования
  const handleChangeData = (e) => {
    e.preventDefault()
    setDisableInput(false)
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет {user.name}!</h1>
      <form className="profile__form">
        <label className={!disableInput ? "profile__label_green profile__label" :"profile__label"}>Имя
        <input required minLength="2" disabled={disableInput ? true : false} className="profile__input" id="name" name="name" type="text" value={values.name || ''} onChange={handleChange} />
        </label>
        <label className="profile__label">E-mail
        <input required minLength="2" disabled={disableInput ? true : false} className="profile__input" id="email" name="email" type="email" value={values.email || ''} onChange={handleChange} />
        </label>
        <span
          id="form__input-error"
          className={`${errors.name ? 'form__input-error form__input-error_visible' : 'form__input-error'}`}
        >{errors.name}</span>
        {
          disableInput ?
            <button className="profile__button" onClick={handleChangeData}>Редактировать</button>
            :
            <button className="profile__button" disabled={!isValid} onClick={handleSubmit}>Сохранить</button>
        }
      </form>
      <Link to="/"
        onClick={() => {
          onSignOut();
        }} className="profile__button profile__button_log-out">Выйти из аккаунта</Link>
    </section>
  )
}
