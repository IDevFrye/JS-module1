'use strict';

//Нахождение НОД (greatest common divisor) алгоритмом Евклида
function gcd(first, second) { 
  if (typeof first !== "number" || typeof second !== "number") {
    return "Вы ввели не число(а)!";
  }

  let a, b;
  if (first > second) {
    a = first, b = second;
  } else {
    a = second, b = first;
  }
  
  while (a % b !== 0) {
    [a, b] = [b, a % b];
  }

  return `Наименьший общий делитель (НОД) чисел (${first}, ${second}) = ${b}`;
}

// Тестовый запуск
console.log(gcd(1071, 462));
console.log(gcd(84, 90));
console.log(gcd(4, 12));
console.log(gcd(6, {}));