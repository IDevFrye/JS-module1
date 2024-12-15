'use strict';

const WIDTH_DEFAULT = 5;
const HEIGHT_DEFAULT = 5;

const rectangle = {
  _width: WIDTH_DEFAULT,
  _height: HEIGHT_DEFAULT,
  set width(value) {
    if (typeof value === 'number' && value > 0) {
      this._width = value;
    } else {
      console.error('Ширина должна быть числом больше 0!');
    }
  },
  set height(value) {
    if (typeof value === 'number' && value > 0) {
      this._height = value;
    } else {
      console.error('Высота должна быть числом больше 0!');
    }
  },
  get perimeter() {
    return `${this._width * 2 + this._height * 2} см`;
  },
  get area() {
    return `${this._width * this._height} см^2`;
  },
};

console.log(rectangle);
console.log(`Периметр прямоугольника = ${rectangle.perimeter}`);
console.log(`Площадь прямоугольника = ${rectangle.area}`);

rectangle.width = 7;
rectangle.height = 6;
console.log(rectangle);
console.log(`Периметр прямоугольника = ${rectangle.perimeter}`);
console.log(`Площадь прямоугольника = ${rectangle.area}`);

rectangle.width = 'sd';
rectangle.height = -1;
