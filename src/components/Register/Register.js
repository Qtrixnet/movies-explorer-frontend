import './Register.css'

import React from "react";
import { useFormWithValidation } from '../../hooks/useForm';

import { Link } from 'react-router-dom';
import Preloader from '../Preloader';

export default function Register({ onRegister = false, isDataLoad = false, errorText = "" }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(values)
  }

  return (
    <>
      { isDataLoad ? <Preloader /> :
        <form className="register" onSubmit={handleSubmit}>
          <Link to="/" title="На главную" className="register__logo" />
          <h1 className="register__title">Добро пожаловать!</h1>
          <label className="register__name-input-label">
            Имя
          <input
              pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
              autoComplete="on"
              className="register__name-input"
              placeholder="Имя"
              id="name"
              name="name"
              type="text"
              value={values.name || ''}
              onChange={handleChange}
              minLength="2"
              maxLength="40"
              required
            />
            <span
              id="register__form-input-error"
              className={`${errors.name ? 'register__form-input-error register__form-input-error_visible' : 'register__form-input-error'}`}
            >{errors.name}</span>
          </label>
          <label className="register__email-input-label">
            Email
          <input
              autoComplete="on"
              className="register__email-input"
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              value={values.email || ''}
              onChange={handleChange}
              minLength="2"
              maxLength="40"
              required
            />
            <span
              id="register__form-input-error"
              className={`${errors.email ? 'register__form-input-error register__form-input-error_visible' : 'register__form-input-error'}`}
            >{errors.email}</span>
          </label>
          <label className="register__password-input-label">
            Пароль
          <input
              autoComplete="on"
              className="register__password-input"
              placeholder="Пароль"
              id="password"
              name="password"
              type="password"
              value={values.password || ''}
              onChange={handleChange}
              minLength="8"
              maxLength="40"
              required
            />
            <span
              id="register__form-input-error"
              className={`${errors.password ? 'register__form-input-error register__form-input-error_visible' : 'register__form-input-error'}`}
            >{errors.password}</span>
          </label>
          <span className={!errorText.message ? "register__error-text" : "register__error-text register__error-text_visible"}>{errorText.message}</span>
          <button className={isValid ? "register__button" : "register__button register__button_disabled"} disabled={!isValid ? true : ''} type="submit">Зарегистрироваться</button>
          <span className="register__link-title">Уже зарегистрированы?
          <Link to="/sign-in" className="register__link">Войти</Link>
          </span>
        </form>
      }
    </>
  )
}
