'use strict';

// 1
// В обычной функции, this = window
// но с 'use strict' = undefined

// function showThis(a, b) {
//     console.log(this);//undefined || window
//     function sum() {
//         console.log(this);//undefined || window
//         return a + b;
//     }
//     console.log(sum());
// };
// showThis(4, 5);


//-------------------------------------------------------------


//2 
// Контекст у метода объекта - сам объект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     },
// };
// obj.sum();


//-------------------------------------------------------------


//3 
// this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name)
//     };
// };
// let ivan = new User('Ivan', 23);


//-------------------------------------------------------------


//4
// Ручное присвоение контекста: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };

// const user = {
//     name: 'John'
// };

// //1 способ:
// sayName.call(user, 'Smith');

// //2 способ:
// sayName.apply(user, ['Smith']);

// //3 способ (создаёт новую функцию):
// function count(num) {
//     return this * num;
// };

// const double = count.bind(2);//"2" становится this-ом
// console.log(double(3));
// console.log(double(13));


//----------------------------------------------------


const btn = document.querySelector('button');

//контекстом вызова будет сам элемент на котором произошло событие
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
}); 


//----------------------------------------------------

// У стрелочной ф нет своего контекста вызова, поэтому
// она берет контекст у своего родителя
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();//получаем объект (как в 3 способе)


//-----------------------------------------------------
//еще пример

const double = a => a * 2;
console.log(double(3))