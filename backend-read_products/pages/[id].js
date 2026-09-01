import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import Button from "@/components/Button";
import Comments from "@/components/Comments";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT", // HTTP-Methode zum Updaten von Daten
      headers: {
        "Content-Type": "application/json", // Informiert den Server, dass wir Daten im JSON-Format senden
      },
      body: JSON.stringify(productData), // Wandelt das JS-Objekt in einen JSON-String um
    });

    if (response.ok) {
      // Aktualisiert den SWR-Cache, damit die geänderten Daten sofort auf der Seite angezeigt werden
      mutate();
      setIsEditMode(false);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE", // HTTP-Methode zum Updaten von Daten
    });

    if (response.ok) {
      // Wartet auf das Verarbeiten der JSON-Antwort des Servers
      // await response.json();
      router.push("/");
    } else {
      console.log(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }

  return (
    <>
      <ProductCard>
        <h2>{product.name}</h2>
        <p>Description: {product.description}</p>
        <p>
          Price: {product.price} {product.currency}
        </p>
        <Comments reviews={product.reviews} />

        <Button
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          {isEditMode ? "Cancel" : "Update the Fish"}
        </Button>

        <Button
          type="button"
          onClick={() => {
            handleDeleteProduct(id);
          }}
        >
          Delete the Fish
        </Button>

        {isEditMode && (
          <ProductForm
            onSubmit={handleEditProduct}
            isEditMode={true}
            value={product}
          />
        )}
        <hr />
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
    </>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
