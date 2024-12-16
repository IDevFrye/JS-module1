'use strict';

(() => {
  const FIGURES = {
    ENG: ['rock', 'scissors', 'paper'],
    RUS: ['камень', 'ножницы', 'бумага'],
  };

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const checkResult = (userChoice, botChoice, lang) => {
    const winningRules = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
      камень: 'ножницы',
      ножницы: 'бумага',
      бумага: 'камень',
    };

    if (userChoice === botChoice) return 'DRAW';
    return winningRules[userChoice] === botChoice ? 'PLAYER' : 'BOT';
  };

  const game = (language) => {
    const lang = language === 'ENG' || language === 'EN' ? 'ENG' : 'RUS';
    const figures = FIGURES[lang];

    let playerScore = 0;
    let botScore = 0;

    const playRound = () => {
      const botChoice = figures[getRandomIntInclusive(0, 2)];
      let userInput = prompt(`${figures[0]}, ${figures[1]} или ${figures[2]}?`);

      if (userInput === null) {
        const confirmExit = confirm('Точно ли вы хотите выйти?');
        if (confirmExit) {
          alert(`Результат игры:\nИгрок: ${playerScore}\nБот: ${botScore}`);
          return;
        }
        return playRound();
      }

      userInput = userInput.trim().toLowerCase();
      const normalizedChoice = figures.find((fig) =>
        fig.startsWith(userInput),
      );

      if (!normalizedChoice || userInput.trim() === '') {
        alert('Некорректное значение! Попробуйте снова.');
        return playRound();
      }

      const result = checkResult(normalizedChoice, botChoice, lang);

      if (result === 'PLAYER') {
        playerScore++;
        alert(`Вы победили! Бот выбрал ${botChoice}.`);
      } else if (result === 'BOT') {
        botScore++;
        alert(`Вы проиграли! Бот выбрал ${botChoice}.`);
      } else {
        alert(`Ничья! Вы оба выбрали ${botChoice}.`);
      }

      playRound();
    };

    alert('Добро пожаловать в игру "Камень, ножницы, бумага"!');
    playRound();
  };

  window.rpc = game;
})();
