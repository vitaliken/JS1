'use strict';

const app = '123';

const number = 1;

//анонимная самовызывающаяся функция
//это функц выражение, а не объявление функции
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('я приватная');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();