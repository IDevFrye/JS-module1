'use strict';

function isLeap(n, m) {
  if (typeof n !== "number" || typeof m !== "number") {
    return "Вы ввели невалидное число для диапазона!";
  }

  const min = Math.min(n, m);
  const max = Math.max(n, m);

  let leapYears = Array(max - min + 1).fill(0);

  leapYears = leapYears.map((_, index) => min + index);

  leapYears = leapYears.filter(year => 
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  );

  return leapYears;
}

// Тестовый запуск
console.log(isLeap(12300, 12400));
console.log(isLeap(-2300, -2400));
console.log(isLeap(2016, 2000));
console.log(isLeap('test', 2000));