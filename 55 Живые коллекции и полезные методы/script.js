'use strict';

//получим в псевдомассиве больше методов
const boxesQuery = document.querySelectorAll('.box');

//получим в псевдомассиве меньше методов
const boxesGet = document.getElementsByClassName('box');

// boxesQuery[0].remove();//удалить первый box
// boxesGet[0].remove();//удалить второй box

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery);//Получить узлы//статичная коллекция
// console.log(boxesGet);//Получить элементы//живая коллекция - текущее состояние

// console.log(document.body.children);//получение живой коллекции





//Создание массива из псевдомассива
//нюанс - массив статичен
// console.log(Array.from(boxesGet));





//найти элемент, который собдержит определенный css селектор
boxesQuery.forEach(box => {
    if (box.matches('.this')) {
        console.log('This one!')
    }
})





//найти ближайшего родителя от boxes с классом wrapper
console.log(boxesQuery[0].closest('.wrapper'));