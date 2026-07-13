console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchButton = document.querySelector('[data-js="button-switch"]');
// let isUpperCase = true;

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

switchButton.addEventListener("click", () => {
  const saveValueFirst = firstInput.value;
  const saveValueSecond = secondInput.value;
  secondInput.value = saveValueFirst;
  firstInput.value = saveValueSecond;
});

// isUpperCase = isUpperCase ? true : false;
// if (isUpperCase) {
//   firstInput.value = firstInput.value.toUpperCase();
//   secondInput.value = secondInput.value.toUpperCase();
// } else {
//   firstInput.value = firstInput.value.toLowerCase();
//   secondInput.value = secondInput.value.toLowerCase();
// }
