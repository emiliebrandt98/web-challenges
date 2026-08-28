import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher,
  );

  const { firstName, lastName, age, gender, twitter, geohash } = character;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!character) {
    return <h1>Data not found.</h1>;
  }

  return (
    <>
      <h1>{`${firstName} ${lastName}`}</h1>
      <ul>
        <li>{`Age: ${age}`}</li>
        <li>{`Gender: ${gender}`}</li>
        <li>{`Twitter: ${twitter}`}</li>
        <li>{`Geohash: ${geohash}`}</li>
      </ul>
    </>
  );
}
