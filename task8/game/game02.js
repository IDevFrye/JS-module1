'use strict';

const PERCENTAGE_ATTEMPTS = 0.3;
let allGuesses = [];

function beginGame() {
  alert('Добро пожаловать в игру "Угадай число"!');
  alert('Давай сначала определимся с диапозоном числа!');

  let lowerLimit;
  let lowerTrim;
  while (!Number.isInteger(Number(lowerLimit)) || lowerTrim === "") {
    lowerLimit = prompt("Введи целое число начала интервала!");
    if (lowerLimit === null) {
        return ["Игра окончена. Жаль, что уходите! :(", "END"];
    }
    
    const lowerNum = Number(lowerLimit);
    lowerTrim = lowerLimit.trim();
    if (isNaN(lowerNum) || !Number.isInteger(lowerNum) || lowerTrim === "") {
      alert("Введи целое число!");
      continue;
    }
  }
  console.log('lowerLimit: ', lowerLimit);
  
  let upperLimit;
  let upperTrim;
  while (!Number.isInteger(Number(upperLimit)) || upperTrim === "") {
    upperLimit = prompt("Введи целое число конца интервала!");
    if (upperLimit === null) {
        return ["Игра окончена. Жаль, что уходите! :(", "END"];
    }

    const upperNum = Number(upperLimit);
    upperTrim = upperLimit.trim();
    if (isNaN(upperNum) || !Number.isInteger(upperNum) || upperTrim === "") {
      alert("Введи целое число!");
      continue;
    }
  }

  const lowNumb = Math.min(Number(lowerLimit), Number(upperLimit));
  const upNumb = Math.max(Number(lowerLimit), Number(upperLimit));

  return [lowNumb, upNumb];
}

function generateNumber(lowNumb, upNumb) {
  const att = Math.floor((upNumb - lowNumb + 1) * PERCENTAGE_ATTEMPTS);
  alert(`Я загадал число от ${lowNumb} до ${upNumb}. Попробуй угадать, у тебя есть ${att} попыток!`);
  const number = Math.floor(Math.random() * (upNumb - lowNumb + 1)) + lowNumb;
  return [number, att];
}

function processGame(lower, upper) {
  console.log('upper: ', upper);
  console.log('lower: ', lower);

  if (lower === "Игра окончена. Жаль, что уходите! :(" && upper === "END") {
    alert(lower);
    return;
  }

  const [number, maxAttempts] = generateNumber(lower, upper);
  let guess;
  let attempts = 0;

  while (Number(guess) !== number) {
    if (attempts >= maxAttempts) {
      alert("У вас закончились попытки! К сожалению, Вы проиграли! :(");
      return;
    }

    guess = prompt(`Введи целое число от ${lower} до ${upper}! У вас осталось ${maxAttempts - attempts} попыток.`)

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

    if (guessNum < lower || guessNum > upper) {
      alert(`Число должно быть в диапазоне от ${lower} до ${upper}!`);
      continue;
    }

    if (allGuesses.includes(guessNum)) {
      alert("Это число вы уже вводили!");
      continue;
    }

    attempts++;
    allGuesses.push(guessNum);

    checkNumber(guessNum, number);
  }

  alert(`Игра окончена. Вы угадали за ${attempts} попыток! Поздравляем, приходите еще раз!`)
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

let lowerL, upperL;
[lowerL, upperL] = beginGame();
processGame(lowerL, upperL);