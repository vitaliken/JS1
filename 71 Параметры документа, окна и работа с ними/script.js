'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');


const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    //развернуть элемент на кол-во пикслелей:
    // box.style.height = box.scrollHeight + 'px';

    //показать сколько пикселей уже проскроллили от верха
    console.log(box.scrollTop);
});

//получить координаты (всё от верхнего левого угла)
console.log(box.getBoundingClientRect());

//получить стили, которые уже применены к элементу:
 const style = window.getComputedStyle(box);
 console.log(style.display);