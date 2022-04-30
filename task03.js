'use strict';

const numbers = (count, numberMin, numberMax, numberEvenOdd) => {
  let arr = [];
  const min = Math.min(numberMin, numberMax);
  const max = Math.max(numberMin, numberMax);

  for ( let i = 0; i < count; i++) {
    arr.push (Math.floor(Math.random() * (max - min + 1)) + min);
    if(numberEvenOdd === 'even' && arr[i] % 2 !== 0){
      arr[i]=arr[i]+1;      
    } else if (numberEvenOdd === 'odd' && arr[i] % 2 === 0) {
      arr[i]=arr[i]-1;
    }
  } 
  return arr;
}

console.log(numbers(100, -10, 11, 'even'));
