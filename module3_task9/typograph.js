'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputTextArea = document.getElementById('inputText');
  const formatButton = document.getElementById('formatButton');
  const outputTextDiv = document.getElementById('outputText');

  const typograph = (text) => {
    // 1. Неразрывный пробел после предлогов
    const reg = /(?<=\s|^)(в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между)\s+/gi;
    text = text.replace(reg, '$1&nbsp;');

    // 3. Заменяем # и № на &#8470;
    text = text.replace(/#|№/g, '&#8470;');

    // 2. Заменяем © на &#169;
    text = text.replace(/©/g, '&#169;');

    // 4. Тире с пробелами заменяем на &#151;
    text = text.replace(/\s[-–]\s/g, ' &#151; ');

    // 5. Замена кавычек на «ёлочки» &laquo; &raquo;
    text = text.replace(/"([^"]+)"/g, '&laquo;$1&raquo;');

    return text;
  };

  formatButton.addEventListener('click', () => {
    const userInput = inputTextArea.value;
    const formattedText = typograph(userInput);
    console.log('formattedText: ', formattedText);

    outputTextDiv.innerHTML = formattedText;
  });
});
