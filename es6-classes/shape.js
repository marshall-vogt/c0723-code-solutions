/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `Area is ${this.area} and perimeter is ${this.perimeter}`;
  }
}

const newShape = new Shape(9, 4);
console.log(newShape.describe());
