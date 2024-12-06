'use strict';

{
  const myWeight = 100;
  const speedLight = 3e8;

  console.log(`Ваша энергия тела составляет: ${myWeight * speedLight ** 2} Дж;
    в экспоненциальной форме: ${(myWeight * speedLight ** 2).toExponential()}.`)
}