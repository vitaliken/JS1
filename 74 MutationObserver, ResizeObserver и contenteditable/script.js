'use strict';

const box = document.querySelector('.box');

//выводим в консоль, если что-то вводим в элемент
let observer = new MutationObserver(MutationRecord => {
    console.log(MutationRecord);
});

observer.observe(box, {
    childList: true
});