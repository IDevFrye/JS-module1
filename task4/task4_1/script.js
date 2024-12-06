'use strict';

{
  const itemName = "Ноутбук ASUS Vivobook Go 15";
  const itemCount = 25;
  const itemCategory = "Электроника";
  const itemPrice = 53990;

  const totalAmount = itemPrice * itemCount;

  console.log(`Наименование товара: ${itemName}`);
  console.log(`Общая сумма товара: ${totalAmount}`);
}

{
  const itemName = "Настольная игра на ассоциации Имаджинариум";
  const itemCount = 200;
  const itemCategory = "Развлечения";
  const itemPrice = 1099;

  const totalAmount = itemPrice * itemCount;

  console.log(`Наименование товара: ${itemName}`);
  console.log(`Общая сумма товара: ${totalAmount}`);
}

// 1-ый вариант (обрабатывает все вводы, выкидывает в консоль предупреждение при несоблюдении хотя бы одного из условий)
{
  const itemName = prompt("Введите наименование товара: ");
  const itemCount = Number(prompt("Введите количество товара: "));
  const itemCategory = prompt("Введите категорию товара: ");
  const itemPrice = Number(prompt("Введите цену товара: "));

  if (Number.isInteger(itemCount) && Number.isInteger(itemPrice)) {
    const totalAmount = itemPrice * itemCount;
    console.log(`На складе ${itemCount} единиц(ы) товара "${itemName}" на сумму ${totalAmount} рублей.`);
  } else {
    console.warn(`Вы ввели некорректные данные`);
  }
}

// 2-ой вариант (при первом неверном вводе, сразу выводит ошибку в консоль и прекращает работу)
{
  const itemName = prompt("Введите наименование товара: ");
  console.log(`Тип наименования: ${typeof itemName}`);

  const itemCount = Number(prompt("Введите количество товара: "));
  if (Number.isInteger(itemCount)) {
    console.log(`Тип количества: ${typeof itemCount}`);
  } else {
    throw new Error(`Вы ввели некорректные данные`);
  }

  const itemCategory = prompt("Введите категорию товара: ");
  console.log(`Тип категории: ${typeof itemCategory}`);

  const itemPrice = Number(prompt("Введите цену товара: "));
  if (Number.isInteger(itemCount)) {
    console.log(`Тип цены: ${typeof itemPrice}`);
  } else {
    throw new Error(`Вы ввели некорректные данные`);
  }

  const totalAmount = itemPrice * itemCount;
  console.log(`На складе ${itemCount} единиц(ы) товара "${itemName}" на сумму ${totalAmount} рублей.`);
}