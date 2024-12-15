'use strict';

const PERCENTAGE_ATTEMPTS = 0.3;
const allGuesses = [];

function beginGame() {
  alert('Добро пожаловать в игру "Угадай число"!');
  alert('Давай сначала определимся с диапозоном числа!');

  function getLowerLimit() {
    const lowerLimit = prompt('Введи целое число начала интервала!');
    if (lowerLimit === null) {
      return 'Игра окончена. Жаль, что уходите! :(';
    }

    const lowerNum = Number(lowerLimit);
    const lowerTrim = lowerLimit.trim();
    if (isNaN(lowerNum) || !Number.isInteger(lowerNum) || lowerTrim === '') {
      alert('Введи целое число!');
      return getLowerLimit();
    }

    return lowerLimit;
  }

  function getUpperLimit() {
    const upperLimit = prompt('Введи целое число конца интервала!');
    if (upperLimit === null) {
      return 'END';
    }

    const upperNum = Number(upperLimit);
    const upperTrim = upperLimit.trim();
    if (isNaN(upperNum) || !Number.isInteger(upperNum) || upperTrim === '') {
      alert('Введи целое число!');
      return getUpperLimit();
    }

    return upperLimit;
  }

  const lowLim = getLowerLimit();
  if (lowLim === 'Игра окончена. Жаль, что уходите! :(') {
    return ['Игра окончена. Жаль, что уходите! :(', 'END'];
  }
  const uppLim = getUpperLimit();
  if (uppLim === 'END') {
    return ['Игра окончена. Жаль, что уходите! :(', 'END'];
  }

  const lowNumb = Math.min(Number(lowLim), Number(uppLim));
  const upNumb = Math.max(Number(lowLim), Number(uppLim));

  return [lowNumb, upNumb];
}

function generateNumber(lowNumb, upNumb) {
  const att = Math.floor((upNumb - lowNumb + 1) * PERCENTAGE_ATTEMPTS);
  alert(`Я загадал число от ${lowNumb} до ${upNumb}.
  Попробуй угадать, у тебя есть ${att} попыток!`);
  const number = Math.floor(Math.random() * (upNumb - lowNumb + 1)) + lowNumb;
  return [number, att];
}

function processGame(lower, upper) {
  console.log('upper: ', upper);
  console.log('lower: ', lower);

  if (lower === 'Игра окончена. Жаль, что уходите! :(' && upper === 'END') {
    alert(lower);
    return;
  }

  const [number, maxAttempts] = generateNumber(lower, upper);
  let attempts = 0;

  function guessNumber() {
    if (attempts >= maxAttempts) {
      alert('У вас закончились попытки! К сожалению, Вы проиграли! :(');
      return;
    }

    const guess = prompt(`Введи целое число от ${lower} до ${upper}!
       У вас осталось ${maxAttempts - attempts} попыток.`);

    if (guess === null) {
      alert('Игра окончена. Жаль, что уходите! :(');
      return;
    }

    const guessNum = Number(guess);
    const guessTrim = guess.trim();

    if (isNaN(guessNum) || !Number.isInteger(guessNum) || guessTrim === '') {
      alert('Введи число!');
      return guessNumber();
    }

    if (guessNum < lower || guessNum > upper) {
      alert(`Число должно быть в диапазоне от ${lower} до ${upper}!`);
      return guessNumber();
    }

    if (allGuesses.includes(guessNum)) {
      alert('Это число вы уже вводили!');
      return guessNumber();
    }

    attempts++;
    allGuesses.push(guessNum);

    if (guessNum === number) {
      alert(`Игра окончена. Вы угадали за ${attempts} попыток!
      Поздравляем, приходите еще раз!`);
      return;
    }

    checkNumber(guessNum, number);
    return guessNumber();
  }

  guessNumber();
}

function checkNumber(guess, right) {
  if (right < guess) {
    alert('Меньше!');
  } else if (right > guess) {
    alert('Больше!');
  } else {
    alert('Правильно!');
  }
}

let lowerL = 0; let upperL = 0;
[lowerL, upperL] = beginGame();
processGame(lowerL, upperL);
