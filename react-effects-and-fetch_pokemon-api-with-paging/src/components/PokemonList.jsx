import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  // Aktuelle Seite
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          // fetch-URL ist nun dynamisch (auf der aktuellen Seite)
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`,
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);
  // Dependence Array: "Falls sich offset ändert, lade loadPokemon neu"

  function handleNextPage() {
    setOffset(offset + 20);
  }

  function handlePreviousPage() {
    // if-Statement wird hier nicht mehr zwingend benötigt.
    if (offset > 0) {
      setOffset(offset - 20);
    }
  }

  return (
    <main>
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={offset === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
