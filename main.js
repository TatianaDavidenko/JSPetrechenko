'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

const personalMovDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

const lastOfFilms = prompt('Один из последних просмотренных фильмов?', ' '),
      ratingOfFilms = +prompt('На сколько оцените его?', '10'),
      lastOfFilms2 = prompt('Один из последних просмотренных фильмов?', ' '),
      ratingOfFilms2 = +prompt('На сколько оцените его?', '10');

personalMovDB.movies[lastOfFilms] = ratingOfFilms;
personalMovDB.movies[lastOfFilms2] = ratingOfFilms2;

console.log(personalMovDB);