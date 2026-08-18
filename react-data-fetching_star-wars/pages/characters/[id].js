import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const fetcher = async (URL) => {
    const response = await fetch(URL);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  };
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const { data: person, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return "loading :";
  }

  if (error) {
    return "failed to load.";
  }

  return (
    <Layout>
      <Card
        id={id}
        name={person.name}
        height={person.height}
        eyeColor={person.eye_color}
        birthYear={person.birth_year}
      />
    </Layout>
  );
}
