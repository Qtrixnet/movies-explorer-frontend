import './Login.css';

import React from "react";
import { useFormWithValidation } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';

export default function Login({ onLogin = false, isDataLoad = false, errorText = '' }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(values)
  }

  return (
    <>
      { isDataLoad ? <Preloader /> :
        <form className="login" onSubmit={handleSubmit}>
          <Link to="/" title="На главную" className="login__logo" />
          <h1 className="login__title">Рады видеть!</h1>
          <label className="login__email-input-label">
            Email
          <input
              autoComplete="on"
              className="login__email-input"
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
              id="login__form-input-error"
              className={`${errors.email ? 'login__form-input-error login__form-input-error_visible' : 'login__form-input-error'}`}
            >{errors.email}</span>
          </label>
          <label className="login__password-input-label">
            Пароль
          <input
              autoComplete="on"
              className="login__password-input"
              placeholder="Пароль"
              id="password"
              name="password"
              type="password"
              value={values.password || ''}
              onChange={handleChange}
              minLength="8"
              maxLength="40"
              required />
            <span
              id="login__form-input-error"
              className={`${errors.password ? 'login__form-input-error login__form-input-error_visible' : 'login__form-input-error'}`}
            >{errors.password}</span>
          </label>
          <span className={!errorText.message ? "login__error-text" : "login__error-text login__error-text_visible"}>{errorText.message}</span>
          <button className={isValid ? "login__button" : "login__button login__button_disabled" } disabled={!isValid ? true : ''} type="submit">Войти</button>
          <span className="login__link-title">Еще не зарегистрированы?
          <Link to="/sign-up" className="login__link">Регистрация</Link>
          </span>
        </form>
      }
    </>
  )
}
