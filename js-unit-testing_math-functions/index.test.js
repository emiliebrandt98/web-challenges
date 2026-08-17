import { add, subtract, multiply, divide } from "./index.js";

// ADD
test("adds the numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative number with the sum of the numbers 2 and -3", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns a Number close to 0.3 with the sum of the numbers 0.1 and 0.2", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// SUBTRACT
test("subtracts the numbers 15 and 5 correctly", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative number when subtracting the numbers 15 and 20", () => {
  const result = subtract(15, 20);
  expect(result).toBeLessThan(0);
});

// MULTIPLY
test("multiplies the numbers 2 and 4 correctly", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative number when multiplies the numbers -2 and 4", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("returns a negative number when multiplies the numbers 2 and -4", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("returns a positiv Number when multiplies the numbers -2 and -4", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

// DIVIDE
test("divides the numbers 9 and 3 correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if the second number is 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
