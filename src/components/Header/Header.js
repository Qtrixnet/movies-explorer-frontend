import './Header.css'

import React, { useState } from "react";
import { Link, NavLink} from 'react-router-dom';

export default function Header({ path = false, loggedIn = false }) {


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
          <header className='header header_logged-out'>
            <Link to="/" className="header__logo" />
            <div className="header__button-container">
              <Link to="/sign-up" className="header__button">Регистрация</Link>
              <Link to="/sign-in" className="header__button header__button_active">Войти</Link>
            </div>
          </header >
          :
          <header className={path === "/" ? 'header header_logged-out' : 'header header_logged-in'}>
            <Link to="/" className="header__logo" />
            <div className="header__button-container header__button-container_logged header_logged-buttons">
              <NavLink to="/movies" activeClassName="header__logged-button_active" className="header__logged-button">Фильмы</NavLink>
              <NavLink to="/saved-movies" activeClassName="header__logged-button_active" className="header__logged-button">Сохраненные фильмы</NavLink>
            </div>
            <div className="header__button-container header__button-container_logged">
              <NavLink to="/profile" activeClassName="header__logged-button_active" className="header__logged-button header__logged-button_account">Аккаунт<span className="header__account-icon"></span></NavLink>
            </div>
            <button onClick={handleOpen} className="header__burger-menu">
              <span></span>
            </button>
            {
              isClicked ?
                <>
                  <div className="header__overlay"></div>
                  <div className="header__menu">
                    <NavLink exact to="/" onClick={handleClose} activeClassName="header__menu-button_active" className="header__menu-button">Главная</NavLink>
                    <NavLink to="/movies" onClick={handleClose} activeClassName="header__menu-button_active" className="header__menu-button">Фильмы</NavLink>
                    <NavLink to="/saved-movies" onClick={handleClose} activeClassName="header__menu-button_active" className="header__menu-button">Сохраненные фильмы</NavLink>
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
