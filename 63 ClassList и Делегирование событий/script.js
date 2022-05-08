const btns =  document.querySelectorAll('button');

//Узнать кол-во классов у элемента
// console.log(btns[0].classList.length);

//узнать имя [1] класса у элемента 
// console.log(btns[0].classList.item(1));

//Добавить класс или классы
// console.log(btns[0].classList.add('red', 'fsgds'));

//Удалить класс или классы
// console.log(btns[0].classList.remove('blue'));

//Добавить/удалить если нету/есть среди текущих классов
// console.log(btns[0].classList.toggle('blue'));

//проверить наличие определенного класса
// btns[1].classList.add('red', 'fsgds');

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// };




//задать класс по условию и клику
btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    //или
    // btns[1].classList.toggle('red');
});











// Делегирование событий - назначение функции на родителя, 
// где к потомкам применяется функция
const wrapper = document.querySelector('.btn-block');

//просто клик по кнопкам
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('hello');
    }
})

//клик по кнопке с классом blue
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('hello');
//     }
// })



//создание динамического контента на странице
//доб новую кнопку и к ней применяются методы с кода выше
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);