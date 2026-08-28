import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data: product, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return <h1>Data not found.</h1>;
  }

  const { name, description, price, currency, category } = product;

  return (
    <main>
      <Link href={"/"}>← All Products</Link>
      <header>
        <h1>{name}</h1>
      </header>
      <section>
        <p>{description}</p>
        <strong>{`${price} ${currency}`}</strong>
        <p>{category}</p>
      </section>
    </main>
  );
}
