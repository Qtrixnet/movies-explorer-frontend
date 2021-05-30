import './Header.css'

import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

  const loggedIn = true;

  const [isClicked, setIsDataLoad] = useState(false);

  function handleClose() {
    setIsDataLoad(false)
  }

  function handleOpen() {
    setIsDataLoad(true)
  }

  return (
    <>
      {
        !loggedIn ?
          <header className='header'>
            <Link to="/" className="header__logo" />
            <div className="header__button-container">
              <Link to="/sign-up" className="header__button">Регистрация</Link>
              <Link to="/sign-in" className="header__button header__button_active">Войти</Link>
            </div>
          </header >
          :
          <header className='header'>
            <Link to="/" className="header__logo" />
            <div className="header__button-container header__button-container_logged header_logged-buttons">
              <Link to="/movies" className="header__logged-button header__logged-button_active">Фильмы</Link>
              <Link to="/saved-movies" className="header__logged-button">Сохраненные фильмы</Link>
            </div>
            <div className="header__button-container header__button-container_logged">
              <Link to="/profile" className="header__logged-button header__logged-button_account">Аккаунт<span className="header__account-icon"></span></Link>
            </div>
            <button onClick={handleOpen} className="header__burger-menu">
              <span></span>
            </button>
            {
              isClicked ?
                <>
                  <div className="header__overlay"></div>
                  <div className="header__menu">
                    <Link to="/" onClick={handleClose} className="header__menu-button">Главная</Link>
                    <Link to="/movies" onClick={handleClose} className="header__menu-button">Фильмы</Link>
                    <Link to="/saved-movies" onClick={handleClose} className="header__menu-button">Сохраненные фильмы</Link>
                    <Link to="/profile" onClick={handleClose} className="header__logged-button header__logged-button_account">Аккаунт<span className="header__account-icon"></span></Link>
                    <button onClick={handleClose} className="header__menu-close">&#x2716;</button>
                  </div>
                </>
                : ''
            }
          </header >
      }
    </>
  )
}
