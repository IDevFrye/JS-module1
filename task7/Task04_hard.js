'use strict';

const allСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

function getAveragePriceGoods(arr){
  if (!Array.isArray(arr)) {
    return "Вы передали не массив!";
  }

  if (arr.length === 0) {
    return "Вы передали пустой массив!";
  }

  let totalSum = 0, totalCount = 0;
  for (const [quantity, price] of arr) {
    totalSum += price;
    totalCount += quantity;
  }

  if (totalCount === 0) {
    return "Количество товаров равно нулю!";
  }

  return `Средняя стоимость товара = ${(totalSum / totalCount).toFixed(2)} руб.`;
}

// Тестовый запуск
console.log(getAveragePriceGoods(allСashbox));
console.log(getAveragePriceGoods([[2, 100],[3, 300],[2, 700]]));
console.log(getAveragePriceGoods([[0, 120],[0, 300],[0, 400]]));
console.log(getAveragePriceGoods([]));
console.log(getAveragePriceGoods({}));