import './SavedMovies.css';

import React from "react";
import MoviesCardList from '../MoviesCardList';

export default function SavedMovies() {

  const movies = [
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 1,
      saved: true
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 2,
      saved: true
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 3,
      saved: true
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 4,
      saved: true
    },
  ]

  return (
    <section className="movies">
      <MoviesCardList movies={movies} />
      <button className="movies__more-films">Ещё</button>
    </section>
  )
}