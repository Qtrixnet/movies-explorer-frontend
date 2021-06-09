import './MoviesCardList.css';
import React, { useState, useEffect } from "react";
import MoviesCard from '../MoviesCard';
import useScreenWidth from '../../hooks/useScreenWidth';

export default function MoviesCardList({ moviesList = [], onLikeClick = false, onDeleteClick = false, savedMovies = [], savedMoviesPage = false }) {

  const screenWidth = useScreenWidth();
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsShowDetails, setCardsShowDetails] = useState({ sum: 12, more: 4 });
  const [isMount, setIsMount] = useState(true);

  //* Сравнение фильмов и проверка на лайк
  function getSavedMovieCard(savedMovies, movie) {
    if (savedMovies) {
      return savedMovies.find((savedMovie) => {
        if (savedMovie.movieId === movie.id) {
          movie._id = savedMovie._id
        }
        return savedMovie.movieId === movie.id;
      });
    }
  };

  //* Количество отображаемых карточек при разной ширине экрана
  useEffect(() => {
    if (screenWidth > 768) {
      setCardsShowDetails({ sum: 12, more: 4 });
    } else if (screenWidth <= 768 && screenWidth > 480) {
      setCardsShowDetails({ sum: 8, more: 2 });
    } else {
      setCardsShowDetails({ sum: 5, more: 2 });
    }
    return () => setIsMount(false);
  }, [screenWidth, isMount]);

  //* Изменяем отображаемый массив фильмов взависимости от ширины экрана
  useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < cardsShowDetails.sum);
      setShowMovieList(res);
    }
  }, [moviesList, savedMoviesPage, cardsShowDetails.sum]);

  //* Добавление карточек при клике по кнопке "Еще"
  function handleClickMoreMovies() {
    const start = showMovieList.length;
    const end = start + cardsShowDetails.more;
    const additional = moviesList.length - start;

    if (additional > 0) {
      const newCards = moviesList.slice(start, end);
      setShowMovieList([...showMovieList, ...newCards]);
    }
  };

  return (
    <>
      <ul className="movies__card-list">
        {showMovieList.map((movie) => (
          <MoviesCard
            saved={getSavedMovieCard(savedMovies, movie)}
            key={movie.id || movie._id}
            movie={movie}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
            savedMoviesPage={savedMoviesPage}
          />
        ))}
      </ul>
      {showMovieList.length >= 12 && showMovieList.length < moviesList.length ? <button onClick={handleClickMoreMovies} className="movies__more-films">Ещё</button> : ''}
    </>
  )
}