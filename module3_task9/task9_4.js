'use strict';

{
  const replaceUrls = (text) => {
    return text.replace(/(https?:\/\/)([a-zA-Z0-9.-]+\.[a-zA-Z]{2,5})/g, '<a href="$1$2">$2</a>');
  };

  const testString = "Сайт: http://site.ru, а также https://site.com и еще http://example.org.";
  console.log(replaceUrls(testString));
};
