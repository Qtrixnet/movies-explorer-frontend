import './Profile.css'

import React from "react";
import { Link } from 'react-router-dom';

export default function Profile() {
  const errors = {
    name: 'Что-то пошло не так...',
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__label">Имя<input required minLength="2" disabled className="profile__input" type="text" defaultValue="Виталий" />
        </label>
        <label className="profile__label">E-mail<input required minLength="2" disabled className="profile__input" type="text" defaultValue="pochta@yandex.ru" />
        </label>
        <span
          id="form__input-error"
          className={`${errors.name ? 'form__input-error form__input-error_visible' : 'form__input-error'}`}
        >{errors.name}</span>
        <button className="profile__button">Редактировать</button>
      </form>
      <Link to="/" className="profile__button profile__button_log-out">Выйти из аккаунта</Link>
    </section>
  )
}
