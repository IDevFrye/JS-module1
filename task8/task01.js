'use strict';

function generateRandomArray(len) {
  if (typeof len !== "number" || len <= 0 || !Number.isInteger(len)) {
    return "Вы ввели невалидное число для длины массива!";
  }

  let randomArr = Array(len).fill(0);
  randomArr.forEach((_, index) => {
    randomArr[index] = Math.floor(Math.random() * 100) + 1;
  });

  return randomArr;
}

// Тестовый запуск
console.log(generateRandomArray(5));
console.log(generateRandomArray(15));
console.log(generateRandomArray('test'));