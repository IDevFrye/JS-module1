'use strict';

const MIN_RAND = 1
const MAX_RAND = 100

function generateNumber() {
  alert('Добро пожаловать в игру "Угадай число"!');
  alert('Я загадал число от 1 до 100. Попробуй угадать!');
  const number = Math.floor(Math.random() * (MAX_RAND - MIN_RAND + 1)) + MIN_RAND;
  return number;
}

function processGame(number) {
  let guess;

  while (Number(guess) !== number) {
    guess = prompt("Введи целое число от 1 до 100!")

    if (guess === null) {
      alert("Игра окончена. Жаль, что уходите! :(");
      return;
    }

    const guessNum = Number(guess);
    const guessTrim = guess.trim();
    
    if (isNaN(guessNum) || !Number.isInteger(guessNum) || guessTrim === "") {
      alert("Введи число!");
      continue;
    }

    if (guessNum < MIN_RAND || guessNum > MAX_RAND) {
      alert("Число должно быть в диапазоне от 1 до 100!");
      continue;
    }

    checkNumber(guess, number);
  }

  alert("Игра окончена. Поздравляем, приходите еще раз!")
}

function checkNumber(guess, right) {
  if (right < guess) {
    alert("Меньше!");
  } else if (right > guess) {
    alert("Больше!");
  } else {
    alert("Правильно!")
  }
}

const number = generateNumber();
processGame(number);