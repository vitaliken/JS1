'use strict';

const persone = {
    name: 'Alex',
    tel: '+375290000000',
    parents: {
        mom: 'Olga',
        dad: 'Semen'
    }
};

//перевести JSON в строку
console.log(JSON.stringify(persone));

//перевести строку в JSON
console.log(JSON.parse(JSON.stringify(persone)));

//сделать глубокую копию объекта
const clone = JSON.parse(JSON.stringify(persone));
console.log(clone);