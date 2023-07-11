'use strict';

let getNumbSquare = num => num ** 2;
let numbDevideTwo = num => num / 2;

let arrayNumb = [2,4,6,8,10];

function copyArrNumbs(arr, callback) {
    let newArrNumb = [];

    for(let i = 0; i < arr.length; i++) {
        newArrNumb.push(callback(arr[i]))
    }

    return newArrNumb;

    // console.log(`Text after Return`);// code after return not active
}

// -------- Рекурсия функції -----------

let factorialNumb = numb => {
    if(numb === 0) return 1;
    return numb * factorialNumb(numb - 1);
}

console.log(factorialNumb(5));

// ----------------------------------------

console.log(copyArrNumbs(arrayNumb, getNumbSquare));
console.log(copyArrNumbs(arrayNumb, numbDevideTwo));
console.log(copyArrNumbs([1,2,3], factorialNumb));

