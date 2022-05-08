"use strict";





// 17 Сложная задача на вычисление количества страниц

function amountOfPages(summary){
    let pageString = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        pageString += i;
        if (pageString.length === summary) {
            n = i;
            break;
        };
    };

    console.log(n);
    return n;
}


amountOfPages(5);//5
amountOfPages(25);//17
amountOfPages(1095);//401
amountOfPages(185);//97









//18 Сложная задача на работу со строками

function isPangram(string) {
    string = string.toLowerCase();
    

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));