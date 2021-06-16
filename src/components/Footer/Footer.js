import './Footer.css';

import React from "react";
import { Route } from 'react-router-dom';

export default function Footer() {
  const endpoints = ['/movies', '/saved-movies', '/'];

  return (
    <Route exact path={endpoints}>
      <footer className="footer">
        <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="footer__container">
          <span className="footer__date">&copy; Кирилл Шашичев {new Date().getFullYear()}</span>
          <ul className="footer__list">
            <li className="footer__list-item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
            <li className="footer__list-item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://github.com/Qtrixnet">Github</a></li>
            <li className="footer__list-item"><a target="_blank" rel="noreferrer" className="footer__link" href="https://www.facebook.com/">Facebook</a></li>
          </ul>
        </div>
      </footer>
    </Route>
  )
}