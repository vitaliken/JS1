
'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    
    const sortArr = (arr) => {
        arr.sort();
    }

    
    function createMovieList(films, parent) {
        parent.innerHTML ='';
        // 5.2) Фильмы должны быть отсортированы по алфавиту
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        // 3.2) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, promo__interactive);
            })
        });
    }

    createMovieList(movieDB.movies, promo__interactive);










    // 1.2) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;
    // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let newFilm = addInput.value;
            const favorite = checkbox.checked;

            if (newFilm) { //проверка, что строка не пустая

                // 2.2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }

                // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
                // "Добавляем любимый фильм"
                if (favorite) {
                    console.log('Добавляем любимый фильм');
                }


                movieDB.movies.push(newFilm);
                // 5.2) Фильмы должны быть отсортированы по алфавиту
                sortArr(movieDB.movies);
                createMovieList(movieDB.movies, promo__interactive);
            }

            event.target.reset();
        });

});
