'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
  }
}

start();

const personalMovDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastOfFilms = prompt('Один из последних просмотренных фильмов?', ' '),
      ratingOfFilms = +prompt('На сколько оцените его?', '10');

    if (lastOfFilms != null && ratingOfFilms != null && lastOfFilms != '' && ratingOfFilms != '' &&
      lastOfFilms.length < 50) {
      personalMovDB.movies[lastOfFilms] = ratingOfFilms;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms <= 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert('Вы обычный зритель');
  } else if (numberOfFilms > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovDB);
  }
}
showMyDB(personalMovDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovDB.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i} `, '');
  }
}

writeYourGenres();

console.log(personalMovDB);