import './MoviesCard.css';

import React from "react";

export default function MoviesCard({ movie }) {

  return (
    <li className="movies__card">
      <img className="movies__card-image" src={movie.image} alt={movie.title} />
      <div className="movies__card-container">
        <h2 className="movies__card-title">{movie.title}</h2>
        {
          !movie.saved ? 
          <button className={movie.like ? "movies__card-like-button movies__card-like-button_liked" : "movies__card-like-button"}></button>
          : 
          <button className="movies__card-like-button movies__card-like-button_saved"></button>
        }
      </div>
      <p className="movies__card-movie-time">{movie.time}</p>
    </li>
  )
}