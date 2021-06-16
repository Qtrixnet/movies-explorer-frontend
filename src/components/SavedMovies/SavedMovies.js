import './SavedMovies.css';

import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList';
import SearchForm from '../SearchForm';
import { filterMovies, filterShortMovies } from '../../utils/utils';

export default function SavedMovies({ user = {}, onDeleteClick = false, savedMoviesList = [] }) {

  const [shortMovies, setShortMovies] = useState(false);
  const [nothingFound, setNothingFound] = useState(true);
  const [showedMovies, setShowedMovies] = useState(savedMoviesList)
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);
  
  //* Поиск по запросу
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
    if (!shortMovies) {
      setShortMovies(true)
      localStorage.setItem(`${user.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0 ? setNothingFound(true) : setNothingFound(false)
    } else {
      setShortMovies(false)
      localStorage.setItem(`${user.email} - shortSavedMovies`, false);
      filteredMovies.length === 0 ? setNothingFound(true) : setNothingFound(false)
      setShowedMovies(filteredMovies)
    }
  }

  //* Проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem(`${user.email} - shortSavedMovies`) === 'true') {
      setShortMovies(true)
      setShowedMovies(filterShortMovies(savedMoviesList))
    } else {
      setShortMovies(false)
      setShowedMovies(savedMoviesList)
    }
  }, [savedMoviesList, user]);

  useEffect(() => {
    if(savedMoviesList.length !== 0) {
      setNothingFound(false)
    } else {
      setNothingFound(true)
    }
  }, [savedMoviesList])

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