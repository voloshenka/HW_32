'use strict';

//--1. Напиши всі можливі варіанти створення функцій.--//
// 1) Function Declaration -  об'ява функції
/*function sayHello() {
  alert ('Hello!')
}
// 2) Function expression -  функціональний вираз

let sayHello = function(){
  alert ('Hello!')
}

// 3) Arrow Function -  стрілкова функція

hello = () => {
  return "Hello!";
}
*/

//--2. Створи функцію, яка буде виводити кількість переданих їй аргументів.--//
/*function numArgumants() {
  let i = prompt ('Введите произвольное количество чисел', "")
  console.log(i.length);
}
numArgumants();
*/
//--3.--//
/*function writeNumbersAndCompare() {
  let numb_1 = +prompt('Укажите первое число', );
  let numb_2 = +prompt('Укажите второе число', );

  if (numb_1 < numb_2){
    alert ('-1') ;
  } else
  if (numb_1 > numb_2){
    alert ('1') ;
  } else
  if (numb_1 = numb_2){
    alert ('0') ;
  }
  else {
    alert ('Случилось непоправимое');
  }
}
writeNumbersAndCompare();*/
//--4--//
let factorialNumb = numb =>{
  if (numb ===0) return 1;
  return numb * factorialNumb(numb - 1);
}
console.log(factorialNumb(12))
//--5--//
//let areaCalculation = 
//----//
//----//
//----//
//----//