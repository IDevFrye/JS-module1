'use strict';

const listIPv4 = require('./ipv4');

function uniqueIPs(arr) {
  if (!Array.isArray(arr)) {
    return "Вы подали на вход не массив IP-адресов!";
  }
  let uniqueIPSet = new Set();
  arr.forEach((item) => uniqueIPSet.add(item));
  return uniqueIPSet;
}

//Тестовый запуск
console.log(`Количество IP-адресов в исходном массиве: ${listIPv4.length}`);

console.log(`Количество уникальных IP-адресов: ${uniqueIPs(listIPv4).size}`);
console.log(uniqueIPs(listIPv4));

console.log(uniqueIPs({}));