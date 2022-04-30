'use strict';

const numbers = (number) => {
  let arr = [];
  
  for ( let i = 0; i < number; i++) {
    arr.push(1 + Math.round(Math.random() * 99));
  }
  return arr;
}

console.log(numbers(100));