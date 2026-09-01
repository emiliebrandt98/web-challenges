import styled from "styled-components";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";
import useSWR from "swr";

export default function HomePage() {
  const { mutate } = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // Schickt eine POST-Anfrage an die Backend-API, um das neue Produkt in der Datenbank zu speichern
    const response = await fetch("/api/products", {
      method: "POST", // HTTP-Methode zum Erstellen von Daten
      headers: {
        "Content-Type": "application/json", // Informiert den Server, dass wir Daten im JSON-Format senden
      },
      body: JSON.stringify(productData), // Wandelt das JS-Objekt in einen JSON-String um
    });

    if (response.ok) {
      // Invalidiert den SWR-Cache für "/api/products", stoßt ein Re-Fetching an und aktualisiert die Produktliste in der UI
      mutate();
      event.target.reset();
    }
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} isEditMode={false} />
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
