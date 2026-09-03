const stringA = "listen";
const stringB = "silent";
const stringC = "hello";
const stringD = "bellow";
const stringE = "hello";
const stringF = "lello";

function isAnagram(string1, string2) {
  // TODO: return true if string2 is an anagram of string1
  // Schritt 1: split("") = String wird an jedem Zeichen getrennt und in ein Array aus einzelnen Buchstaben umgewandelt.
  // Schritt 2: sort() = sortiert die Buchstaben alphabetisch.
  // Schritt 3: join("") = wandelt alle Elemente im Array in einen String ohne Trennzeichen
  // Schritt 4: string1 und string2 vergleichen.

  const anagram = (string) => string.split("").sort().join("");
  return anagram(string1) === anagram(string2);
}

console.log(isAnagram(stringA, stringB)); // Expected: true
console.log(isAnagram(stringC, stringD)); // Expected: false
console.log(isAnagram(stringE, stringF)); // Expected: false

// CHRISTOPHERS LOESUNG
// const stringA = "listen";
// const stringB = "silent";
// const stringC = "hello";
// const stringD = "bellow";
// const stringE = "hello";
// const stringF = "lello";

// function isAnagram(string1, string2) {
//   if (string1 === string2) {
//     return true;
//   }
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   const sorted = string1.split("").sort().join("");
//   const sorted2 = string2.split("").sort().join("");

//   return sorted === sorted2;
//   // wenn string 1 === string 2 = true
//   // wenn .length1 != .length2 = false
//   //wenn string 1 != string 2 = false

//   // TODO: return true if string2 is an anagram of string1
// }

// console.log(isAnagram(stringA, stringB)); // Expected: true
// console.log(isAnagram(stringC, stringD)); // Expected: false
// console.log(isAnagram(stringE, stringF)); // Expected: false
