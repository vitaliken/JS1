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
МЕТОДЫ СТРОК


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

//перебор всех значений объекта без вложенных
for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}


//узнать кол-во ключей объекта
//сначала созжает массив из ключей, 
//а потом выводит кол-во этих ключей
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
//ТОЛЬКО ДЛЯ МАССИВОВ, ПСЕВДОМАССИВОВ, СТРОК, (MAP, SET)
//МОЖНО ПРЕРВАТЬ МАССИВ
const arr = [1, 2, 3, 6, 8];
for (let value of arr) {
    console.log(value)
}


//длина массива
const arr = [1, 2, 3, 6, 8];
console.log(arr.length)


//перебор массива с выполнением функции CALLBACK
//НЕЛЬЗЯ ПРЕРВАТЬ МАССИВ
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





/////////////////////////////////////////////////
КОПИРОВАНИЕ ОБЪЕКТОВ

const mainObj = {
    a: 5,
    b: 1
}

//при копировании вложенность не скопируется
function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

}

const newNumbers = copy(numbers);

newNumbers.a = 10;
 
console.log(newNumbers);//измененный объект
console.log(numbers);//исходный объект


//Объединение объектов
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

}

const add = {
    d: 17,
    e: 20
}

console.log(Object.assign(numbers, add));//новый объединенный объект
console.log(Object.assign({}, add));//клонировать объект add





//////////////////////////////////////////////
КОПИРОВАНИЕ МАССИВОВ

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();
newArray[1] = '123123'//изменение копии

console.log(oldArray);
console.log(newArray);





//////////////////////////////////////////////
КОПИРОВАНИЕ МАССИВОВ
ОПЕРАТОР РАЗВАРОТА - spread оператор

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; //spread оператор

console.log(internet);


//еще пример
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7]//передадим значения как аргументы ф log
log(...num);


//создание копии массива с помощью spread оператора
const array = ['a', 'b'];
const newArray2 = [...array];
newArray2[0] = 'sdfsdf';

console.log(array);
console.log(newArray2);


//создание копии объекта с помощью spread оператора
const q = {
    one: 1,
    two: 2
};

const newObj2 = {...q};
newObj2.one = 'fwedx2e23rx23';

console.log(q);
console.log(newObj2);




//////////////////////////////////////////////////////
ЗАДАЧИ НА РАБОТУ С ОБЪЕКТАМИ (35)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);


//////////////////////////////////////////////////////
ЗАДАЧИ НА РАБОТУ С МАССИВАМИ (35)

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    if (arr.length == 0) {
        return `Семья пуста`;
    }
    
    let str = (arr.join(' '));
    return `Семья состоит из: ${str} `;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    for (let value of arr) {
        console.log(`${value.toLowerCase()}`);
    }
}

// ИЛИ ВТОРОЕ РЕШЕНИЕ:
// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }
standardizeStrings(favoriteCities);


//////////////////////////////////////////////////////
ЗАДАЧИ НА РАБОТУ С МАССИВАМИ 2 (35)
РАЗВОРОТ СТРОКИ

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) != 'string') {
        return `Ошибка!`;
    } else {
        const Nstr = [...str];
        return Nstr.reverse().join('');
    }
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let arrN = [...arr];

    if (arrN.length === 0) {
        return `Нет доступных валют`;
    } else {
        let result = 'Доступные валюты:\n';
        for (let value of arrN) {
            if (value === missingCurr) {
                continue;
            } 
            result += `${value}\n`;
        }
        return result;
    }
}
availableCurr(['UAH','CNY', 'RUB', 'CNY'], 'CNY');


////////////////////////////////////////
ЦИКЛ В ЦИКЛЕ

for (let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++){
        console.log(j);
    }
}


//вывод звездочек
let result = '';
let length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++){
        result+= '*';
    }
    result+= '\n';
}

console.log(result);


//прерывание цикла с меткой
first: for (let i = 0; i < 3; i++) {
    console.log(`first: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`second: ${j}`);
        for(let k = 0; k < 3; k++){
            if (k === 2) continue first;
            console.log(`third: ${k}`);
        }
    }
}


///////////////////////////////////////////////
ЗАДАЧИ ПРО ЦИКЛЫ
// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11 ; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 9 ; i--) {
        if (i === 13)break;
            console.log(i);
    }    
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i < 11 ; i++) {
        if (i % 2 === 0){
            console.log(i);
        }
    }
}

// Место для четвертой задачи

function fourthTask() {
    let i = 2
    while (i < 16) {
        ++i;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    } 
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i < 11 ; i++) {
        arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    
    
    // Не трогаем
    return arrayOfNumbers;
}


/////////////////////////////////////////////////////////
ЕЩЕ ЗАДАЧИ ПРО ЦИКЛЫ

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = arr.slice();
    console.log(result);//для себя

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length ; i++) {
        if (typeof(data[i]) === "number"){
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === "string") {
            data[i] = data[i] + ' - done';
        }
    }
    console.log(data);//для себя
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = data.reverse();
    console.log(data);
    
    
    // Не трогаем
    return result;
}


/////////////////////////////////////////////////////////
ВЫВОД ЗВЕЗДОЧЕК - ПИРАМИДА

const lines = 4;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);





///////////////////////////////////////////////////////////
ВАЖНОСТЬ RETURN


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));





////////////////////////////////////////////////////////
ЗАДАЧИ ПО ФУНКЦИЯМ 27


// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`
}

// Место для второй задачи
function returnNeighboringNumbers(a) {
    let b = a - 1;
    let c = a + 1;
    return [b, a, c];
}
console.log(returnNeighboringNumbers(5));//для себя

// Место для третьей задачи
function getMathResult(a, b) {
    str = '';
    if (typeof(b) === 'string' || b !== Math.abs(b) || b === 0) {
        return a;
    }
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        for (let i = 0; i < b ; i++) {
            str += (a * (i + 1)) + "---";
        }
        return str.slice(0, -3);
    }
}

