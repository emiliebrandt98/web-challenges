import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import Comments from "@/components/Comments";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

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
        <StyledLink href="/">Back to all</StyledLink>
      </ProductCard>
      <Comments reviews={product.reviews} />
    </>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
