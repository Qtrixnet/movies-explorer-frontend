import './MoviesCardList.css';
import React, { useState, useEffect } from "react";
import MoviesCard from '../MoviesCard';
import useScreenWidth from '../../hooks/useScreenWidth';
import { DEVICE_PARAMS } from '../../utils/constants';
import planet from '../../images/planet.svg'

export default function MoviesCardList({ nothingFound = true, moviesList = [], onLikeClick = false, onDeleteClick = false, savedMoviesList = [], savedMoviesPage = false}) {
  
  const { tablet, mobileL, mobileS } = DEVICE_PARAMS;
  const screenWidth = useScreenWidth();
  const [showMovieList, setShowMovieList] = useState([]);
  const [cardsShowDetails, setCardsShowDetails] = useState({ total: 12, more: 4 });
  const [isMount, setIsMount] = useState(true);

  //* Сравнение фильмов и проверка на лайк
  function getSavedMovieCard(savedMoviesList, movie) {
    return savedMoviesList.find(savedMovie => savedMovie.movieId === movie.id)
  };

  //* Количество отображаемых карточек при разной ширине экрана
  useEffect(() => {
    if (screenWidth > tablet.width) {
      setCardsShowDetails(tablet.cards);
    } else if (screenWidth <= tablet.width && screenWidth > mobileL.width) {
      setCardsShowDetails(mobileL.cards);
    } else {
      setCardsShowDetails(mobileS.cards);
    }
    return () => setIsMount(false);
  }, [screenWidth, isMount, tablet, mobileL, mobileS]);

  //* Изменяем отображаемый массив фильмов взависимости от ширины экрана
  useEffect(() => {
    if (moviesList.length) {
      const res = moviesList.filter((item, i) => i < cardsShowDetails.total);
      setShowMovieList(res);
    }
  }, [moviesList, savedMoviesPage, cardsShowDetails.total]);

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
      {
        nothingFound ? <img id="movies__not-found" alt="not found error" className='movies__not-found' src={planet}></img> :
          <>
            <ul className="movies__card-list">
              {showMovieList.map((movie) => (
                <MoviesCard
                  saved={getSavedMovieCard(savedMoviesList, movie)}
                  key={movie.id || movie._id}
                  movie={movie}
                  onLikeClick={onLikeClick}
                  onDeleteClick={onDeleteClick}
                  savedMoviesPage={savedMoviesPage}
                />
              ))}
            </ul>
            {showMovieList.length >= 5 && showMovieList.length < moviesList.length ? <button onClick={handleClickMoreMovies} className="movies__more-films">Ещё</button> : ''}
          </>
      }
    </>
  )
}