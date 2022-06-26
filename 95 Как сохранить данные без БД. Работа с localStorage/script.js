'use strict';

//Записать новый ключ
// localStorage.setItem('number', 5);

//Получить ключ
// console.log(localStorage.getItem('number'));

//Удалить ключ
// localStorage.removeItem('number', 5);
// console.log(localStorage.getItem('number'));

//Очистить хранилище
// localStorage.clear();



//////////////////////////////////////////////////
const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} 





checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: '25',
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));
