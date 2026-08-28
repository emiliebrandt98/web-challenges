import { getAllProducts } from "@/services/productServices.js";

export default function handler(request, response) {
  // Gibt die komplette Liste aller Jokes zurück
  return response.status(200).json(getAllProducts());
  // Status 200, da eine (auch leere) Liste immer eine valide Antwort ist
}
