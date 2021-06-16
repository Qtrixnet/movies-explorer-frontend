import './MoviesCard.css';

import React from "react";
import { transformTime } from '../../utils/utils';

export default function MoviesCard({ movie = {}, onLikeClick = false, onDeleteClick = false, saved = false, savedMoviesPage = false }) {
  //* Сохранение фильма
  function handleLikeClick() {
    onLikeClick(movie)
  }

  //* Удаление фильма
  function handleDeleteClick() {
    onDeleteClick(movie)
  }

  return (
    <li className="movies__card">
      <a className="movies__card-link" target="_blank" rel="noreferrer" href={movie.trailerLink || movie.trailer}>
        <span title={`Название: ${movie.nameRU}. \n\nОписание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`} className="movies__card-overlay"></span>
        <img loading="lazy" className="movies__card-image" src={movie.image} alt={movie.nameRU} title={movie.description} />
      </a>
      <div className="movies__card-container">
        <h2 className="movies__card-title">{movie.nameRU}</h2>
        {
          !savedMoviesPage ?
            <button onClick={saved ? handleDeleteClick : handleLikeClick} className={saved ? "movies__card-like-button movies__card-like-button_liked" : "movies__card-like-button"}></button>
            :
            <button onClick={handleDeleteClick} className="movies__card-like-button movies__card-like-button_saved"></button>
        }
      </div>
      <p className="movies__card-movie-time">Длительность: {transformTime(movie.duration)}</p>
    </li>
  )
}
