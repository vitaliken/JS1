'use strict';

//Создание рег выражения, старый вариант:
// new RegExp('pattern', 'flags');

//Создание рег выражения, актуальный вариант:
// /pattern/f

//                               ФЛАГИ
// i - игнор регистра
// g - найти несколько вхождений
// m -иногострочный режим



//поиск первой попавшейся буквы n
// const ans = prompt('Введите ваше имя');
// const reg = /n/i;
// console.log(ans.search(reg));

//---------------

//поиск всех букв n
// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(ans.match(reg));

//---------------

//замена n на что-либо
// const pass = prompt('Password');
// /./ - берем все элементы которые попадут в строку
// '*' - заменяем их на звездочки
// console.log(pass.replace(/./g, '*'));

// console.log('12-34-45'.replace(/-/g, ':'));

//---------------

//выведет true\false если найдет\не найдёт n
// const ans = prompt('Введите ваше имя');
// const reg = /n/i;
// console.log(reg.test(ans));






//                           КЛАССЫ
// \d - ищем все цифры
// \D - ищем все не цифры
// \w - ищем все буквы
// \W - ищем все не буквы
// \s - ищем все пробелы

// const ans = prompt('Введите ваше число');
// const reg = /\d/g;
// console.log(ans.match(reg));

//---------------

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));