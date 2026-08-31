// Mongoose-Bibliothek importieren, um mit der MongoDB-Datenbank zu interagieren
// Das Review-Modell importieren, damit Mongoose weiß, was sich hinter der "Review"-Referenz verbirgt
import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

// Struktur (Schema) für ein "Product"-Dokument in MongoDB definieren
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },

    // Array von MongoDB ObjectIds, die auf Dokumente aus der "Review"-Collection verweisen
    // Ermöglicht die Verknüpfung (Verkettung) von Produkten mit ihren Bewertungen
    reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
  },
  {
    // Fügt automatisch die Felder 'createdAt' und 'updatedAt' hinzu (Erstell- und Änderungsdatum)
    timestamps: true,
  },
);

// Modell erstellen oder wiederverwenden:
// Prüft zuerst, ob das 'Product'-Modell bereits existiert (wichtig für Next.js/Hot-Reloading),
// um zu verhindern, dass das Modell mehrfach registriert wird. Falls nicht, wird es neu erstellt.
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
