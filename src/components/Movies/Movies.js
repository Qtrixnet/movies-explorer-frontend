import './Movies.css'

import React from "react";
import MoviesCardList from '../MoviesCardList';

export default function Movies() {

  const movies = [
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 1,
      like: true,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 2,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 3,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 4,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 5,
      like: true,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 6,
      like: true,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 7,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 8,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 9,
      like: true,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 10,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 11,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 12,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 13,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 14,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 15,
      like: false,
    },
    {
      image: "https://4sport.ua/_upl/2/1445/0_c77ca_335b91fd_orig.jpg",
      title: "Название Фильма",
      time: "1ч 42м",
      _id: 16,
      like: true,
    },
  ]

  return (
    <section className="movies">
      <MoviesCardList movies={movies}/>
      <button className="movies__more-films">Ещё</button>
    </section>
  )
}