"use strict"
const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      score = +prompt('На сколько оцените его?', ''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      score2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = score;
personalMovieDB.movies[lastFilm2] = score2;

console.log(personalMovieDB);