console.log(getMathResult(5, 3));






////////////////////////////////////////////////////////
ЗАДАЧИ ПО ФУНКЦИЯМ 29

// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
        return `При вычислении произошла ошибка`;
    } else {
        let s = 6 * a * a;
        let v = a * a * a;
        return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
    }
}
console.log(calculateVolumeAndArea(5));


// Место для второй задачи
function getCoupeNumber(a) {
    if (typeof(a) === 'number' && (a ^ 0) === a && a > 0 && a <= 36) {
        for (let i = 4; i <= 36; i = i + 4) {
            if (a <= i) {
                return Math.ceil(i / 4);
            }
        }
    }
    if (typeof(a) === 'number' && (a ^ 0) === a && (a === 0 || a > 36)) {
        return `Таких мест в вагоне не существует`
    } else {
        return `Ошибка. Проверьте правильность введенного номера места`
    }
}
console.log(getCoupeNumber(5));





////////////////////////////////////////////////////////
ЗАДАЧИ ПО ФУНКЦИЯМ 29 (2)


// Место для первой задачи
function getTimeFromMinutes(a) {
    let hour;
    let h = Math.floor(a / 60);
    let m = a - (h * 60);

    if (typeof(a) === 'string' || !Number.isInteger(a) || a !== Math.abs(a)) {
        return `Ошибка, проверьте данные`;
    }

    if (h >= 1 && h < 2) {
        hour = `час`;
    } else if (h >= 2 && h <= 4) {
        hour = `часа`;
    } else {
        hour = `часов`;
    }

    return `Это ${h} ${hour} и ${m} минут`;
}
console.log(getTimeFromMinutes(-100));


// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        const arr = [a, b, c, d];
        return Math.max(...arr);
    }
}
console.log(findMaxNumber(1, 3242, 423, 2342));


//////////////////////////////////////////////////////
ФИБОНАЧЧИ
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}
console.log(fib(5));





///////////////////////////////////////////////////////
СОЗДАНИЕ ПРОТОТИПА ОБЪЕКТА


//1 способ: (устаревший)
john.__proto__ = soldier;

//2 способ:
Object.setPrototypeOf(john, soldier);

//3 способ:
const john = Object.create(soldier);





///////////////////////////////////////////////////////
37 1 Продвинутая задача на работу с объектами и массивами

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let s = 0;
    let v = 0;

    data.shops.forEach( shop => {
        s += shop.width * shop.length;
    });

    v += s * data.height;

    if (data.budget >= v * data.moneyPer1m3) {
        return 'Бюджета достаточно';
    } else {
        return'Бюджета недостаточно';
    }
}
isBudgetEnough(shoppingMallData);


///////////////////////////////////////////////////////
37 2  Продвинутая задача на работу с объектами и массивами

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const command = [];
    let size = 3; 
    let lenghtArr = arr.length - (Math.floor(arr.length / size)) * size;
    let rest = '';
    
    for (let i = 0; i < Math.floor(arr.length / size); i++) {
        command[i] = arr.slice((i*size), (i*size) + size);
    }

    if (lenghtArr === 0) {
        rest = `-`;
    } else if(lenghtArr === 1) {
        rest = arr.slice(-lenghtArr);
    } else if (lenghtArr === 2) {
        rest = arr.slice(-lenghtArr).join(', ');
    }

    let str = `Оставшиеся студенты: ${rest}`;
    command.push(str);
    console.log(command);
    return command;

}
sortStudentsByGroups(students);


//решение автора
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);





/////////////////////////////////////////////////////
Динамическая типизация в JS

//toString:
1///метод String
console.log(typeof(String(null)));
console.log(typeof(String(4)));

2///сложение со строкой
console.log(typeof(5 + ''));


//toNumber:
1///метод Number
console.log(typeof(Number('4')));

2///Унарный +
console.log(typeof(+'4'));

3///метод parseInt
console.log(typeof(parseInt('15px', 10)));//10 - десятичная система


//toBoolean
1///Всегда false:
0, '', null, undefined, NaN

2//метод Boolean
console.log(typeof(Boolean(4)));

3//двойное отрицание
console.log(typeof(!!'4444'));





/////////////////////////////////////////////////////////
40. Замыкание и лексическое окружение

let number = 5; debugger

function logNumber() {
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber();





//////////////////////////////////////////////////////////

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);