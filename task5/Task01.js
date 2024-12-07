'use strict';

const EURO_TO_USD = 1.2;
const USD_TO_RUB = 64;

function convertEuros(cash) {
  if (typeof cash !== "number") {
    return "Вы ввели не число(а)!";
  }
  
  if (cash < 0) {
    return "Вы ввели отрицательное значение!";
  }

  return `Стоимость покупки в рублях: ${(cash * EURO_TO_USD * USD_TO_RUB).toFixed(2)} руб.`;
}

// Тестовый запуск
console.log(convertEuros(-1));
console.log(convertEuros(10));
console.log(convertEuros(5.67));
console.log(convertEuros([]));