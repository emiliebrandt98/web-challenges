import styled from "styled-components";
import StyledButton from "@/components/Button";
import useSWR from "swr";

export default function ProductForm() {
  const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
