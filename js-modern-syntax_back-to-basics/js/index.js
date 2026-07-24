/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

// export const getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" }
// ) => {
//   const [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };

// Teil 1: Ersatz für Destructuring in den Funktionsparametern
// (Original: ({ name, country }) => [name, country])
export const getNameAndCountry = (city) => {
  const name = city.name; // Eigenschaft manuell statt per Destructuring auslesen
  const country = city.country;
  return [name, country];
};

export const getRelocatedCity = (city1, city2) => {
  // Teil 2.1: Ersatz für den Default-Parameter
  // (Original: city2 = { name: "Berlin", country: "Germany" })
  // Falls city2 beim Aufruf nicht übergeben wurde, Standardwert manuell setzen
  if (city2 === undefined) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  // Teil 2.2: Ersatz für Array-Destructuring mit Lücke
  // (Original: const [, country] = getNameAndCountry(city2))
  const result = getNameAndCountry(city2); // ganzes Array speichern, z. B. ["Berlin", "Germany"]
  const country = result[1]; // nur das zweite Element (country) per Index herausholen, "name" wird ignoriert

  // Teil 2.3: Ersatz für den Spread-Operator
  // (Original: return { ...city1, country })
  // Neues Objekt von Hand bauen statt city1 komplett zu kopieren
  return {
    name: city1.name, // nur die benötigte Eigenschaft aus city1 übernehmen
    country: country, // mit dem neu berechneten Wert überschreiben
  };
};
