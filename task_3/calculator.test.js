import Calculator from "./calculator.js";

// Write at least 3 tests for each of the calculator methods
describe("Calculator", () => {
  const calculator = new Calculator();

  it("should add two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  }
  );

  it("should subtract two numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  }
  );

  it("should divide two numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  }
  );

  it("should multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  }
  );

});