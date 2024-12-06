'use strict';

// Задача №4.2
{
  const rain = Math.round(Math.random());

  if (rain) {
    console.info("Пошёл дождь. Возьмите зонт!");
  } else {
    console.info("Дождя нет!");
  }
}

// Задача №4.3
{
  const LIMIT = 265;

  const result1 = Number(prompt("Введите кол-во баллов по первому предмету: "));
  const result2 = Number(prompt("Введите кол-во баллов по второму предмету: "));
  const result3 = Number(prompt("Введите кол-во баллов по третьему предмету: "));

  if (Number.isInteger(result1) && Number.isInteger(result2) && Number.isInteger(result3) && result1 > 0 && result2 > 0 && result3 > 0) {
    if (result1 + result2 + result3 >= LIMIT) {
      console.info(`Поздравляю, вы поступили на бюджет! Сумма составляет: ${result1 + result2 + result3}, что не менее ${LIMIT}!`);
    } else {
      console.info(`К сожалению, вы не поступили на бюджет! Сумма составляет: ${result1 + result2 + result3}, что менее ${LIMIT}!`);
    }
  } else {
    console.warn("Вы ввели некорректные данные!");
  }
}

// Задача №4.4
{
  const MIN_CURRENCY = 100;

  const request = Number(prompt("Введите желаемую сумму, которую хотите снять: "));

  if (Number.isInteger(request) && request > 0) {
    if (request % MIN_CURRENCY === 0) {
      console.info("Выдача произошла успешно!");
    } else {
      console.info("Операция прервана. Минимальный номинал = 100 руб.");
    }
  } else {
    console.warn("Вы ввели некорректные данные!");
  }
}