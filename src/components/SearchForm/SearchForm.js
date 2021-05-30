import './SearchForm.css'

import React from "react";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <input className="search-form__input" required  placeholder="Фильм" type="text" />
        <button type="submit" className="search-form__button"></button>
      </form>
      <div className="search-form__block">
        <input className="search-form__checkbox" data-index="0" id="short-movies" type="checkbox" />
        <label className="search-form__label" htmlFor="short-movies"></label>
        <span className="search-form__text">Короткометражки</span>
      </div>
    </section>
  )
}
