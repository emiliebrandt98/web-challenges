console.clear();

const url = "https://swapi.py4e.com/api/people";

// Entire data object
// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// Different values
// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data.results);
// }

// Bonus
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[2].eye_color);
}

fetchData();
