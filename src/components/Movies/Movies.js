import './Movies.css'

import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList';
import * as movies from '../../utils/MoviesApi';
import SearchForm from '../SearchForm';
import { filterMovies, filterShortMovies } from '../../utils/utils';
import Preloader from '../Preloader';

export default function Movies({ onLikeClick = false, onDeleteClick = false, savedMoviesList = [] }) {

  const [shortMovies, setShortMovies] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //* Поиск по массиву у установка в состояния
  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
    setFilteredMovies(shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  //* Отправка формы поиска
  function handleSearchSubmit(inputValue) {
    setIsDataLoading(true);
    localStorage.setItem('movieSearch', inputValue);
    localStorage.setItem('shortMovies', shortMovies);

    movies.getMovies()
      .then((data) => {
        handleSetFilteredMovies(data, inputValue, shortMovies);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => setIsDataLoading(false))
  }

  //* Переключатель короткометражек
  function handleShortFilms() {
    setShortMovies(!shortMovies)
    localStorage.setItem('shortMovies', !shortMovies);
  }

  //* Состояние переключателя корокометражек
  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setShortMovies(true)
    } else {
      setShortMovies(false)
    }
  }, []);

  //* Рендер фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'))
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

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
                  <>
                    {
                      nothingFound ?
                        <span id="movies__error" className='movies__error movies__error_visible'>Ничего не найдено</span> :
                        <>
                          <MoviesCardList
                            moviesList={filteredMovies}
                            onLikeClick={onLikeClick}
                            onDeleteClick={onDeleteClick}
                            savedMovies={savedMoviesList}
                            savedMoviesPage={false}
                          />
                        </>
                    }
                  </>
              }
            </>
        }
      </section>
    </>
  )
}