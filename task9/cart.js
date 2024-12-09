'use strict';

let cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(name, price, quantity = 1) {
    if (typeof name !== "string" || name.trim() === "") {
      console.error("Ошибка: название товара должно быть непустой строкой.");
      return;
    }

    if (typeof price !== "number" || price <= 0) {
      console.error("Ошибка: цена товара должна быть положительным целым числом.");
      return;
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      console.error("Ошибка: количество товара должно быть положительным целым числом.");
      return;
    }

    this.items.push({
      name,
      price,
      quantity,
    });
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },
  increaseCount(numb) {
    this.count += numb;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    this.totalPrice = parseFloat(this.getTotalPrice().toFixed(2));
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(`\nТовары: ${JSON.stringify(this.items)}`);
    console.log(`Общая стоимость корзины: ${this.getTotalPrice().toFixed(2)} руб.\n`);
  },
};

// Изначальное состояние объекта
console.log('Исходное состояние объекта: ', '\n', cart);

// Тест add() для 3-х товаров
cart.add('Молоко 1л', 75.9, 50);
console.log('\n', 'Добавление 1-го товара: ', '\n', cart, '\n');
cart.add('Кофе молотый 250г', 290.75, 30);
console.log('\n', 'Добавление 2-го товара: ', '\n', cart, '\n');
cart.add('Ноутбук ASUS Vivobook Go 15', 53990.0);
console.log('\n', 'Добавление 3-го товара: ', '\n', cart, '\n');

// Тест ошибочных входных данных
cart.add(12345, 75.9, 50);
cart.add("TEST", "TEST");
cart.add("TEST", 750.78, "TEST");

// Тест print()
cart.print();

// Тест clear()
cart.clear();
console.log("После очистки: ");
console.log(cart);