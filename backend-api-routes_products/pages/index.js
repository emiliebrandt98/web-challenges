import useSWR from "swr";
import Link from "next/link";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Data not found.</h1>;
  }

  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
