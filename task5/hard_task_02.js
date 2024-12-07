'use strict';

function getMinNumber(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    return "Вы ввели не число(а)!";
  }

  return `Минимальное число из пары (${first}, ${second}) = ${(first + second - Math.abs(first - second)) / 2}`;
}

// Тестовый запуск
console.log(getMinNumber(1, 19));
console.log(getMinNumber(21, 19));
console.log(getMinNumber(-1, -19));
console.log(getMinNumber(1, {}));