"use strict";



const personalMovieDB = {
    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?', '');
        }
    },
    rememberMyFilms : function() {
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
    },
    detectPersonalLevels : function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киномал")
        } else {
            console.log("Произошла ошибка")
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            return console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(anyDB) {
        anyDB.privat ? anyDB.privat = false : anyDB.privat = true;
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4 ; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        
            if (a != null && a != '' && a.length < 50) {
                personalMovieDB.genres[i - 1] = a;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        });
    },
}





personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevels();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();