'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


//установка стиля элементу js
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//установка инланового стиля элементу
//можно использовать `${}`
box.style.cssText = 'background-color: blue; width: 500px'

//установка js стиля элементу из псевдомассива
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//для querySelectorAll можно использовать for или forEach
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

//forEach
// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// })


//МЕТОДЫ РАБОТЫ СО СТРАНИЦЕЙ
//Создание элемента внутри js файла (на странице его нет):
const div = document.createElement('div');

//создание текстового узла (без оболочки тега):
// const text = document.createTextNode('Тут был я');


//добавить класс black к элементу div (только внутри js);
div.classList.add('black');

//добавление элемента в конец body:
// document.body.append(div);

//добавление элемента в конец wrapper:
wrapper.append(div);
//УСТАРЕВШИЙ способ:
// wrapper.appendChild(div);

//добавление элемента в начало body:
// wrapper.prepend(div);

//добавление элемента перед каким-то элементом:
// hearts[0].before(div);
//УСТАРЕВШИЙ способ:
// wrapper.insertBefore(div, hearts[0]);

//добавление элемента после элемента:
// hearts[0].after(div);

//удалить элемент со страницы:
// circles[0].remove();
//УСТАРЕВШИЙ способ:
// wrapper.removeChild(hearts[1]);

//заменить элемент на другой(на circles):
// hearts[0].replaceWith(circles[0]);
//УСТАРЕВШИЙ способ:
// wrapper.replaceChild(circles[0], hearts[0]);


//ВПИСАТЬ ТЕКСТ В ЭЛЕМЕНТ:
// div.innerHTML = 'Hello world';
//или HTML структуру
div.innerHTML = '<h1>Hello world</h1>';
//Еще способ, только для текста (не HTML):
// div.textContent = 'Hello';

//Вставить HTML перед или после определенного тега:
//непосредственно перед элементом:
// div.insertAdjacentHTML('beforebegin', '<h2>Hi</h2>');
//непосредственно после элемента:
// div.insertAdjacentHTML('afterend', '<h2>Hi</h2>');
//вставить в начало элемента:
// div.insertAdjacentHTML('afterbegin', '<h2>Hi</h2>');
//вставить в конец элемента:
// div.insertAdjacentHTML('beforeend', '<h2>Hi</h2>');
