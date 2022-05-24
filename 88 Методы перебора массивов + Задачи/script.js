"use strict";

//FILTER
//возвращает новый массив по условию
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function (name) {
    return name.length < 5;
});

console.log(shortNames);





//MAP
//Взять каждый элемент и изменить его
const answers = ['IvAn', 'AnnA', 'HellO'];

const result = answers.map(item => item.toLowerCase());

console.log(result);





//EVERY/SOME
//возвращают булиновое значение
const some = [4, 'fsddsfdsf', 'werrew'];
console.log(some.some(item => typeof(item) === 'number'));

const some2 = [4, '5', 3];
console.log(some2.every(item => typeof(item) === 'number'));





//REDUCE
//собирает данные в одно целое
// const arr = [4, 5, 1, 3, 2, 6]; 
//                         // 0    4
//                         // 4    5
//                         // 9    1
//                         // 10   3
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// const arr = [4, 5, 1, 3, 2, 6]; 
//                         // 3    4
//                         // 4    5
//                         // 9    1
//                         // 10   3
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);


// const arr = ['apple', 'pear', 'plum']; 
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);









const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

//Создать массив массивов:
const newArr = Object.entries(obj);
console.log(newArr);

//Создать фильтрованный массив массивов:
const newArr2 = Object.entries(obj)
.filter(item => item[1] === 'persone')
//извлечь только имена из массива массивов:
.map(item => item[0]);
console.log(newArr2);










////////////////////////////////////////////
///////////////                 ЗАДАЧИ
//Упражнение по написанию кода 20: 
//Задания на работу с методами массивов

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    
}

function setFilmsIds(arr) {

}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    
}