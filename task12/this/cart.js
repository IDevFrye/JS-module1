'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promo) {
    if (typeof promo !== 'string') {
      console.error('Промокод должен быть строкой!');
    } else {
      switch (promo) {
        case 'METHED':
          this.discount = 15;
          break;
        case 'NEWYEAR':
          this.discount = 21;
          break;
        default:
          console.info('Промокод не найден!');
      }
    }
  },

  add(name, price, quantity = 1) {
    if (typeof name !== 'string' || name.trim() === '') {
      console.error('Ошибка: название товара должно быть непустой строкой.');
      return;
    }

    if (typeof price !== 'number' || price <= 0) {
      console.error(
        'Ошибка: цена товара должна быть положительным целым числом.',
      );
      return;
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      console.error(
        'Ошибка: количество товара должно быть положительным целым числом.',
      );
      return;
    }

    this.items.push({
      name,
      price,
      quantity,
    });
    this.increaseCount(quantity);
  },

  increaseCount(numb) {
    this.count += numb;
  },

  calculateItemPrice() {
    const total = this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0);
    const discountAmount = (total * this.discount) / 100;
    return (total - discountAmount).toFixed(2);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(`\nТовары: ${JSON.stringify(this.items)}`);
    console.log(`Общая стоимость корзины: ${this.totalPrice} руб.\n`);
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

cart.print();

// Применение промокода
console.log('Применение промокода METHED: ');
cart.setDiscount = 'METHED'; // Промокод METHED, скидка 15%
cart.print();

// Применение другого промокода
console.log('Применение промокода NEWYEAR: ');
cart.setDiscount = 'NEWYEAR'; // Промокод NEWYEAR, скидка 21%
cart.print();

// Попытка установить неизвестный промокод
console.log('Применение неизвестного промокода: ');
cart.setDiscount = 'UNKNOWN';

// Попытка установить неверный по формату промокод
console.log('Применение неверного промокода: ');
cart.setDiscount = 111122;

// Тест очистки корзины
cart.clear();
console.log('После очистки: ', cart);

// Попытка изменить totalPrice напрямую
cart.totalPrice = 10; // Не сработает, это геттер
console.log(`\nПопытка изменить totalPrice: ${cart.totalPrice}`);
