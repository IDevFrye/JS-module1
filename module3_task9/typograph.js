'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputTextArea = document.getElementById('inputText');
  const formatButton = document.getElementById('formatButton');
  const outputTextDiv = document.getElementById('outputText');

  const typograph = (text) => {

    //5. Замена кавычек на «ёлочки» &laquo; &raquo;
    text = text.replace(/\"([^"]+)\"/g, '<span style="color: red;">&amp;laquo;</span>$1<span style="color: red;">&amp;raquo;</span>');
    text = text.replace(/«([^»]+)»/g, '<span style="color: red;">&amp;laquo;</span>$1<span style="color: red;">&amp;raquo;</span>');

    // 1. Неразрывный пробел после предлогов
    const reg = /(?<=\s|^)(в|без|до|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между|во|и|а)\s+/gi;
    text = text.replace(reg, '$1<span style="color: red;">&amp;nbsp;</span>');

    // 3. Заменяем # и № на &#8470;
    text = text.replace(/#|№/g, '<span style="color: red;">&#8470;</span>');

    // 2. Заменяем © на &#169;
    text = text.replace(/© /g, '<span style="color: red;">&amp;copy;&amp;nbsp;</span>');

    // 4. Тире с пробелами заменяем на &#151;
    text = text.replace(/\s[-–]\s/g, '<span style="color: red;">&amp;nbsp;&amp;mdash;</span> ');

    return text;
  };

  formatButton.addEventListener('click', () => {
    const userInput = inputTextArea.value;
    const formattedText = typograph(userInput);

    outputTextDiv.innerHTML = formattedText;
  });
});
