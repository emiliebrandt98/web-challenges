console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(form);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  event.target.elements.firstName.focus();

  const ageBadnessSum = Number(data.age) + Number(data.badness);
  console.log(ageBadnessSum);
});
