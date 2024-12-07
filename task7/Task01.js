'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter(arrAll, arrFail) {
  if (!Array.isArray(arrAll) || !Array.isArray(arrFail)) {
    return "Вы передали не массивы!"
  }

  if (arrAll.length === 0 || arrFail.length === 0) {
    return "Вы передали пустой массив(ы)!";
  }

  let passedStudents = [...arrAll];
  for (const fail of arrFail) {
    if (arrAll.includes(fail)) {
      passedStudents.splice(passedStudents.indexOf(fail), 1);
    }
  }

  return passedStudents;  
}

// Тестовый запуск
console.log(filter(allStudents, failedStudents));
console.log(filter(allStudents, 34234));
console.log(filter([], failedStudents));