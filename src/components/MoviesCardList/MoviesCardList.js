import './MoviesCardList.css'

import React from "react";
import MoviesCard from '../MoviesCard';

export default function MoviesCardList({movies}) {


  return (
    <ul className="movies__card-list">
      {movies.map((movie) => (
        <MoviesCard
          key={movie._id}
          movie={movie}
          saved={false}
        />
      ))}
    </ul>
  )
}