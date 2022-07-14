// Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.

export default class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  divide(a, b) {
    this.result = a / b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
console.log(calculator.divide(1, 2));
console.log(calculator.multiply(1, 2));