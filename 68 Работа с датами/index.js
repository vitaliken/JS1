'use strict';

//получить текущую дату
const now = new Date();
console.log(now);


//получить год
console.log(now.getFullYear());

//получить месяц
console.log(now.getMonth());

//получить день
console.log(now.getDate());

//получить номер дня недели, где воскресенье - это 0.
console.log(now.getDay());



// ---------------------------------------------------
//получение разницы ммежду часовым поясом и UTC в минутах
console.log(now.getTimezoneOffset());

//кол-во мс прошедших с 1 января 1970 года:
console.log(now.getTime());



//-----------------------------------------------------
//установка времени:
console.log(now.setHours(40));
console.log(now);




//-----------------------------------------------------
//вычисление времени с помощью мс
let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
};

let end = new Date();

console.log(`Цикл отработал за ${end - start} мс`);