const data = ["1", "2", "3"];

// typeof gibt den Datentyp von "data" als String zurück.
// Für ein Array ist das "object" (Arrays sind technisch gesehen Objekte).
switch (typeof data) {
  case "undefined":
    // Trifft zu, wenn "data" nie einen Wert zugewiesen bekommen hat
    console.log("undefined");
    break;

  case "null":
    // Wird in der Praxis NIE erreicht:
    // typeof null ergibt "object", nicht "null" (bekannter JS-Kuriosum).
    // Der eigentliche null-Check passiert weiter unten in case "object".
    console.log("null!");
    break;

  case "number":
    // isNaN prüft, ob der Wert "Not a Number" ist
    // (z.B. Ergebnis von 0/0 oder "abc" * 2)
    if (isNaN(data)) {
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;

  case "string":
    console.log("string!");
    break;

  case "boolean":
    console.log("boolean!");
    break;

  case "function":
    console.log("function!");
    break;

  case "object":
    // Hierher kommen ALLE drei Fälle: null, Arrays und normale Objekte,
    // weil typeof sie nicht unterscheiden kann. Deshalb prüfen wir hier
    // manuell mit weiteren Bedingungen, um welchen Fall es sich handelt.
    if (data === null) {
      // Einziger sicherer Weg, null zu erkennen: direkter Vergleich mit ===
      console.log("null!");
    } else if (Array.isArray(data)) {
      // Array.isArray() erkennt speziell Arrays (im Gegensatz zu typeof)
      console.log("array!");
    } else {
      // Was übrig bleibt: ein "normales" Objekt wie { a: 1 }
      console.log("object!");
    }
    break;

  default:
    // Falls typeof einen Wert liefert, der oben nicht abgedeckt ist
    // (z.B. "symbol" oder "bigint")
    console.log("I have no idea!");
    break;
}
