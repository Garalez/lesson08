'use strict';

const leapYear = (yearMin, yearMax) => {
  let yearArr = [];
  for (let i = yearMin; i < yearMax; i++) {
    if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
      yearArr.push(i);
    } 
  }
  for (let i = yearMax; i < yearMin; i++) {
    if ((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0)) {
      yearArr.push(i);
    } 
  }
  return yearArr;
}

console.log(leapYear(-200, 100));