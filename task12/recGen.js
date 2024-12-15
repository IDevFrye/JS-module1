'use strict';

const ARRAY_TEST = [];
const LOWER_LIMIT = 0;
const UPPER_LIMIT = 10;

function checkSum(arr) {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  return sum >= 50;
}

function pushRandom(arr) {
  if (!Array.isArray(arr)) {
    return 'Вы ввели не массив!';
  }
  if (checkSum(arr)) {
    return arr;
  }
  const newNumb = Math.floor(
    Math.random() * (UPPER_LIMIT - LOWER_LIMIT + 1),
  ) + LOWER_LIMIT;
  arr.push(newNumb);
  return pushRandom(arr);
}

console.log(pushRandom(ARRAY_TEST));
console.log(pushRandom({}));
