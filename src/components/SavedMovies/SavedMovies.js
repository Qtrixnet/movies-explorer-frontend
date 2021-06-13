import './SavedMovies.css';

import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList';
import SearchForm from '../SearchForm';
import { filterMovies, filterShortMovies } from '../../utils/utils';

export default function SavedMovies({ onDeleteClick = false, savedMoviesList = [] }) {

  const [shortMovies, setShortMovies] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMoviesList)
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);
  
  // //* Поиск по запросу
  function handleSearchSubmit(inputValue) {
    if(filterMovies(savedMoviesList, inputValue, shortMovies).length === 0) {
      setNothingFound(true)
    } else {
      setNothingFound(false)
      setFilteredMovies(filterMovies(savedMoviesList, inputValue, shortMovies))
      setShowedMovies(filterMovies(savedMoviesList, inputValue, shortMovies))
    }
  }

  //* Состояние чекбокса
  function handleShortFilms() {
    if (shortMovies) {
      setShortMovies(false)
      localStorage.setItem('shortSavedMovies', false);
      setShowedMovies(savedMoviesList)
    } else {
      setShortMovies(true)
      localStorage.setItem('shortSavedMovies', true);
      setShowedMovies(filterShortMovies(filteredMovies))
    }
  }

  //* Проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem('shortSavedMovies') === 'true') {
      setShortMovies(true)
      setShowedMovies(filterShortMovies(savedMoviesList))
    } else {
      setShortMovies(false)
      setShowedMovies(savedMoviesList)
    }
  }, [savedMoviesList]);

  return (
    <>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        checkBoxClick={handleShortFilms}
        shortMovies={shortMovies}
      />
      <section className="movies">
        <MoviesCardList
          nothingFound={nothingFound}
          moviesList={showedMovies}
          onDeleteClick={onDeleteClick}
          onLikeClick={false}
          savedMoviesPage={true}
          savedMovies={savedMoviesList}
        />
      </section>
    </>
  )
}