import './SearchForm.css'
import React from "react";
import { useFormWithValidation } from '../../hooks/useForm';

export default function SearchForm({handleSearchSubmit = false, shortMovies = false, checkBoxClick = false}) {

  const { values, errors, handleChange } = useFormWithValidation();

  function handleSubmit(e) { 
    e.preventDefault();
    handleSearchSubmit(values.film);
  };

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <input className="search-form__input" name='film' value={values.film || ''} onChange={handleChange} minLength="1" maxLength="100" required placeholder="Фильм" type="text" />
        <button type="submit" className="search-form__button"></button>
      </form>
        <span
              id="search-form__input-error"
              className={`${errors.film ? 'search-form__input-error search-form__input-error_visible' : 'search-form__input-error'}`}
            >Нужно ввести ключевое слово</span>
      <div className="search-form__block">
        <input onChange={checkBoxClick} className="search-form__checkbox" data-index="0" id="short-movies" type="checkbox" checked={shortMovies ? true : false}/>
        <label className="search-form__label" htmlFor="short-movies"></label>
        <span className="search-form__text">Короткометражки</span>
      </div>
    </section>
  )
}
