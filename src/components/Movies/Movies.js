import './Movies.css'

import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList';
import * as movies from '../../utils/MoviesApi';
import SearchForm from '../SearchForm';
import { filterMovies, filterShortMovies, transformMovies } from '../../utils/utils';
import Preloader from '../Preloader';

export default function Movies({ user = {}, onLikeClick = false, onDeleteClick = false, savedMoviesList = [] }) {

  const [shortMovies, setShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([])
  const [nothingFound, setNothingFound] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //* Поиск по массиву у установка в состояния
  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
    setInitialMovies(moviesList);
    setFilteredMovies(shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem(`${user.email} - movies`, JSON.stringify(moviesList));
  }

  //* Поиск по запросу
  function handleSearchSubmit(inputValue) {
    setIsDataLoading(true);
    localStorage.setItem(`${user.email} - movieSearch`, inputValue);
    localStorage.setItem(`${user.email} - shortMovies`, shortMovies);

    movies
      .getMovies()
      .then((data) => {
        handleSetFilteredMovies(transformMovies(data), inputValue, shortMovies);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => setIsDataLoading(false));
  }

  //* Состояние чекбокса
  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      if (filterShortMovies(initialMovies).length === 0) {
        setFilteredMovies(filterShortMovies(initialMovies));
        setNothingFound(true);
      } else {
        setFilteredMovies(filterShortMovies(initialMovies));
        setNothingFound(false);
      }
    } else {
      initialMovies.length === 0 ? setNothingFound(true) : setNothingFound(false);
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${user.email} - shortMovies`, !shortMovies);
  }

  //* Проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem(`${user.email} - shortMovies`) === "true") {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [user]);

  //* Рендер фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem(`${user.email} - movies`)) {
      const movies = JSON.parse(localStorage.getItem(`${user.email} - movies`));
      movies.length === 0 ? setNothingFound(true) : setNothingFound(false)
      setInitialMovies(movies);
      if (localStorage.getItem(`${user.email} - shortMovies`) === "true") {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    } else {
      setNothingFound(true)
    }
  }, [user]);

  return (
    <>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        checkBoxClick={handleShortFilms}
        shortMovies={shortMovies} />
      <section className="movies">
        {
          isDataLoading ? <Preloader /> :
            <>
              {
                isError ? <span id="movies__error" className='movies__error movies__error_visible'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> :
                  <MoviesCardList
                    nothingFound={nothingFound}
                    moviesList={filteredMovies}
                    onLikeClick={onLikeClick}
                    onDeleteClick={onDeleteClick}
                    savedMoviesList={savedMoviesList}
                    savedMoviesPage={false}
                  />
              }
            </>
        }
      </section>
    </>
  )
}