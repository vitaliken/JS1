'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);





//добавить условие, что бы не вызвать ошибку и прерывание скрипта

// if (block) {
//     console.log(block.textContent);
// };

// console.log(1 + 2);






//Оператор опциональной цепочки "?.", смотрит есть ли такой 
//элемент и только после этого обращается к нему
//работает только на чтение
//на запись будет ошибка

console.log(block?.textContent);//undefined - не вызовет ошибку
console.log(1 + 2);