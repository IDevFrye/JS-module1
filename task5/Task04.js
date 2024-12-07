'use strict';

const UPPER_LIMIT = 30000;
const FIRST_DISCOUNT = 0.03;
const SECOND_DISCOUNT = 0.15;
const PROMO1_DISCOUNT = 0.1;
const PROMO2_DISCOUNT = 500;
const UPPER_PROMO2 = 2000;

function calculate(sum = 0, itemsCount = 0, promo = "") {
  if (typeof sum !== "number" || typeof itemsCount !== "number" || typeof promo !== "string") {
    return "Вы ввели некоректные входные значения!"
  }

  if (sum < 0 || itemsCount < 0) {
    return "Вы ввели отрицательные входные значения!"
  }

  let totalSum = sum;
  
  if (itemsCount > 10) {
    totalSum -= totalSum * FIRST_DISCOUNT; // Первая скидка
  } 

  if (totalSum > UPPER_LIMIT) {
    const discount = (totalSum - UPPER_LIMIT) * SECOND_DISCOUNT; // Вторая скидка
    totalSum -= discount;
  } 

  switch (promo) {
    case "METHED":
      totalSum -= totalSum * PROMO1_DISCOUNT; // Первая скидка по промокоду
      break;
    case "G3H2Z1":
      totalSum = totalSum > UPPER_PROMO2 ? totalSum -= PROMO2_DISCOUNT : totalSum; // Вторая скидка по промокоду
      break;
    default:
      console.log(`> Промокод ${promo} отсутствует. Скидка по нему не прошла!`)
      break;
  }

  return `Итоговая стоимость покупки: ${totalSum.toFixed(2)} руб.`;
}

// Тестовый запуск
console.log(calculate(50594.90, 12, "METHED"));
console.log(calculate(20500.50, 9, "G3H2Z1"));
console.log(calculate("50000", 14, "METHED"));
console.log(calculate(50000, "asdsa", ""));
console.log(calculate(50000, -14, "METHED"));
console.log(calculate(50000, 14, "METHE"));