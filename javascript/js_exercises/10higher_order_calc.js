//! Higher Order Calculator

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2
}

function square(num1, num2) {
  return num1**num2;
}

function calculator(operator, num1, num2) {
  return operator(num1, num2);
}

console.log("Adding: " + calculator(add, 5, 4))
console.log("Subtracting: " + calculator(subtract, 5, 4))
console.log("Multiplying: " + calculator(multiply, 5, 4))
console.log("Dividing: " + calculator(divide, 5, 4))
console.log("Squaring: " + calculator(square, 5, 4))
