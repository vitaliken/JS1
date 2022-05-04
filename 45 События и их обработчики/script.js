// 3 способа назначения обработчика события:

// 1 использовать HTML атрибут
//в атрибут сможем передать ф из js
// onclick = "alert('hi')" 

// 2 использовать св-ва DOM дерева для событий
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// }

// добавление обработчика событий
// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

//добавление объекта событий
//btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
// });


//Удалить обработчик событий
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // e.target.remove();
    // i++;
    // if (i = 1) {
    //     btn.removeEventListener('click', (deleteElement));
    // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);





//Изменение стандартного поведения браузера
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});




//применить один обработчик на несколько элементов
//которые лежат в псевдомассиве
// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });





//Опции события
//например, что б сработало только 1 раз
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});