// Verbindungstool zur MongoDB-Datenbank importieren
// Das Product-Mongoose-Modell importieren, um Daten abfragen oder erstellen zu können
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  // Stellt sicher, dass die Datenbankverbindung aufgebaut ist
  await dbConnect();

  // FALL 1: GET-Anfrage (Alle Produkte abrufen)
  if (request.method === "GET") {
    // Holtt alle Produkte aus der Datenbank (Product.find())
    // .sort({ createdAt: -1 }) sortiert sie absteigend nach Erstellungsdatum (neueste Produkte zuerst)
    const products = await Product.find().sort({ createdAt: -1 });

    response.status(200).json(products);
    return;
  }

  // FALL 2: POST-Anfrage (Ein neues Produkt erstellen)
  if (request.method === "POST") {
    try {
      // Entnimmt die vom Client übermittelten Daten aus dem Request-Body
      const productData = request.body;

      // Erstellt ein neues Produkt-Dokument in der MongoDB-Datenbank mit diesen Daten
      await Product.create(productData);

      // HTTP Status 201 (Created) zurückgeben, um die erfolgreiche Erstellung zu bestätigen
      response.status(201).json({ status: "Product created" });
    } catch (error) {
      // Falls z. B. Validierungsfehler auftreten (ein required-Feld fehlt), den Fehler in der Konsole loggen
      console.log(error);

      // HTTP Status 400 (Bad Request) senden und die konkrete Fehlermeldung an den Client zurückgeben
      response.status(400).json({ error: error.message });
    }

    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
