'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
};

//этот класс будет наследоваться от класса Rectangle:
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);//вызывает суперконструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}


const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);


console.log(square.calcArea());
console.log(long.calcArea());

//ПРИНЦИПЫ ООП
// 1. Абстракция - отделяем концепцию от её экземпляра
// 2. Наследование - способность объекта базироваться на другом оъекте или классе


const div = new ColoredRectangleWithText(25, 10, 'Hello Worls', 'red');
div.showMyProps();
console.log(div.calcArea());