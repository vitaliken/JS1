//стандартная версия
// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000);


//версия с исп аргумента
// const timerId = setTimeout(function(text) {
//     console.log(text);
//   }, 2000, 'Hi');


// //версия с передачей функции
// const timerId = setTimeout(logger, 2000);
// //сброс таймера timerId:
// clearInterval(timerId);

// function logger() {
//     console.log('Text');
// }

//--------------------------------------------------------

// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);

// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Text');
//     i++;
// }

//рекурсивный setTimeout - помогает избежать нюанса, если ф 
//выполняется дольше, чем наступит след вызов функции
// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500)
// }, 500);




//---------------------------------------------------------------
//анимация с помощью setInterval
const btn = document.querySelector('.btn');
let timerId;
let i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
};

btn.addEventListener('click', myAnimation);