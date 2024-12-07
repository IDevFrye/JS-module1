'use strict';

function getMinNumber(first, second) {
  return `Минимальное число из пары (${first}, ${second}) = ${(first + second - Math.abs(first - second)) / 2}`;
}

// Тестовый запуск
console.log(getMinNumber(1, 19));
console.log(getMinNumber(21, 19));
console.log(getMinNumber(-1, -19));