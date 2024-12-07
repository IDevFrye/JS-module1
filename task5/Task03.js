'use strict';

// 1-ый способ: через встроенные методы
function revertString(str) {
  if (typeof str !== "string") {
    return "Вы ввели не строку!";
  }

  return str.split('').reverse().join('');
}

// 2-ой способ: через рекурсию
function revertStringRec(str) {
  if (typeof str !== "string") {
    return "Вы ввели не строку!";
  }

  if (str === "") {
    return "";
  }

  return revertStringRec(str.substring(1)) + str.charAt(0);
}

// Тестовый запуск
console.log(revertString("Привет мир"));
console.log(revertString("НДФЛ"));
console.log(revertString(5.67));

console.log(revertStringRec("Привет мир"));
console.log(revertStringRec("НДФЛ"));
console.log(revertStringRec(5.67));