import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import useSWR from "swr";

export default function HomePage() {
  const [pageNr, setPageNr] = useState(1);

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

  const URL = `https://swapi.py4e.com/api/people/?page=${pageNr}`;
  const { data: people, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return "loading ...";
  }

  if (error) {
    return "failed to load.";
  }

  // Handler Function
  function handleNextButton() {
    setPageNr((prevPageNr) => prevPageNr + 1);
  }

  function handlePreviousButton() {
    setPageNr((prevPageNr) => Math.max(1, prevPageNr - 1));
  }

  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        {people.results.map((person) => {
          const id = person.url.split("/").filter(Boolean).pop();
          return (
            <li key={id}>
              <StyledLink href={`/characters/${id}`}>{person.name}</StyledLink>
            </li>
          );
        })}
      </List>
      <Wrapper>
        <Button onClick={handlePreviousButton} type="button">
          Previous Page
        </Button>
        <Button onClick={handleNextButton} type="button">
          Next Page
        </Button>
      </Wrapper>
    </Layout>
  );
}

const List = styled.ul`
  background-color: var(--color-light);
  list-style-type: "➡️ ";
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;

const Button = styled.button`
  padding: 6px 10px;
  color: black;
  background-color: grey;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: white;
  }
`;
