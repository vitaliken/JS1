'use strict';

//выполняем действие, только если предыдущее действие уже было выполнено

// //синхроннный код
// console.log('Запрос данных');

// //асинхроннный код
// setTimeout(() => {
//     console.log('Подготовка данных');

//     const product = {
//         name: 'TV',
//         price: 2000,
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);

// }, 2000);



//////////////////////////ИСПОЛЬЗОВАНИЕ ПРОМИСОВ:
// console.log('Запрос данных');

// //Создаем промис, внутри нее callback ф
// //resolve - обещание выполнилось(успех)
// //reject - обещание не выполнилось
// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных');
    
//         const product = {
//             name: 'TV',
//             price: 2000,
//         };
    
//         resolve(product);//будет передаваться как аргуменд для req.then
//     }, 2000);
// });

// //метод, который выполняется на промисе в случае успеха
// //принимает как аргумент данные из строки "resolve(product)""
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('finally');
// })









//////////////////////////ИСПОЛЬЗОВАНИЕ ПРОМИСОВ:
///метод all и race

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });


let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise
  
    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve((console.log("done"))), 1000);
  });