console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const body = document.querySelector("body");
const article = document.querySelector(".post");

// Genereller Post
const socialMediaPost = document.createElement("article");
body.append(socialMediaPost);
socialMediaPost.classList.add("post");

// Text
const socialMediaText = document.createElement("p");
socialMediaPost.append(socialMediaText);
socialMediaText.classList.add("post__content");
socialMediaText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// Footer mit Username und Like-Button
const socialMediaFooter = document.createElement("footer");
socialMediaPost.append(socialMediaFooter);
socialMediaFooter.classList.add("post__footer");

// Username
const socialMediaUsername = document.createElement("span");
socialMediaFooter.append(socialMediaUsername);
socialMediaUsername.classList.add("post__username");
socialMediaUsername.textContent = "@username";

// Like
const socialMediaLike = document.createElement("button");
socialMediaFooter.append(socialMediaLike);
socialMediaLike.classList.toggle("post__button");
socialMediaLike.textContent = "♥ Like";
socialMediaLike.addEventListener("click", handleLikeButtonClick);
