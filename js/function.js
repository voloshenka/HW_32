'use strict';
// helloUserMessage();
// ----------------- Function ----------------

// 1) Function Declaration -  об'9ява функції
// 2) Function expression -  функціональний вираз
// 3) Arrow Function -  стрілкова функція

// 1) Function Declaration ------------

// function name(params) {block}

function helloUserMessage() {    // - створення функції
    alert(`Hello Student!!!`);
}

// helloUserMessage(); // - виклик функції

let btnHello = document.querySelector('#btn_hello');
let btnSum = document.querySelector('#btn_sum');
let btnLimitNumb = document.querySelector('#btn_limit');
let blockSumResult = document.querySelector('.sum');

btnHello.addEventListener('click', helloUserMessage);
btnSum.addEventListener('click', getNumbAndSum);

function getNumbAndSum() {
    let numb_1 = +prompt('Enter first number');
    let numb_2 = +prompt('Enter second number');

    let sum = numb_1 + numb_2;

    let body = blockSumResult.innerHTML = `<p>${sum}</p>`;
}

// getNumbAndSum();

function getDomElement() {
    let btnHello = document.querySelector('#btn_hello');
    console.log(btnHello);
}

// getDomElement();
// console.log(btnHello);


function sumNumber(numb_1, numb_2) {
    let sum = numb_1 + numb_2;
    return sum;
}

// console.log(sumNumber(1,7));
// console.log(sumNumber(5,7));
// console.log(sumNumber(1100,7));

function getSetOfNumbs(userLimitNumb) {
    userLimitNumb = +prompt(`Enter limit number`)
    for(let i = 0; i <= userLimitNumb; i++) {
        console.log(i);
    }
}

btnLimitNumb.addEventListener('click', getSetOfNumbs)

// let userLimitNumb;

// 2) Function Espression --------------

// sum_2(); - робити не можна

// let sum_2 = function() {
//     let numb_3 = 5;
//     let numb_4 = 3;

//     console.log(numb_3 + numb_4);
// }


// let newSum_2 = sum_2;
// console.log(newSum_2);
// newSum_2();
// sum_2();

// console.log(newSum_2 === sum_2);

// 3) Arrow Function (стрілкова функція) ------------

let multiply = function(numb_5, numb_6) {
    return numb_5 * numb_6;
}

let multiply_2 = (numb_5, numb_6) => numb_5 * numb_6;


// console.log(multiply(2, 4));
// console.log(multiply_2(2, 4));

// 4) Самовикликаюча функція ---------------

let multiply_3 = ((numb_5 = 10, numb_6 = 8) => numb_5 * numb_6)(5, 3);

// console.log(multiply_3);

// 5) Работа з аргументами -------------


// let multiply_4 = ((numb_5 = 10, numb_6 = 8) => numb_5 * numb_6)(5, 3);

function sum_3(...args) {
    let sum = 0;

    console.log(args.length);

    for(let i = 0; i < args.length; i++) {
        sum += (args[i]);
    }

    console.log(sum);
}

sum_3(1,2);
sum_3(1,2,10,100);
sum_3(1,2,'500',1000);
sum_3();