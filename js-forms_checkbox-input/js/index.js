console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

hideTosError();

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideTosSuccess() {
  tosSuccess.setAttribute("hidden", "");
}

hideTosSuccess();

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (tosCheckbox.checked) {
    (hideTosError(), showTosSuccess());
  } else {
    return hideTosSuccess();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
