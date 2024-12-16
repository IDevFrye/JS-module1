'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'paper', 'scissors'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const SCENARIO = {
    ENG: {
      greeting: `Welcome to the Rock, Paper, Scissors game! 
You will have to fight the bot in a duel for life.`,
      suggestion: `The room was filled with silence in anticipation of a momentous event. 
Choose what you bet your life on: rock, scissors or paper?`,
      positive: `The bot banged his fist on the table in frustration. 
You were able to beat him "" with the help of ""!`,
      negative: `Your hand was on fire from the pain. 
The bot chose "" and beat ""!`,
      draw: `You both chose the same tactic by putting "". 
Well, let's do without casualties for now.`,
      summary_victory: `After learning the mystery of the dungeon and having dealt with the enemy, you return to your homeland as a valiant hero. 
You won with the score:`,
      summary_lose: `Your body has been weakened by deep wounds. You have become a prisoner of a hangover. The world is in danger. 
You lost with the score:`,
      summary_draw: `You were able to escape from the dungeon, leaving the enemy isolated, relying on the wounds inflicted on him.
Draw with the score:`,
      input_error: `You entered an invalid value!`,
      exit_confirm: `Are you sure you want to escape?`,
      bot: `Bot`,
      user: `Player`,
    },
    RUS: {
      greeting: `Добро пожаловать в игру "Камень, ножницы, бумага"! 
Вам придется сразиться с ботом в поединке на жизнь.`,
      suggestion: `Комнату охватила тишина в преддверии знаменательного события. 
Выбирайте, на что ставите свою жизнь: камень, ножницы или бумага?`,
      positive: `Бот стукнул кулаком по столу от досады. 
Вы смогли победить его "" с помощью ""!`,
      negative: `Рука воспламенилась от боли. 
Бот выбрал "" и побил ""!`,
      draw: `Вы оба выбрали "". Ничья. 
Что ж, пока обойдемся без жертв.`,
      summary_victory: `Узнав таинство подземелья и расправившись с противником, Вы возвращаетесь доблестным героем к себе на Родину. 
Вы победили со счётом:`,
      summary_lose: `Ваше тело ослабили глубокие раны. Вы стали узником подземелья. Мир в опасности. 
Вы проиграли со счётом:`,
      summary_draw: `Вы смогли сбежать из подземелья, оставив противника в изоляции, полагаясь на нанесённые ему раны.
Ничья со счётом:`,
      input_error: `Вы ввели некорректное значение!`,
      exit_confirm: `Вы точно хотите попробовать сбежать?`,
      bot: `Бот`,
      user: `Игрок`,
    },
  };

  const getRandomIntInclusive = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const normalizeInput = (input, language) => {
    if (!input) return null;
    const figures = language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    input = input.trim().toLowerCase();

    return figures.find(figure => figure.startsWith(input)) || null;
  };

  const checkResult = (userVar, botVar, lang) => {
    const winningRules = {
      rock: 'scissors',
      scissors: 'paper',
      paper: 'rock',
      камень: 'ножницы',
      ножницы: 'бумага',
      бумага: 'камень',
    };

    if (userVar === botVar) return 'DRAW';
    return winningRules[userVar] === botVar ? 'PLAYER' : 'BOT';
  };

  const game = language => {
    const lang = language === 'EN' || language === 'ENG' ? 'ENG' : 'RUS';
    const figures = lang === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const scenario = SCENARIO[lang];

    const result = {
      player: 0,
      computer: 0,
    };

    const playRound = () => {
      const botChoice = figures[getRandomIntInclusive(0, figures.length - 1)];
      let userInput = prompt(scenario.suggestion);
      let userChoice = normalizeInput(userInput, lang);

      while ((!userChoice || userInput.trim() === '') && userInput !== null) {
        alert(scenario.input_error);
        userInput = prompt(scenario.suggestion);
        userChoice = normalizeInput(userInput, lang);
      }

      if (userInput === null) {
        const exitConfirm = confirm(scenario.exit_confirm);
        if (exitConfirm) {
          const summary = result.player > result.computer ?
            'summary_victory' :
            result.player < result.computer ?
            'summary_lose' :
            'summary_draw';
          alert(`${scenario[summary]}\n
            ${scenario.bot}: ${result.computer}\n
            ${scenario.user}: ${result.player}`);
          return;
        }
        return playRound();
      }

      const matchResult = checkResult(userChoice, botChoice, lang);
      switch (matchResult) {
        case 'PLAYER':
          result.player++;
          alert(scenario.positive.replace('""', botChoice)
            .replace('""', userChoice));
          break;
        case 'BOT':
          result.computer++;
          alert(scenario.negative.replace('""', botChoice)
            .replace('""', userChoice));
          break;
        case 'DRAW':
          alert(scenario.draw.replace('""', userChoice));
          break;
      }

      playRound();
    };

    alert(scenario.greeting);
    playRound();
  };

  window.rpc = game;
})();
