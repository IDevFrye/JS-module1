'use strict';

{
  const RATES = [13, 20, 30];
  const LOWER_LIMIT = 15000;
  const UPPER_LIMIT = 50000;

  const income = parseFloat(prompt("Задача 4_5. Введите свой чистый доход: "));

  if (!isNaN(income) && income >= 0) {
    let tax;
    if (income < LOWER_LIMIT) {
      tax = Math.trunc(income * (RATES[0] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[0]}%). Зарплата составит: ${income - tax} руб.`);
    } else if (income >= LOWER_LIMIT && income <= UPPER_LIMIT) {
      tax = Math.trunc(income * (RATES[1] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[1]}%). Зарплата составит: ${income - tax} руб.`);
    } else {
      tax = Math.trunc(income * (RATES[2] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[2]}%). Зарплата составит: ${income - tax} руб.`);
    }
  } else {
    console.warn("Вы ввели некорректные данные!");
  }
}