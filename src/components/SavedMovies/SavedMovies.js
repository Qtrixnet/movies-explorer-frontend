import './SavedMovies.css';

import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList';
import SearchForm from '../SearchForm';
import { filterMovies } from '../../utils/utils';

export default function SavedMovies({ onDeleteClick = false, savedMoviesList = [] }) {

  const [shortMovies, setShortMovies] = useState(false);
  const [filteredSavedMovies, setFilteredMovies] = useState(savedMoviesList);

  //* Поиск по запросу
  function handleSearchSubmit(inputValue) {
    return setFilteredMovies(filterMovies(savedMoviesList, inputValue, shortMovies))
  }

  //* Состояние чекбокса
  function handleShortFilms() {
    setShortMovies(!shortMovies)
    localStorage.setItem('shortSavedMovies', !shortMovies);
  }

  //* Проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setShortMovies(true)
    } else {
      setShortMovies(false)
    }
  }, []);

  return (
    <>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        checkBoxClick={handleShortFilms}
        shortMovies={shortMovies}
      />
      <section className="movies">
        <MoviesCardList
          moviesList={filteredSavedMovies}
          onDeleteClick={onDeleteClick}
          onLikeClick={false}
          savedMoviesPage={true}
          savedMovies={savedMoviesList}
        />
      </section>
    </>
  )
}