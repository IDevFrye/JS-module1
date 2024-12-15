'use strict';

function getAckermann(m, n) {
  if (typeof m !== 'number' || typeof n !== 'number' || n < 0 || m < 0) {
    return 'Введите неотрицательные целые числа!';
  }
  if (m === 0) {
    return n + 1;
  }
  if (n === 0) {
    return getAckermann(m - 1, 1);
  }
  return getAckermann(m - 1, getAckermann(m, n - 1));
}

console.log(`Значение функции Аккермана A(2, 3) = ${getAckermann(2, 3)}`);
console.log(`Значение функции Аккермана A(1, 4) = ${getAckermann(1, 4)}`);
console.log(`${getAckermann(-1, 0)}`);
console.log(`${getAckermann('dssd', 0)}`);
