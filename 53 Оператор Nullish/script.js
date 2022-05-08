'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);





//?? - работает только с NULL или UNDEFINED, остальные являются TRUE
let userName = 0;
console.log(userName ?? "User");


//выбираем из нескольких парметров и ищем, что хотя бы 1 существует
let userName2;
let userKey;
console.log(userName2 ?? userKey ?? "User");