'use strict';

function generateRandomArray(len, n, m) {
  if (typeof len !== "number" || len <= 0 || !Number.isInteger(len)) {
    return "Вы ввели невалидное число для длины массива!";
  }

  if (typeof n !== "number" || typeof m !== "number") {
    return "Вы ввели невалидное число для диапазона!";
  }

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let randomArr = Array(len).fill(0);

  randomArr.forEach((_, index) => {
    randomArr[index] = Math.floor(Math.random() * (max - min + 1)) + min;
  });

  return randomArr;
}

// Тестовый запуск
console.log(generateRandomArray(10, 5, 7));
console.log(generateRandomArray(5, 115, 15));
console.log(generateRandomArray(15, -15, 10));
console.log(generateRandomArray('test', 10, 15));
console.log(generateRandomArray('test', 'dsd', 15));