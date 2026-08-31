import mongoose from "mongoose";

const { Schema } = mongoose;

// Struktur (Schema) für ein einzelnes "Review" definieren
const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

// Modell erstellen oder wiederverwenden:
// Prüft, ob das "Review"-Modell im Cache bereits existiert.
// Das verhindert Fehler durch mehrfaches Kompilieren des Modells in Frameworks wie Next.js.
// Falls es nicht existiert, wird es neu anhand des 'reviewSchema' erstellt.
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
