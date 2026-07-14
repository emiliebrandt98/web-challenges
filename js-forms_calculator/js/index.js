console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const number1 = Number(data.numberA);
  const number2 = Number(data.numberB);

  switch (data.operator) {
    case "addition":
      result = add(number1, number2);
      break;
    case "subtraction":
      result = subtract(number1, number2);
      break;
    case "multiplication":
      result = multiply(number1, number2);
      break;
    case "division":
      result = divide(number1, number2);
      break;
    default:
      alert("Can not perfom operation");
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
