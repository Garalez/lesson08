'use strict';

const numbers = (count, numberMin, numberMax) => {
  let arr = [];
  
  for ( let i = 0; i < count; i++) {
    arr.push (Math.floor(Math.random() * (Math.max(numberMin, numberMax) - Math.min(numberMin, numberMax) + 1)) + Math.min(numberMin, numberMax));
  }
  return arr;
}

console.log(numbers(100, -10, 11));