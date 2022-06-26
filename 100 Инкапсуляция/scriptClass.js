'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    say() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
        
    }
}

const ivan = new User('Ivan', 23);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say();