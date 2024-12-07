'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix([...arr], prefix) {
  if (typeof prefix !== "string") {
    return "Вы передали префикс не как строку!";
  }

  if (arr.length === 0) {
    return "Вы передали пустой массив!";
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${prefix} ${arr[i]}`;
  }

  return arr;
}

// Тестовый запуск
console.log(addPrefix(names, 'Mr'));
console.log(addPrefix(['Alexeeva', 'Moreva'], 'Mrs'));
console.log(addPrefix([], ''));
console.log(addPrefix(['test'], 45));