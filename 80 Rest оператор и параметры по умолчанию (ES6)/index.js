

//...rest собирает необязательный аргументы в массив 
// и выводит их массивом
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('1', '2', '3', '4', '5');





//параметры по умолчанию
function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
};

calcOrDouble(3);