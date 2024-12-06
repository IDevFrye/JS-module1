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

{
  const itemName = prompt("Введите наименование товара: ");
  console.log(`Тип наименования: ${typeof itemName}`);

  let flag = true;
  let itemCount;
  while (flag) {
    itemCount = Number(prompt("Введите количество товара: "));
  
    if (!Number.isInteger(itemCount)) {
      console.warn(`Неверный тип данных для количества!`);
    } else {
      console.log(`Тип количества: ${typeof itemCount}`);
      flag = false;
    }
  }

  const itemCategory = prompt("Введите категорию товара: ");
  console.log(`Тип категории: ${typeof itemCategory}`);

  let flagPrice = true;
  let itemPrice;
  while (flagPrice) {
    itemPrice = Number(prompt("Введите цену товара: "));
  
    if (!Number.isInteger(itemPrice)) {
      console.warn(`Неверный тип данных для цены!`);
    } else {
      console.log(`Тип количества: ${typeof itemPrice}`);
      flagPrice = false;
    }
  }

  const totalAmount = itemPrice * itemCount;
  console.log(`На складе ${itemCount} единиц(ы) товара "${itemName}" на сумму ${totalAmount} рублей.`);
}