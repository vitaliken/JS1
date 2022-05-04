//Событие при касании по элементу
//touchstart

//Движение пальца при касании по нему
//touchmove

//Событие, когда убираешь палец с элемента
//touchend

//Событие, когда палец зашел на пределы элемента
//touchenter

//Событие, когда палец ушел за пределы элемента
//touchleave

//Событие, когда палец ушел за пределы браузера
//touchcancel


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        //отменяем дефолтное поведение на всяк случай
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);//см внизу touches
        
    });

    box.addEventListener('touchend', (e) => {
        //отменяем дефолтное поведение на всяк случай
        e.preventDefault();

        console.log('end');
    });
});



//свойства при работе с сенсорными устрройствами:
//Список всех пальцев, который сейчас взаимодействуют с экраном:
//touches

//Список всех пальцев, который сейчас взаимодействуют с элементом:
//targetTouches

//Список всех пальцев, которые участвуют в текущем событии:
//changedTouches