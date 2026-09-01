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

  try {
    // –––––––––––– GET
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

    // –––––––––––– PUT
    if (request.method === "PUT") {
      // Liest die vom Client gesendeten neuen Daten aus dem Request-Body aus
      const updatedProduct = request.body;

      // Sucht das Produkt nach ID und überschreibt es mit den neuen Daten
      const product = await Product.findByIdAndUpdate(
        id,
        updatedProduct,
      ).populate("reviews");

      // Falls kein Produkt zum Aktualisieren unter dieser ID existiert
      if (!product) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      response.status(200).json({ status: "Product successfully updated" });
      return;
    }

    // –––––––––––– DELETE
    if (request.method === "DELETE") {
      // Sucht das Produkt anhand seiner ID in der Datenbank und löscht es
      const deletedProduct = await Product.findByIdAndDelete(id);

      // Falls das zu löschende Produkt gar nicht existiert
      if (!deletedProduct) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      response.status(200).json({ status: "Product successfully deleted" });
      return;
    }
  } catch (error) {
    // Fängt unerwartete Datenbank- oder Serverfehler ab und gibt einen 500-Status zurück
    response.status(500).json({ status: "Internal Server Error" });
    return;
  }

  // Falls eine HTTP-Methode aufgerufen wird, die nicht unterstützt wird (z. B. POST)
  response.status(405).json({ status: "Method not allowed." });
}
