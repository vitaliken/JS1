"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false, 
}

function rememberMyFilms() {
    for (let i = 0; i < 2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim();
        const b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevels() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киномал")
    } else {
        console.log("Произошла ошибка")
    }
}

detectPersonalLevels();

function showMyDB(hidden) {
    if (!hidden) {
        return console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4 ; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
    
        if (a != null && a != '' && a.length < 50) {
            personalMovieDB.genres[i - 1] = a;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();