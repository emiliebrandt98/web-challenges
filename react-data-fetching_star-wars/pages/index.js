import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";

const initialCharacters = [
  { id: 1, name: "Luke Skywalker" },
  { id: 2, name: "C-3PO" },
  { id: 3, name: "R2-D2" },
  { id: 4, name: "Darth Vader" },
];

export default function HomePage() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        {initialCharacters.map((character) => (
          <li key={character.id}>
            <StyledLink href={`/characters/${character.id}`}>
              {character.name}
            </StyledLink>
          </li>
        ))}
      </List>
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
