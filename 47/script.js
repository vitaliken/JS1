//возведение в степень без рекурсии:

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// pow(2, 1);
// pow(2, 2);
// pow(2, 3);
// pow(2, 4);

// console.log(pow(2, 4));




//Рекурсия - прием, когда функция вызывает сама себя:
//возведение в степень рекурсией:
function pow(x, n) { // n - глубина рекурсии - общее кол-во вложенных вызовов вместе с первым
    if (n === 1) { //база рекурсии - когда следует остановиться
        return x;
    } else {
        return x * pow(x, n - 1); //шаг рекурсии - запуск ф с другим значением
    }
}
// console.log(pow(2, 11));




//Нахождение среднего прогресса с помощью цикла или рекурсии
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

//с помощью цикла:
// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subcourse of Object.values(course)) {
//                 students += subcourse.length;

//                 for (let i = 0; i < subcourse.length; i++) {
//                     total += subcourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));





// с помощью рекурсии:
function getTotalProgressByRecursion(data) {
    //базой будет что-то, что мы проверяем на массив
    if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        total += data[i].progress;
    }
    
    return [total, data.length];
    } else {
        let total = [0, 0];
        //запуск рекурсии перебора, пока не наткнемся на базовый случай
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);





//Написать ф которая вычисляет факториал
function factorial(n) {
    if (typeof(n) === 'string' || (n ^ 0) !== n) {
        return `Дробное число или не число`;
    } else if (n <= 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(7));