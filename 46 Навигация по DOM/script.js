//получить тег head:
// console.log(document.head);

//вся HTMLка со всем содержимым:
// console.log(document.documentElement);




//получить узлы, которые являются детьми body

//получим псевдомассив всех узлов:
// console.log(document.body.childNodes);
//аналог, получающий элементы:
for (let node of document.body.childNodes){
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node)
};

//получить первый узлел:
// console.log(document.body.firstChild);
//аналог, получающий элемент:
// console.log(document.body.firstElementChild);

//получить последний узлел:
// console.log(document.body.lastChild);
//аналог, получающий элемент:
// console.log(document.body.lastElementChild);






//получить родителя элемента #current:
// console.log(document.querySelector('#current').parentNode);
//аналог, получающий элемент:
// console.log(document.querySelector('#current').parentElement);

//получить прородителя элемента #current:
// console.log(document.querySelector('#current').parentNode.parentNode);
//аналог, получающий элемент:



//Data атрибуты. data-чтонить

//получение data-current="3":
// console.log(document.querySelector('[data-current="3"]'));

//получение след за data-... ноды:
// console.log(document.querySelector('[data-current="3"]').nextSibling);
//аналог, получающий элемент:
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

//получение ноды перед data-...:
// console.log(document.querySelector('[data-current="3"]').previousSibling);
//аналог, получающий элемент:
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

