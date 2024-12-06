'use strict';

{
  const RATES = [13, 20, 30];
  const LOWER_LIMIT = 15000;
  const UPPER_LIMIT = 50000;

  const income = parseFloat(prompt("Задача 4_6. Введите свой чистый доход: "));

  if (!isNaN(income) && income >= 0) {
    let tax;
    if (income < LOWER_LIMIT) {
      tax = Math.trunc(income * (RATES[0] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[0]}%).
        Зарплата составит: ${income - tax} руб.`);
    } else if (income >= LOWER_LIMIT && income <= UPPER_LIMIT) {
      tax = Math.trunc(LOWER_LIMIT * (RATES[0] / 100) + (income - LOWER_LIMIT) * (RATES[1] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[0]}% на доход до 15000 руб., ${RATES[1]}% на доход от 15000 до 50000 руб.).
        Зарплата составит: ${income - tax} руб.`);
    } else {
      tax = Math.trunc(LOWER_LIMIT * (RATES[0] / 100) + (UPPER_LIMIT - LOWER_LIMIT) * (RATES[1] / 100) + (income - UPPER_LIMIT) * (RATES[2] / 100));
      console.log(`Сумма НДФЛ: ${tax} руб. (при процентной ставке ${RATES[0]}% на доход до 15000 руб., ${RATES[1]}% на доход от 15000 до 50000 руб., ${RATES[2]}% на доход от 50000 руб.).
        Зарплата составит: ${income - tax} руб.`);
    }
  } else {
    console.warn("Вы ввели некорректные данные!");
  }
}