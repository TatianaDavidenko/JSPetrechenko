'use strict';
// Home work 27
////////////////////////
function sayHello(nameUser) {
  return console.log(`Привет, ${nameUser}`);
}
sayHello('Антон');

////////////////////////

function returnNeighboringNumbers(num) {
  return console.log([num - 1, num, num + 1]);
}
returnNeighboringNumbers(11);

//////////////////////

function getMathResult(num, times) {
  if (typeof (times) !== 'number' || times <= 0) {
    return console.log(num);
  }
  let str = '';
  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += num * i;
    } else {
      str += num * i + '---';
    }
  }
  return console.log(str);
}

getMathResult(5,3);