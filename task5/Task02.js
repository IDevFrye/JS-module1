'use strict';

function modifyString(str) {
  if (typeof str !== 'string') {
    return "Вы ввели не строку!";
  }
  
  let newStr = str.toLowerCase();
  newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
  return `Модифицированная строка: "${newStr}"`;
}

// Тестовый запуск
console.log(modifyString("привет Мир"));
console.log(modifyString("НДФЛ"));
console.log(modifyString(5.67));