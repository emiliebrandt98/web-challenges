// Verbindungstool zur MongoDB-Datenbank importieren
// Das Product-Mongoose-Modell importieren, um Abfragen durchführen zu können
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

// Der API-Route-Handler für Serverless Functions
// Muss 'async' sein, da Datenbankoperationen asynchron (mit 'await') laufen
export default async function handler(request, response) {
  // Stellt sicher, dass die Verbindung zur MongoDB-Datenbank aktiv ist, bevor wir fortfahren
  await dbConnect();

  // Entpackt die 'id' aus den URL-Parametern
  const { id } = request.query;

  // Prüft, ob es sich um eine GET-Anfrage (Daten abrufen) handelt
  if (request.method === "GET") {
    // Sucht das Produkt anhand der ID in der Datenbank
    // .populate("reviews") ersetzt die Review-ID-Array-Einträge automatisch durch die tatsächlichen Review-Objekte
    const product = await Product.findById(id).populate("reviews");

    // Falls kein Produkt mit dieser ID gefunden wurde (Beispiel: falsche ID)
    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  // Falls die HTTP-Methode nicht "GET" ist (z. B. POST, DELETE oder PUT auf dieser Route):
  response.status(405).json({ status: "Method not allowed." });
}
