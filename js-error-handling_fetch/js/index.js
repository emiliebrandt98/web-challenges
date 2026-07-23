console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url, {
      headers: { "x-api-key": "reqres_c0aaf46c1fa2400e8fb8669bacd63171" },
    });
    // fetch wirft bei einem 404 (oder anderen Fehler-Status) KEINEN Fehler,
    // deshalb müssen wir response.ok selbst prüfen und den Fehler manuell auslösen
    if (response.ok === false) {
      throw new Error(`Status Code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // fängt sowohl Netzwerkfehler (z. B. keine Internetverbindung)
    // als auch den oben manuell geworfenen Fehler (Status nicht ok) ab
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      // Fehlerfall: Fehlermeldung anzeigen, User-Bereich leeren
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      // Erfolgsfall: User-Daten anzeigen, alte Fehlermeldung entfernen

      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
