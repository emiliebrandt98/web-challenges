console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let star = 1; star <= 5; star++) {
    const img = document.createElement("img");

    // ----------- Filling Stars -----------
    if (filledStars >= star) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }

    img.addEventListener("click", () => {
      renderStars(star);
    });

    starContainer.append(img);
  }

  // --^-- write or modify code above this line --^--
}
renderStars();
