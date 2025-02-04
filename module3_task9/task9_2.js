'use strict';

{
  const emailRegex = /^\w+@[a-zA-z]{3,}\.[a-zA-z]{2,5}$/;

  const validEmails = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io'];
  const invalidEmails = ['my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];

  validEmails.forEach(email => console.log(email, emailRegex.test(email)));
  invalidEmails.forEach(email => console.log(email, emailRegex.test(email)));
};
