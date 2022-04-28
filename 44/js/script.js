/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан123",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promo__adv = document.querySelector('.promo__adv');
promo__adv.remove();

//2) Изменить жанр фильма, поменять "комедия" на "драма"
const promo__genre = document.querySelector('.promo__genre');
promo__genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
const promo__bg = document.querySelector('.promo__bg');
promo__bg.style.cssText = 'background: url(./img/bg.jpg) center center/cover no-repeat';
//или promo__bg.style.backgroundImage = 'url('img/bg.jpg')';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const promo__interactive =  document.querySelector('.promo__interactive-list');

promo__interactive.innerHTML ='';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    promo__interactive.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `
});