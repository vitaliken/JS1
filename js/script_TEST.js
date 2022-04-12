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
CALLBACK


function first() {
    //do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2)
}

first();
second();



function learnJS(lang, callback) {
    console.log(`I'm learning ${lang}`);
    callback();
}

learnJS('JS', () => console.log('I passed this lesson!'));





///////////////////////////////////////
ОБЪЕКТЫ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

// console.log(options.name);

//удалить свойство из объекта
// delete options.name;
// console.log(options);


//перебор всех значений объекта + вложенные объекты
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}


//узнать кол-во ключей объекта
console.log(Object.keys(options).length)


//вызов метода из объекта
options.makeTest();


//деструктуризация объекта (извлечение из объекта)
const a = {border, bg} = options.colors;
console.log(a);





////////////////////////////////////////////////////
МАССИВЫ

//удаляет последний элемент массива
const arr = [1, 2, 3, 6, 8];
arr.pop();
console.log(arr);


//добавляет последний элемент массива
const arr = [1, 2, 3, 6, 8];
arr.push(10);
console.log(arr);


//перебор массива
const arr = [1, 2, 3, 6, 8];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//еще один способ ПЕРЕБОР
const arr = [1, 2, 3, 6, 8];
for (let value of arr) {
    console.log(value)
}


//длина массива
const arr = [1, 2, 3, 6, 8];
console.log(arr.length)


//перебор массива с выполнением функции CALLBACK
const arr = [1, 2, 3, 6, 8];
//item - тот элемент который мы сейчас перебираем
//i - номер по порядку
//arr - ссылка на массив
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
})


//модифицирует массив
arr.map
arr.filter


//разбить строку в массив с разделителем ", "
const str = prompt('', '');
const products = str.split(', ');
console.log(products);


//собрать массив в строку с разделителем '; '
const str = prompt('', '');
const products = str.split(', ');//получаем массив
console.log(products.join('; '));//объединяем в строку


//сортирует элементы массива КАК СТРОКИ
const str = prompt('', '');
const products = str.split(', ');//получаем массив
products.sort();//сортирует как строку (по алфавиту)
console.log(products.join('; '));//объединяем в строку через '; '


//корректно сортирует элементы массива цифр с помощью переданной функции
const arr = [41, 32342, 322, 361, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
