"use strict";

// alert("Hello");


// const result = confirm('Are you here?');
// console.log(result);


// const result = prompt('Are you here?', '20');
// console.log(typeof(result));

// const answers = [];

// answers[0] = prompt('Как Ваше имя', '');
// answers[1] = prompt('Ваша фамилия', '');
// answers[2] = prompt('Сколько вам лет', '');

// document.write(answers);


let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDB = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' : false, 
}


for (let i = 0; i < 2 ; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = +prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    alert("Вы киномал")
} else {
    alert("Произошла ошибка")
}


console.log(personalMovieDB);


/////////////////////////////////////


const str = 'test';
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);


const fruit = 'Some fruit';
console.log(fruit.indexOf('q')); //поиск подстроки


const logg = 'Hello world';
console.log(logg.slice(6, 11)); // вырезать из строки диапазон


const logg2 = 'Hello world';
console.log(logg2.substring(6, 10));// вырезать из строки диапазон


const logg3 = 'Hello world';
console.log(logg3.substr(6, 2));// вырезать из строки 2 буквы



Math///
const num = 12.2;
console.log(Math.round(num));//округление числа


const test = '12.2px';
console.log(parseInt(test));//перевод строки в число


const test1 = '12.2324px';
console.log(parseFloat(test1));//перевод строки в дробное число


///////////////////////////////////////


