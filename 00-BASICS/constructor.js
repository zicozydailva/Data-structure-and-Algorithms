// class ... a blueprint for creating objects... defining properties and/or methods.
// constructor ... a special method for assigning properties automatically - called when creating an object.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log("You drive a car");
  }
  brake() {
    console.log("You stepped on the brake");
  }
}

let player1 = new Car("Benz", 2012);
let player2 = new Car("Toyota", 2002);

console.log(player1.year);
console.log(player1.model);

console.log(player2.year);
console.log(player2.model);
