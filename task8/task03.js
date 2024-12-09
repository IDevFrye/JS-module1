'use strict';

//Вариант 1. Фильтрация массива
function generateRandomArray(len, n, m, opt = '') {
  if (typeof len !== "number" || len <= 0 || !Number.isInteger(len)) {
    return "Вы ввели невалидное число для длины массива!";
  }

  if (typeof n !== "number" || typeof m !== "number") {
    return "Вы ввели невалидное число для диапазона!";
  }

  if (typeof opt !== "string") {
    return "Вы ввели невалидное слово для параметра четности!";
  }

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let randomArr = Array(len).fill(0);

  randomArr.forEach((_, index) => {
    randomArr[index] = Math.floor(Math.random() * (max - min + 1)) + min;
  });

  if (opt !== '') {
    const parity = opt === 'even' ? 0 : 1;
    randomArr = randomArr.filter(item => item % 2 === parity);
  }

  return randomArr;
}

//Вариант 2. Фиксированная длина массива
function generateRandomArray2(len, n, m, opt = '') {
  if (typeof len !== "number" || len <= 0 || !Number.isInteger(len)) {
    return "Вы ввели невалидное число для длины массива!";
  }

  if (typeof n !== "number" || typeof m !== "number") {
    return "Вы ввели невалидное число для диапазона!";
  }

  if (typeof opt !== "string") {
    return "Вы ввели невалидное слово для параметра четности!";
  }

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let randomArr = [];

  while (randomArr.length < len) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (opt === 'even' && randomNum % 2 === 0) {
      randomArr.push(randomNum);
    } else if (opt === 'odd' && randomNum % 2 !== 0) {
      randomArr.push(randomNum);
    } else if (opt === '') {
      randomArr.push(randomNum);
    }
  }

  return randomArr;
}

// Тестовый запуск
console.log(generateRandomArray(10, 5, 7, 'even'));
console.log(generateRandomArray(5, 115, 15, 'odd'));
console.log(generateRandomArray(15, -15, 10, 'odd'));
console.log(generateRandomArray(15, -15, 10));
console.log(generateRandomArray('test', 10, 15, 'even'));
console.log(generateRandomArray(13, 'dsd', 15));
console.log(generateRandomArray(10, 2, 15, 34));

console.log(generateRandomArray2(10, 5, 7, 'even'));
console.log(generateRandomArray2(5, 115, 15, 'odd'));
console.log(generateRandomArray2(15, -15, 10, 'odd'));
console.log(generateRandomArray2(15, -15, 10));
console.log(generateRandomArray2('test', 10, 15, 'even'));
console.log(generateRandomArray2(13, 'dsd', 15));
console.log(generateRandomArray2(10, 2, 15, 34));