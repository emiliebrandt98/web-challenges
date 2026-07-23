console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

// Neu
const errorText = document.querySelector("p.error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Neu
  errorText.innerText = "";
  output.innerText = "";

  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  // Überarbeitet
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch {
    errorText.innerText = "Error = Cannot divide by zero!";
  }
});
