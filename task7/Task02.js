'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(arr) {
  if (!Array.isArray(arr)) {
    return "Вы передали не массив!";
  }

  if (arr.length === 0) {
    return "Вы передали пустой массив!";
  }

  let sum = 0;
  let count = arr.length;
  for (const value of arr) {
    sum += value;
  }

  return `Среднее значение = ${Math.floor(sum / count)}`;
}

// Тестовый запуск
console.log(getAverageValue(allСashbox));
console.log(getAverageValue([45.3, 48]));
console.log(getAverageValue({}));
console.log(getAverageValue([]));