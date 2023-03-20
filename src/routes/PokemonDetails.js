import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

// define in the component file where the data is used, but export to pass in through router setup
export async function loader({ params }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemonData = await response.json();  
  return pokemonData;
}

function PokemonDetails() {
  const params = useParams();
  const pokemon = useLoaderData();

  if (!pokemon) {
    return <>loading...</>;
  }

  return (
    <div>
      <img width="300" height="300" src={`https://img.pokemondb.net/artwork/large/${params.name}.jpg`} />
      <h1>{params.name}</h1>
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>
      <div>
        <p>abilities:</p>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>
              <span>{ability.ability.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>types:</p>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.type.name}>
              <span>{type.type.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>stats:</p>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span>{stat.stat.name}: </span>
              <span>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { PokemonDetails };
