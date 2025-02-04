'use strict';

{
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

  const inputText = `
  Организация "Версусозеро".

  #1
  С учётом сложившейся международной обстановки, граница обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании системы массового участия. Принимая во внимание показатели успешности, социально-экономическое развитие играет определяющее значение для поэтапного и последовательного развития общества. Социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Это главная цель "Версусозеро".

  #2
  Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: дальнейшее развитие различных форм деятельности предопределяет высокую востребованность распределения внутренних резервов и ресурсов! А ещё независимые государства лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии неоднозначны и будут ограничены исключительно образом мышления.

  #3
  Имеется спорная точка зрения, гласящая примерно следующее: независимые государства могут быть призваны к ответу. Повседневная практика показывает, что перспективное планирование прекрасно подходит для реализации вывода текущих активов. Безусловно, понимание сути ресурсосберегающих технологий однозначно фиксирует необходимость позиций, занимаемых участниками в отношении поставленных задач. Приятно, граждане, наблюдать, как интерактивные прототипы разоблачены. Вот вам яркий пример современных тенденций - дальнейшее развитие различных форм деятельности позволяет оценить значение направлений прогрессивного развития.

  © "Версусозеро"
  `;

  console.log(typograph(inputText));
};
