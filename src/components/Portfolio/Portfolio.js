import './Portfolio.css';

import React from "react";

export default function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Проекты Яндекс.Практикум</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://qtrixnet.github.io/how-to-learn/">Статичный сайт</a></li>
        <li className="portfolio__list-item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://qtrixnet.github.io/russian-travel/">Адаптивный сайт</a></li>
        <li className="portfolio__list-item"><a target="_blank" rel="noreferrer" className="portfolio__link" href="https://qtrixnet.github.io/react-mesto-auth/#/sign-in">Одностраничное приложение</a></li>
      </ul>
    </section>
  )
}