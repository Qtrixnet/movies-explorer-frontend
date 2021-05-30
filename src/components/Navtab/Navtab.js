import './Navtab.css'

import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navtab() {

  return (
    <section className="navtab">
      <nav className="navtab__container">
        <ul className="navtab__list">
          <li className="navtab__list-item">
            <Link smooth className="navtab__link" to="#about-project">О проекте</Link>
          </li>
          <li>
            <Link smooth className="navtab__link" to="#techs">Технологии</Link>
          </li>
          <li>
            <Link smooth className="navtab__link" to="#student">Студент</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}