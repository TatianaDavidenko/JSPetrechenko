'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

const personalMovDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (numberOfFilms <= 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms <= 30) {
    alert('Вы обычный зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovDB);