'use strict';

// оптимальное решение, т.к. О(sqrt(n)), перебор делаем только до корня проверяемого числа
function isPrime(numb) {
  if (typeof numb !== "number") {
    return "Вы ввели не число!";
  }

  if (numb < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numb); i++) { 
    if (numb % i == 0) {
      return false;
    }
  }
  return true;
}

/* неоптимальное решение, т.к. О(n), перебор делаем только до проверяемого числа (бессмысоленно),
   до половины i < numb/2 оптимальнее, но также не лучший вариант, т.к. О(sqrt(n)) лучше О(n/2) и О(n) */
function isPrimeNotOptimized(numb) {
  if (typeof numb !== "number") {
    return "Вы ввели не число!";
  }

  if (numb < 2) {
    return false;
  }

  for (let i = 2; i < numb; i++) { 
    if (numb % i == 0) {
      return false;
    }
  }
  return true;
}

// Тестовый запуск
console.log(`5 - простое число?\n> ${isPrime(5)}`);
console.log(`151 - простое число?\n> ${isPrime(151)}`);
console.log(`911 - простое число?\n> ${isPrime(911)}`);
console.log(`6 - простое число?\n> ${isPrime(6)}`);
console.log(`${isPrime([1, 2])}`);

console.log(`\n\n911 - простое число?\n> ${isPrimeNotOptimized(911)}`);
console.log(`6 - простое число?\n> ${isPrimeNotOptimized(6)}`);