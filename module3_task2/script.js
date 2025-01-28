'use strict';

{
  const init = () => {
    const div = document.querySelector('.task3');
    const input = document.createElement('input');
    const p = document.createElement('p');

    div.append(input, p);

    let timeout;

    input.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        p.textContent = input.value;
      }, 300);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    init();
  });
};
