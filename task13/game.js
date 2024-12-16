'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const checkResult = (userChoice, botChoice) => {
    if (userChoice === botChoice) return 'DRAW';
    if (
      (userChoice === 'камень' && botChoice === 'ножницы') ||
      (userChoice === 'ножницы' && botChoice === 'бумага') ||
      (userChoice === 'бумага' && botChoice === 'камень')
    ) {
      return 'PLAYER';
    }
    return 'BOT';
  };

  const game = () => {
    let playerScore = 0;
    let botScore = 0;

    const playRound = () => {
      const botChoice = FIGURES[getRandomIntInclusive(0, 2)];
      let userInput = prompt('Камень, ножницы или бумага?');
      if (userInput === null) {
        const confirmExit = confirm('Точно ли вы хотите выйти?');
        if (confirmExit) {
          alert(
            `Результат игры:\nИгрок: ${playerScore}\nБот: ${botScore}`,
          );
          return;
        }
        return playRound();
      }

      userInput = userInput.trim().toLowerCase();
      const normalizedChoice = FIGURES.find((fig) =>
        fig.startsWith(userInput),
      );

      if (!normalizedChoice || userInput.trim() === '') {
        alert('Некорректное значение! Попробуйте снова.');
        return playRound();
      }

      const result = checkResult(normalizedChoice, botChoice);

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
