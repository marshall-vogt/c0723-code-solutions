/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = Math.PI * radius * radius;
    this.perimeter = 2 * Math.PI * radius;
  }

  describe() {
    return `${super.describe()} and radius is ${this.radius}`;
  }
}

const newCircle = new Circle(5);
console.log(newCircle.describe());
